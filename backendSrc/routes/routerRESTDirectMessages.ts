import express, { Request, Response, Router } from "express"
import { getAllDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getAllDirectMessages.js"
import { getOneUsersDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getOneUsersDirectMessages.js"
import { insertDirectMessage } from "../mongoDBSrc/DirectMessageFunctions/insertDirectMessage.js"
import { DirectMessage } from "../data/interfaces.js"
import { isValidDirectMessage } from "../data/validation.js"
import { getOneUser } from "../mongoDBSrc/UserFunctions/getOneUser.js"
import jwt from 'jsonwebtoken'

const { verify } = jwt

export const router: Router = express.Router()

interface Payload {
    userId: number;
    iat: number;
}

export type UserId = string

// Känns egentligen lite som att man borde ha mini-routes baserat på userId i dessa -- t.ex. /direct-messages/johnDoe -- vilket man skulle kunna göra med get/:id, och kanske förenklar renderingen sedan?

router.get('/', async (_, res: Response) => {
    try {
        const channels = await getAllDirectMessages()
        if (!channels) {
            res.sendStatus(404)
        }
        res.send(channels)
    }
    catch (error) {
        res.sendStatus(500)
    }
})

router.get('/:id', async (req: Request, res: Response) => {

    try {
        if (!process.env.SECRET) {
            res.sendStatus(500)
            return
        }
        let token = req.headers.authorization
        console.log('Header:', token)
        if (!token) {
            res.sendStatus(401)
            return
        }
        let payload: Payload
        try {
            payload = verify(token, process.env.SECRET) as Payload
            console.log('Payload: ', payload)
        } catch (error) {
            res.sendStatus(400)
            return
        }
        let userId: number = payload.userId
        const user = await getOneUser(userId)
        if (!user) {
            res.sendStatus(404)
            return
        }
        const id: string = req.params.id
        const result = await getOneUsersDirectMessages(id)
        res.send(result)
    }
    catch (error) {
        let m = (error as ErrorWithMessage).message
        console.log(`${req.url}, ${m}`)
        res.sendStatus(500)
    }
})

interface ErrorWithMessage {
    message: string;
}



router.post('/', async (req: Request, res: Response) => {
    // const directMessage: DirectMessageWithoutId = req.body
    const directMessage: DirectMessage = req.body
    if (isValidDirectMessage(directMessage)) {
        const result = await insertDirectMessage(directMessage)
        if (result === null){
            res.sendStatus(404)
        }
        res.sendStatus(201)
    }
    else {
        res.sendStatus(400)
    }
})