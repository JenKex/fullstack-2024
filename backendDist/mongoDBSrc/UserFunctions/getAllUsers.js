import { connectToDatabase } from "../connection.js";
export async function getAllUsers() {
    try {
        console.log('Test: GetAllUsers.');
        let collection = await connectToDatabase("users");
        const cursor = collection.find({});
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
}
