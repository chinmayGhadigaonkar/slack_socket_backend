import { Socket } from "socket.io";
declare module "socket.io" {
    interface Socket {
        user?: {
            id: string;
            name: string | null;
            email: string | null;
            image: string | null;
            workspaceId: string | null;
            userWorkspaceId: string | null;
        };
    }
}
export declare const SocketAuthMiddleware: (socket: Socket, next: (err?: Error) => void) => Promise<void>;
//# sourceMappingURL=auth.d.ts.map