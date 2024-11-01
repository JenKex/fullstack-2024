import { connectToDatabase } from "../connection.js";
export async function getAllDirectMessages() {
    try {
        console.log('getAllDirectMessages: Testning.');
        let collection = await connectToDatabase("directMessages");
        const cursor = collection.find({});
        const found = await cursor.toArray();
        // if(x) {
        //     await x.client.close()
        // }
        if (found.length < 1) {
            console.log("No DMs registered.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching DMs.', error);
        throw error;
    }
}
