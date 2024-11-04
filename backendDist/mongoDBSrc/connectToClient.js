import { MongoClient } from 'mongodb';
const con = process.env.CONNECTION_STRING;
let clientInstance = null;
export async function initializeMongoClient() {
    if (!clientInstance) {
        if (!con) {
            throw new Error("No connection string found!");
        }
        clientInstance = new MongoClient(con);
        await clientInstance.connect();
        console.log('Connected to MongoDB');
    }
    return clientInstance;
}
