import { list, nonNull, objectType, queryField } from 'nexus';

import { EnvelopError } from '@envelop/core';
import { ActivityLog } from '../generated/nexus-prisma';
import { Role } from '../generated/prisma';

export const activityLogType = objectType({
  name: ActivityLog.$name,
  description: ActivityLog.$description,
  definition(t) {
    t.field(ActivityLog.id);
    t.field(ActivityLog.createdAt);
    t.field(ActivityLog.message);
    t.field(ActivityLog.data);
    t.field(ActivityLog.oldData);
    t.field(ActivityLog.involvedUser);
    t.field(ActivityLog.severity);
  },
});

export const activityLogStatType = objectType({
  name: 'ActivityLogStat',
  definition(t) {
    t.nonNull.string('message');
    t.nonNull.int('count');
  },
});

export const getLogsQuery = queryField('logs', {
  type: nonNull(list(nonNull(activityLogType))),
  resolve: (source, args, context) => {
    const role = context.assignment?.role ?? null;
    if (role !== Role.ADMIN) {
      throw new EnvelopError('Only Admins can read the logs.');
    }
    return context.prisma.activityLog.findMany({
      orderBy: { createdAt: 'desc' },
    });
  },
});

export const getLogStatsQuery = queryField('logStats', {
  type: nonNull(list(nonNull(activityLogStatType))),
  resolve: (source, args, context) =>
    context.prisma.activityLog
      .groupBy({
        by: ['message'],
        orderBy: { _count: { message: 'desc' } },
        _count: { message: true },
      })
      .then((res: any[]) => {
        return res.map((stat) => ({
          message: stat.message,
          count: stat._count.message,
        }));
      }),
});
