import express from 'express';
// import { router as LoginRouter } from './routes/routerRESTLogin.js'
import { router as ChannelRouter } from './routes/routerRESTChannels.js';
import { router as ChannelMessageRouter } from './routes/routerRESTChannelMessages.js';
import { router as DirectMessageRouter } from './routes/routerRESTDirectMessages.js';
import { router as UserRouter } from './routes/routerRESTUsers.js';
// import { directMessages } from './data/content.js'
// import { resetDatabase } from './mongoDBSrc/resetDatabase.js'
const app = express();
const port = Number(process.env.PORT) || 1000;
app.use(express.json());
// Middleware:
// Logger:
app.use('/', (req, _, next) => {
    console.log(`${req.method}  ${req.url}`, req.body);
    next();
});
app.use('/', express.static('./dist'));
app.use('/api/channels', ChannelRouter);
app.use('/api/channel-messages', ChannelMessageRouter);
app.use('/api/direct-messages', DirectMessageRouter);
app.use('/api/users', UserRouter);
// Routes för channels, channelmessages, etc.:
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
// Kommentera in för att återställa databasen:
// resetDatabase()
