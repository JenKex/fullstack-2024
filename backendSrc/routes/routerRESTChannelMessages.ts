import express, { Request, Response, Router } from "express"
import { ChannelMessage } from "../data/interfaces.js"
import { getAllChannelMessages } from "../mongoDBSrc/ChannelMessageFunctions/getAllChannelMessages.js"
import { getOneChannelsMessages } from "../mongoDBSrc/ChannelMessageFunctions/getOneChannelsMessages.js"
import { insertChannelMessage } from "../mongoDBSrc/ChannelMessageFunctions/insertChannelMessage.js"

export const router: Router = express.Router()

router.get('/', async (_, res: Response) => {
    try{
        const channels = await getAllChannelMessages()
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
        const result = await getOneChannelsMessages(id)
        res.send(result)
    }
    catch (error){
        res.sendStatus(500)
    }
})

router.post('/', async (req: Request, res: Response) => {
    try{
        const channelMessage: ChannelMessage = req.body
        await insertChannelMessage(channelMessage)
        res.sendStatus(204)
    }
    catch (error){
        res.sendStatus(500)
    }
})