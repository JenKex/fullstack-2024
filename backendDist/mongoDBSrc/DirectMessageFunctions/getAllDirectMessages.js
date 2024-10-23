import { connectToDatabase } from "../connection.js";
let x;
export async function getAllDirectMessages() {
    try {
        console.log('Testning.');
        x = await connectToDatabase("directMessages");
        const cursor = x.collection.find({});
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No DMs registered.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching DMs.', error);
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
