import { MongoClient, Db, Collection, Document } from 'mongodb';

// Global variable to hold the MongoClient instance
let clientInstance: MongoClient | null = null;

// Generic client/collection return type
interface ClientType<T extends Document> {
    client: MongoClient;
    collection: Collection<T>;
}

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