import { connectToDatabase } from "../connection.js";
export async function getOneUsersDirectMessages(user) {
    try {
        console.log('Testning.');
        let collection = await connectToDatabase("directMessages");
        const cursor = collection.find({ $or: [{ receivingUser: user }, { sendingUser: user }] });
        const found = await cursor.toArray();
        // if (x){
        //     console.log('getOneUsersDirectMessages: client.close', user)
        //     await x.client.close()
        // }
        if (found.length < 1) {
            console.log("No DMs found for this user.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching DMs.', error);
        throw error;
    }
}
