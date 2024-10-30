import express from "express";
import { getAllDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getAllDirectMessages.js";
import { getOneUsersDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getOneUsersDirectMessages.js";
import { insertDirectMessage } from "../mongoDBSrc/DirectMessageFunctions/insertDirectMessage.js";
import { isValidDirectMessage } from "../data/validation.js";
export const router = express.Router();
// Känns egentligen lite som att man borde ha mini-routes baserat på userId i dessa -- t.ex. /direct-messages/johnDoe -- vilket man skulle kunna göra med get/:id, och kanske förenklar renderingen sedan?
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
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await getOneUsersDirectMessages(id);
        res.send(result);
    }
    catch (error) {
        let m = error.message;
        console.log(`${req.url}, ${m}`);
        res.sendStatus(500);
    }
});
router.post('/', async (req, res) => {
    // const directMessage: DirectMessageWithoutId = req.body
    const directMessage = req.body;
    if (isValidDirectMessage(directMessage)) {
        await insertDirectMessage(directMessage);
        res.sendStatus(201);
    }
    else {
        res.sendStatus(400);
    }
});
