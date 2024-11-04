import express, { Request, Response, Router } from "express"
import { validateLogin } from "../data/validation.js"
// import { ClientType, User } from "../data/interfaces.js"
import { getAllUsers } from "../mongoDBSrc/UserFunctions/getAllUsers.js"
import jwt from 'jsonwebtoken'

// Kommenterade ut 'verify' delen av 'sign, verify' från jwt -- behövs omimporteras om den ska användas för t.ex. get/protected, som jag nu har under get/:id.
const { sign } = jwt

export const router: Router = express.Router()

// Skriv validateLogin-funktion -- skicka tillbaka JWT.

router.get('/', async (_, res: Response) => {
    try {
        console.log('Test: Router.')
        const users = await getAllUsers()
        if (!users) {
            res.sendStatus(404)
        }
        res.send(users)
    }
    catch (error) {
        res.sendStatus(500)
    }
})

// router.get('/activeUser', async (_, res: Response) => {
    
// })

router.post('/login', (req: Request, res: Response) => {
    if (!process.env.SECRET) {
        res.sendStatus(500)
        return
    }

    console.log('Body är: ', req.body)
    const userId = validateLogin(req.body.username, req.body.password)
    console.log('user id: ', userId)
    if (!userId) {
        res.sendStatus(401)
        return
    }
    const payload = {
        userId,
        username: req.body.username
    }
    const token: string = sign(payload, process.env.SECRET)
    res.send({ jwt: token })
})