import "dotenv/config"
import axios from "axios"
import { prismaClient } from "../prisma"
import {sign} from "jsonwebtoken"

interface IAcessTokenResponse {
    access_token: string
}

interface IUserReponse {
    id: number,
    avatar_url: string,
    login: string,
    name: string,
}

class AuthenticateUserService {
    async execute(code: string) {

        const url = "https://github.com/login/oauth/access_token"

        const {data: acessTokenResponse} = await axios.post<IAcessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })

        const {data: useResponse} = await axios.get<IUserReponse>("https://api.github.com/user", {
            headers: {
                authorization: `bearer ${acessTokenResponse.access_token}`
            }
        })

        const {avatar_url, id, login, name} = useResponse

        let user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }

        })
        
        if(!user) {
            user = await prismaClient.user.create({
                data: {
                    github_id: id,
                    avatar_url,
                    login,
                    name
                }
            })
        }

        //!JWT
        const token = sign({
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                id: user.id,
            }
        }, 
            process.env.JWT_SECRET_KEY, 
        {
            subject: user.id,
            expiresIn: "1d"
        })

        return {token, user}

    }
}

export {AuthenticateUserService}