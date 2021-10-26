import "dotenv/config"
import { Request, Response, NextFunction } from "express";
import {verify} from "jsonwebtoken"

interface IPayload {
    sub: string
}

// ? Checks if the token is valid, if true runs the NextFunction 
export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authToken = request.headers.authorization

    if(!authToken) {
        response.status(401).json({
            errorCode: "invalid token"
        })
    }

    const [,token] = authToken.split(" ")

    try {
        const {sub} = verify(token, process.env.JWT_SECRET_KEY) as IPayload

        request.user_id = sub

        return next()
    } catch(err) {
        return response.status(401).json({ errorCode: "expired token"})
    }
}
