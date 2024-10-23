import { connectToDatabase } from "../connection.js";
let x;
export async function insertDirectMessage(directMessage) {
    try {
        x = await connectToDatabase('directMessages');
        const result = await x.collection.insertOne(directMessage);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error fetching messages.');
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
