import express, { Request, Response, Router } from "express"
import { getAllDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getAllDirectMessages.js"
import { getOneUsersDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getOneUsersDirectMessages.js"
import { insertDirectMessage } from "../mongoDBSrc/DirectMessageFunctions/insertDirectMessage.js"
import { DirectMessage } from "../data/interfaces.js"
import { isValidDirectMessage } from "../data/validation.js"

export const router: Router = express.Router()

// Känns egentligen lite som att man borde ha mini-routes baserat på userId i dessa -- t.ex. /direct-messages/johnDoe -- vilket man skulle kunna göra med get/:id, och kanske förenklar renderingen sedan?

router.get('/', async (_, res: Response) => {
    try{
        const channels = await getAllDirectMessages()
        if (!channels){
            res.sendStatus(404)
        }
        res.send(channels)
    }
    catch (error){
        res.sendStatus(500)
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const result = await getOneUsersDirectMessages(id)
        res.send(result)
    }
    catch (error){
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
    if (isValidDirectMessage(directMessage)){
        await insertDirectMessage(directMessage)
        res.sendStatus(201)
    }
    else{
        res.sendStatus(400)
    }
})