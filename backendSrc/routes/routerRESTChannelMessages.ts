import express, { Request, Response, Router } from "express"
import { ChannelMessage } from "../data/interfaces.js"
import { getAllChannelMessages } from "../mongoDBSrc/ChannelMessageFunctions/getAllChannelMessages.js"
import { getOneChannelsMessages } from "../mongoDBSrc/ChannelMessageFunctions/getOneChannelsMessages.js"
import { insertChannelMessage } from "../mongoDBSrc/ChannelMessageFunctions/insertChannelMessage.js"
import { isValidChannelMessage } from "../data/validation.js"

export const router: Router = express.Router()

router.get('/', async (_, res: Response) => {
    try{
        const channelMessages = await getAllChannelMessages()
        if (!channelMessages){
            res.sendStatus(404)
        }
        res.send(channelMessages)
    }
    catch (error){
        res.sendStatus(500)
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        // Borde sätta två separata villkor -- en för om kanalen inte existerar alls, en om kanalen finns men ej har några meddelanden.
        const result = await getOneChannelsMessages(id)
        if (!result){
            res.sendStatus(404)
        }
        res.send(result)
    }
    catch (error){
        res.sendStatus(500)
    }
})

router.post('/', async (req: Request, res: Response) => {
    try{
        const channelMessage: ChannelMessage = req.body
        if (isValidChannelMessage(channelMessage)){
            const result = await insertChannelMessage(channelMessage)
            // Kan gå fel med denna funktionen, sätt in ett till valideringsvillkor ifall servern inte hittas.
            if (result === null){
                res.sendStatus(404)
            }
            res.sendStatus(201)
        }
        else{
            res.sendStatus(400)
        }
    }
    catch (error){
        res.sendStatus(500)
    }
})