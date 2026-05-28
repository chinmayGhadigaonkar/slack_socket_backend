import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Workspace: "Workspace";
    readonly WorkspaceUser: "WorkspaceUser";
    readonly WorkspaceChannel: "WorkspaceChannel";
    readonly Message: "Message";
    readonly DMGroup: "DMGroup";
    readonly Invite: "Invite";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly phone: "phone";
    readonly status: "status";
    readonly designation: "designation";
    readonly profileImage: "profileImage";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly lastUsedWorkspaceId: "lastUsedWorkspaceId";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const WorkspaceScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly profileImage: "profileImage";
    readonly createdBy: "createdBy";
    readonly updatedBy: "updatedBy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum];
export declare const WorkspaceUserScalarFieldEnum: {
    readonly id: "id";
    readonly workspaceId: "workspaceId";
    readonly userId: "userId";
    readonly role: "role";
    readonly joinedAt: "joinedAt";
};
export type WorkspaceUserScalarFieldEnum = (typeof WorkspaceUserScalarFieldEnum)[keyof typeof WorkspaceUserScalarFieldEnum];
export declare const WorkspaceChannelScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly topic: "topic";
    readonly description: "description";
    readonly managedByWorkspaceUserIds: "managedByWorkspaceUserIds";
    readonly workspaceId: "workspaceId";
    readonly createdByUserId: "createdByUserId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WorkspaceChannelScalarFieldEnum = (typeof WorkspaceChannelScalarFieldEnum)[keyof typeof WorkspaceChannelScalarFieldEnum];
export declare const MessageScalarFieldEnum: {
    readonly id: "id";
    readonly content: "content";
    readonly files: "files";
    readonly workspaceChannelId: "workspaceChannelId";
    readonly senderId: "senderId";
    readonly dmGroupId: "dmGroupId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum];
export declare const DMGroupScalarFieldEnum: {
    readonly id: "id";
    readonly workspaceId: "workspaceId";
    readonly workspaceUserIds: "workspaceUserIds";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly createdByUserId: "createdByUserId";
};
export type DMGroupScalarFieldEnum = (typeof DMGroupScalarFieldEnum)[keyof typeof DMGroupScalarFieldEnum];
export declare const InviteScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly workspaceId: "workspaceId";
    readonly channelId: "channelId";
    readonly email: "email";
    readonly inviterId: "inviterId";
    readonly expiryAt: "expiryAt";
    readonly inviteCode: "inviteCode";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map