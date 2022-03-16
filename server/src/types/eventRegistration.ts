import {
  arg,
  booleanArg,
  idArg,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
} from 'nexus';
import { EventRegistration } from '../generated/nexus-prisma';
import { RegistrationStatus } from '../generated/prisma';
import { registrationStatusEnum } from './enums';
import { eventRegistrationCodeType } from './eventRegistrationCode';
import { EnvelopError } from '@envelop/core';

export const eventRegistrationType = objectType({
  name: EventRegistration.$name,
  description: EventRegistration.$description,
  definition(t) {
    t.field(EventRegistration.id);
    t.field(EventRegistration.createdAt);
    t.field(EventRegistration.type);
    t.field({
      ...EventRegistration.user,
      resolve: (source, args, context) =>
        context.prisma.user
          .findUnique({ where: { id: source.userId } })
          .then((res) => {
            if (!res) {
              throw new EnvelopError('User not found', {
                code: 404,
              });
            }
            return res;
          }),
    });
    t.field(EventRegistration.userId);
    t.field({
      ...EventRegistration.event,
      resolve: (source, args, context) =>
        context.prisma.tumiEvent
          .findUnique({ where: { id: source.eventId } })
          .then((res) => {
            if (!res) {
              throw new EnvelopError('Event not found');
            }
            return res;
          }),
    });
    t.field(EventRegistration.eventId);
    t.field({
      ...EventRegistration.payment,
      resolve: (source, args, context) => {
        // info.cacheControl.setCacheHint({
        //   maxAge: 10,
        //   scope: CacheScope.Public,
        // });
        if (!source.paymentId) return null;
        return context.prisma.stripePayment.findUnique({
          where: { id: source.paymentId },
        });
      },
    });
    t.field(EventRegistration.paymentId);
    t.field(EventRegistration.checkInTime);
    t.field(EventRegistration.manualCheckin);
    t.field(EventRegistration.status);
    t.field(EventRegistration.cancellationReason);
    t.field({
      ...EventRegistration.submissions,
      resolve: (source, args, context) => {
        // info.cacheControl.setCacheHint({ maxAge: 60 * 60 });
        return context.prisma.eventRegistration
          .findUnique({ where: { id: source.id } })
          .submissions();
      },
    });
    t.field({
      name: 'deletingCode',
      type: eventRegistrationCodeType,
      resolve: (source, args, context) => {
        // info.cacheControl.setCacheHint({
        //   maxAge: 10,
        //   scope: CacheScope.Public,
        // });
        return context.prisma.eventRegistrationCode.findUnique({
          where: { registrationToRemoveId: source.id },
        });
      },
    });
    t.field({
      name: 'creatingCode',
      type: eventRegistrationCodeType,
      resolve: (source, args, context) => {
        // info.cacheControl.setCacheHint({
        //   maxAge: 10,
        //   scope: CacheScope.Public,
        // });
        return context.prisma.eventRegistration
          .findUnique({ where: { id: source.id } })
          .eventRegistrationCode();
      },
    });
    t.nonNull.boolean('didAttend', {
      resolve: (source) => !!source.checkInTime,
    });
    t.nonNull.boolean('belongsToCurrentUser', {
      resolve: (source, args, context) => source.userId === context.user?.id,
    });
  },
});

export const getRegistrationsQuery = queryField('registrations', {
  type: nonNull(list(nonNull(eventRegistrationType))),
  args: {
    statusList: arg({
      type: list(nonNull(registrationStatusEnum)),
      default: [RegistrationStatus.PENDING, RegistrationStatus.SUCCESSFUL],
    }),
  },
  resolve: (source, { statusList }, context) =>
    context.prisma.eventRegistration.findMany({
      orderBy: { createdAt: 'desc' },
      where: { status: { in: statusList ?? undefined } },
    }),
});

export const getOneRegistrationQuery = queryField('registration', {
  type: nonNull(eventRegistrationType),
  args: { id: nonNull(idArg()) },
  resolve: (source, { id }, context) =>
    context.prisma.eventRegistration
      .findUnique({
        where: { id },
      })
      .then((res) => {
        if (!res) {
          throw new EnvelopError('Registration not found', {
            status: 404,
          });
        }
        return res;
      }),
});

export const checkInUserMutation = mutationField('checkInUser', {
  type: eventRegistrationType,
  args: {
    id: nonNull(idArg()),
    manualCheckin: booleanArg({ default: false }),
  },
  resolve: (source, { id, manualCheckin }, context) =>
    context.prisma.eventRegistration.update({
      where: { id },
      data: { checkInTime: new Date(), manualCheckin: manualCheckin ?? false },
    }),
});
