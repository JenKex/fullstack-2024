import { connectToDatabase } from "../connection.js";
let x;
export async function getAllChannelMessages() {
    try {
        console.log('Testning.');
        x = await connectToDatabase("channelMessages");
        const cursor = x.collection.find({});
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
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
