import { prismaClient } from "../prisma"
import {io} from "../server"

class CreateMessageService {
    async execute(text: string, user_id: string) {
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {user: true} //Send all data from user 
        })

        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            created_at: message.createdAt,
            user: {
                avatar_url: message.user.avatar_url,
                name: message.user.name,
            }
        }

        io.emit("new_message", infoWS)

        return message
    }
}

export {CreateMessageService}