import { MongoClient } from "mongodb";
export const con = process.env.CONNECTION_STRING;
export async function connectToDatabase(dataPointer) {
    if (!con) {
        console.log("Error: connection string not found");
        throw new Error("No connection!");
    }
    const client = new MongoClient(con);
    await client.connect();
    try {
        console.log(1);
        const db = await client.db("chat_client");
        const collection = db.collection(dataPointer);
        console.log(2);
        return { collection, client };
    }
    catch (error) {
        console.error("Failed to connect to the database or retrieve collection", error);
        throw new Error("Database connection or query failed");
    }
}
