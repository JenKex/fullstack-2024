import { connectToDatabase } from "../connection.js";
export async function getOneChannelsMessages(channel) {
    try {
        console.log('Testning.');
        let collection = await connectToDatabase("channelMessages");
        const cursor = collection.find({ channel: channel });
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No posts registered to this channel.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching posts from this channel.', error);
        throw error;
    }
}
