import express from "express";
import { getAllChannelMessages } from "../mongoDBSrc/ChannelMessageFunctions/getAllChannelMessages.js";
import { getOneChannelsMessages } from "../mongoDBSrc/ChannelMessageFunctions/getOneChannelsMessages.js";
import { insertChannelMessage } from "../mongoDBSrc/ChannelMessageFunctions/insertChannelMessage.js";
export const router = express.Router();
router.get('/', async (_, res) => {
    try {
        const channels = await getAllChannelMessages();
        if (!channels) {
            res.sendStatus(404);
        }
        res.send(channels);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getOneChannelsMessages(id);
        res.send(result);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
router.post('/', async (req, res) => {
    try {
        const channelMessage = req.body;
        await insertChannelMessage(channelMessage);
        res.sendStatus(204);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
