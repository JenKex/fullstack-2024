import express from 'express';
// import { router as LoginRouter } from './routes/routerRESTLogin.js'
import { router as ChannelRouter } from './routes/routerRESTChannels.js';
import { router as UserRouter } from './routes/routerRESTUsers.js';
import { router as ChannelMessageRouter } from './routes/routerRESTChannelMessages.js';
import { router as DirectMessageRouter } from './routes/routerRESTDirectMessages.js';
// import { directMessages } from './data/content.js'
// import { resetDatabase } from './mongoDBSrc/resetDatabase.js'
const app = express();
const port = Number(process.env.PORT) || 1000;
app.use(express.json());
// Middleware:
// Logger:
app.use('/', (req, res, next) => {
    console.log(`${req.method}  ${req.url}, ${res}`, req.body);
    next();
});
app.use('/', express.static('./dist'));
// Var tidigare '/api/channels' och '/api/users' -- tog bort detta, tänkte att routerna definieras explicit och det inte påverkade i tester, men lägg tillbaka ifall det strular. 
app.use('/channels', ChannelRouter);
app.use('/users', UserRouter);
app.use('/channel-messages', ChannelMessageRouter);
app.use('/direct-messages', DirectMessageRouter);
// Routes för channels, channelmessages, etc.:
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
// Kommentera in för att återställa databasen:
// resetDatabase()
