import express from "express";
import { validateLogin } from "../data/validation.js";
// import { ClientType, User } from "../data/interfaces.js"
import { getAllUsers } from "../mongoDBSrc/UserFunctions/getAllUsers.js";
import jwt from 'jsonwebtoken';
// Kommenterade ut 'verify' delen av 'sign, verify' från jwt -- behövs omimporteras om den ska användas för t.ex. get/protected, som jag nu har under get/:id.
const { sign } = jwt;
export const router = express.Router();
// Skriv validateLogin-funktion -- skicka tillbaka JWT.
router.get('/', async (_, res) => {
    try {
        console.log('Test: Router.');
        const users = await getAllUsers();
        if (!users) {
            res.sendStatus(404);
        }
        res.send(users);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
router.post('/login', (req, res) => {
    if (!process.env.SECRET) {
        res.sendStatus(500);
        return;
    }
    // Klar: middleware för att ta emot body
    // skicka tillbaka en JWT
    console.log('Body är: ', req.body);
    const userId = validateLogin(req.body.username, req.body.password);
    console.log('user id: ', userId);
    if (!userId) {
        res.sendStatus(401); // unauthorized
        return;
    }
    // Make JWT
    // res.send('"JWT"')
    const payload = {
        userId,
        username: req.body.username
    };
    const token = sign(payload, process.env.SECRET);
    res.send({ jwt: token });
});
