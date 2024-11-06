import { connectToDatabase } from "../connection.js";
export async function getAllChannels() {
    try {
        console.log('getAllChannels: Testning.');
        let collection = await connectToDatabase("channels");
        const cursor = collection.find({});
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No channels available.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching channels.', error);
        throw error;
    }
}
