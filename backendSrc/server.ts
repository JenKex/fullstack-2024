import express, { Express, NextFunction, Request, Response } from 'express'
import { router as LoginRouter } from './routes/routerRESTLogin.js'
import { router as UserRouter } from './routes/routerRESTUsers.js'
// import { resetDatabase } from './mongoDBSrc/resetDatabase.js'

const app: Express = express()
const port: number = Number(process.env.PORT) || 1000

app.use(express.json())

// Middleware:

// Logger:
app.use('/', (req: Request, res: Response, next: NextFunction) => {
	console.log(`${req.method}  ${req.url}, ${res}`, req.body)
	next()
})

app.use('/', express.static('./dist'));

app.use('/api/login', LoginRouter)
app.use('/api/users', UserRouter)

// Routes för channels, channelmessages, etc.:

app.listen(port, () => {
	console.log('Server is listening on port ' + port)
})

// Kommentera in för att återställa databasen:

// resetDatabase()