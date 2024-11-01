import { MongoClient } from 'mongodb';

// Global variable to hold the MongoClient instance
const con = process.env.CONNECTION_STRING;
let clientInstance: MongoClient | null = null;

// Generic client/collection return type
// interface ClientType<T extends Document> {
//     client: MongoClient;
//     collection: Collection<T>;
// }

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