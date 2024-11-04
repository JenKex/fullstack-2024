import { Db, Collection, Document } from "mongodb"
import { initializeMongoClient } from "./connectToClient.js";

export const con: string | undefined = process.env.CONNECTION_STRING

export async function connectToDatabase<T extends Document>(dataPointer: string): Promise<Collection<T>> {
    console.log('connectToDatabase: Har startat.')
    const client = await initializeMongoClient();
    const db: Db = client.db('chat_client');
    console.log('Db har hittats.')
    return db.collection<T>(dataPointer);
}