import { connectToDatabase } from "../connection.js";
let x;
export async function getAllChannels() {
    try {
        console.log('Testning.');
        x = await connectToDatabase("channels");
        const cursor = x.collection.find({});
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
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
