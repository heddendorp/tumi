import { objectType } from 'nexus';
import { EventSubmission } from '../generated/nexus-prisma';
import { EnvelopError } from '@envelop/core';

export const eventSubmissionType = objectType({
  name: EventSubmission.$name,
  description: EventSubmission.$description,
  definition(t) {
    t.field(EventSubmission.id);
    t.field(EventSubmission.createdAt);
    t.field({
      ...EventSubmission.registration,
      resolve: (source, args, context) =>
        context.prisma.eventRegistration.findUnique({
          where: { id: source.eventRegistrationId ?? '' },
        }),
    });
    t.field(EventSubmission.eventRegistrationId);
    t.field({
      ...EventSubmission.submissionItem,
      resolve: (source, args, context) =>
        context.prisma.eventSubmissionItem
          .findUnique({
            where: { id: source.submissionItemId },
          })
          .then((res) => {
            if (!res) {
              throw new EnvelopError('Submission item not found');
            }
            return res;
          }),
    });
    t.field(EventSubmission.submissionItemId);
    t.field(EventSubmission.data);
  },
});
