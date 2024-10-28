import { connectToDatabase } from "../connection.js";
let x;
export async function getAllUsers() {
    try {
        console.log('Test: GetAllUsers.');
        x = await connectToDatabase("users");
        const cursor = x.collection.find({});
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No users registered.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching users.', error);
        throw error;
    }
    finally {
        if (x) {
            await x.client.close();
        }
    }
}
