import { MongoClient } from 'mongodb';
// Global variable to hold the MongoClient instance
let clientInstance = null;
export async function initializeMongoClient() {
    if (!clientInstance) {
        const con = process.env.DB_CONNECTION_STRING;
        if (!con) {
            throw new Error("No connection string found!");
        }
        clientInstance = new MongoClient(con);
        await clientInstance.connect();
        console.log('Connected to MongoDB');
    }
    return clientInstance;
}
