import express from "express";
import { getAllDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getAllDirectMessages.js";
import { getOneUsersDirectMessages } from "../mongoDBSrc/DirectMessageFunctions/getOneUsersDirectMessages.js";
import { insertDirectMessage } from "../mongoDBSrc/DirectMessageFunctions/insertDirectMessage.js";
import { isValidDirectMessage } from "../data/validation.js";
import { getOneUser } from "../mongoDBSrc/UserFunctions/getOneUser.js";
import jwt from 'jsonwebtoken';
const { verify } = jwt;
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
    // PROBLEM: req.headers.authorization känns inte av i sajten.
    try {
        if (!process.env.SECRET) {
            res.sendStatus(500);
            return;
        }
        let token = req.headers.authorization;
        console.log('Header:', token);
        if (!token) {
            res.sendStatus(401);
            return;
        }
        let payload;
        try {
            payload = verify(token, process.env.SECRET);
            console.log('Payload: ', payload);
        }
        catch (error) {
            res.sendStatus(400);
            return;
        }
        let userId = payload.userId;
        const user = await getOneUser(userId);
        if (!user) {
            res.sendStatus(404);
            return;
        }
        const id = req.params.id;
        // if id ej är en giltig användare: 404
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
