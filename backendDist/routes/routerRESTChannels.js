import express from "express";
import { getAllChannels } from "../mongoDBSrc/ChannelFunctions/getAllChannels.js";
export const router = express.Router();
router.get('/', async (_, res) => {
    try {
        const channels = await getAllChannels();
        if (!channels) {
            res.sendStatus(404);
        }
        res.send(channels);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
//Har just nu inte kanalmodifikationer implementerade -- sätt in POST, PUT, DELETE på samma sätt som för chattmeddelanden i så fall.
