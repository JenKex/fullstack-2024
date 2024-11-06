import { connectToDatabase } from "../connection.js";
export async function insertDirectMessage(directMessage) {
    try {
        let collection = await connectToDatabase('directMessages');
        // const timestamp = new Date()
        const cursor = collection.find({}).sort({ messageId: -1 }).limit(1);
        const previousMaxMessage = await cursor.toArray();
        const previousMaxMessageId = previousMaxMessage[0].messageId;
        directMessage = { ...directMessage,
            // timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        };
        const result = await collection.insertOne(directMessage);
        console.log('Här är det nya objekt-IDet:', result.insertedId);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error inserting messages.', error);
        return null;
    }
}
