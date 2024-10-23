import express from "express";
import { getAllChannelMessages } from "../mongoDBSrc/ChannelMessageFunctions/getAllChannelMessages.js";
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
