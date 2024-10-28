import { FindCursor, WithId } from "mongodb";
import { User, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type UserDocument = User & Document; 
let x: ClientType<UserDocument> 

export async function getAllUsers(): Promise<WithId<User>[]> {

        try {
            console.log('Test: GetAllUsers.')
            x = await connectToDatabase<UserDocument>("users")
    
            const cursor: FindCursor <WithId<User>> = x.collection.find({})
            const found: WithId<User>[] = await cursor.toArray()
            
            if(found.length < 1) {
                console.log( "No users registered.");
            }
        return found

        }catch (error) {
            console.error('Error fetching users.', error);
            throw error;
        }finally {
            if(x) {
                await x.client.close()
            }
        }
}