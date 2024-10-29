import { connectToDatabase } from "../connection.js";
let x;
export async function insertChannelMessage(channelMessage) {
    try {
        x = await connectToDatabase('channelMessages');
        const timestamp = new Date();
        const cursor = x.collection.find({}).sort({ messageId: -1 }).limit(1);
        const previousMaxMessage = await cursor.toArray();
        const previousMaxMessageId = previousMaxMessage[0].messageId;
        channelMessage = { ...channelMessage,
            timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        };
        const result = await x.collection.insertOne(channelMessage);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error posting to channel.', error);
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
