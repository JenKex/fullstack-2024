import { initializeMongoClient } from "./connectToClient.js";
export const con = process.env.CONNECTION_STRING;
export async function connectToDatabase(dataPointer) {
    console.log('connectToDatabase: Har startat.');
    const client = await initializeMongoClient();
    const db = client.db('chat_client');
    console.log('Db har hittats.');
    return db.collection(dataPointer);
}
