import { FindCursor, WithId } from "mongodb";
import { User } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type UserDocument = User & Document;

export async function getOneUser(userId: number): Promise<WithId<User>[]> {

    try {
        console.log('Test: GetOneUser.')
        let collection = await connectToDatabase<UserDocument>("users")

        const cursor: FindCursor <WithId<User>> = collection.find({userId: userId})
        const found: WithId<User>[] = await cursor.toArray()
        
        if(found.length < 1) {
            console.log( "No users registered.");
        }
    return found

    }catch (error) {
        console.error('Error fetching users.', error);
        throw error;
    }
}