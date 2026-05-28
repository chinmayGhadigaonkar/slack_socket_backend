import { prisma } from "../lib/prisma.js";
export const SocketAuthMiddleware = async (socket, next) => {
    try {
        const token = socket.handshake.auth.token;
        if (!token) {
            return next(new Error("Please authenticate using a valid token"));
        }
        const user = await prisma.workspaceUser.findFirst({
            where: {
                userId: token,
            },
            select: {
                workspaceId: true,
                id: true,
                user: true,
            },
        });
        if (!user) {
            return next(new Error("No user found"));
        }
        socket.user = {
            id: user.user.id,
            name: user.user.name,
            email: user.user.email,
            image: user.user.profileImage,
            workspaceId: user.workspaceId,
            userWorkspaceId: user.id,
        };
        next();
    }
    catch (error) {
        return next(new Error("Something is Wrong"));
    }
};
//# sourceMappingURL=auth.js.map