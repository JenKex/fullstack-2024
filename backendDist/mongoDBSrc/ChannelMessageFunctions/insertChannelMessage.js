import { connectToDatabase } from "../connection.js";
let x;
export async function insertChannelMessage(channelMessage) {
    try {
        x = await connectToDatabase('channelMessages');
        const timestamp = new Date();
        channelMessage = { ...channelMessage,
            timestamp: timestamp
        };
        const result = await x.collection.insertOne(channelMessage);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error posting to channel.');
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
