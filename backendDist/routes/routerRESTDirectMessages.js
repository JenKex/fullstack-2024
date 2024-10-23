import express from "express";
import { getAllDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getAllDirectMessages.js";
import { insertDirectMessage } from "../mongoDBSrc/DirectMessageFunctions/insertDirectMessage.js";
export const router = express.Router();
router.get('/', async (_, res) => {
    try {
        const channels = await getAllDirectMessages();
        if (!channels) {
            res.sendStatus(404);
        }
        res.send(channels);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
router.post('/', async (req, res) => {
    // Joi-validera.
    const directMessage = req.body;
    await insertDirectMessage(directMessage);
    res.sendStatus(201);
});
