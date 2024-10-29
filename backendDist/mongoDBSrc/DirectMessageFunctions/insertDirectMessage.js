import { connectToDatabase } from "../connection.js";
let x;
export async function insertDirectMessage(directMessage) {
    try {
        x = await connectToDatabase('directMessages');
        const timestamp = new Date();
        const cursor = x.collection.find({}).sort({ messageId: -1 }).limit(1);
        const previousMaxMessage = await cursor.toArray();
        const previousMaxMessageId = previousMaxMessage[0].messageId;
        directMessage = { ...directMessage,
            timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        };
        const result = await x.collection.insertOne(directMessage);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error inserting messages.');
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
