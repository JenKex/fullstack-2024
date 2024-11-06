import { connectToDatabase } from "../connection.js";
export async function getAllChannelMessages() {
    try {
        console.log('Testning.');
        let collection = await connectToDatabase("channelMessages");
        const cursor = collection.find({});
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No posts to channels registered.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching posts to channels.', error);
        throw error;
    }
}
