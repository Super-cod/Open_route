export async function verifyToken({cookie :{auth}, status,jwt}: Context )=> {
        if(!auth){
            return status(401)
        }
        const decoded = await jwt.verify(auth.value as string);
        if(!decoded || !decoded.userId){
            return status(401)
        }
        return {
            userId: decoded.userId as string
        };
    }