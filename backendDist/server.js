import express from 'express';
import { resetDatabase } from './mongoDBSrc/resetDatabase.js';
const app = express();
const port = 1000;
app.use(express.json());
// Middleware:
// Logger:
app.use('/', (req, res, next) => {
    console.log(`${req.method}  ${req.url}, ${res}`, req.body);
    next();
});
app.use('/', express.static('./src'));
// Routes för channels, channelmessages, etc.:
app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
// Kommentera in för att återställa databasen:
resetDatabase();
