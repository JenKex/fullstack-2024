import { FindCursor, WithId } from "mongodb";
import { DirectMessage } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type DirectMessageDocument = DirectMessage & Document; 

export async function getOneUsersDirectMessages(user: string): Promise<WithId<DirectMessage>[]> {

        try {
            console.log('Testning.')
            let collection = await connectToDatabase<DirectMessageDocument>("directMessages")
    
            const cursor: FindCursor <WithId<DirectMessage>> = collection.find({$or: [{receivingUser: user}, {sendingUser: user}]})
            const found: WithId<DirectMessage>[] = await cursor.toArray()
            // if (x){
            //     console.log('getOneUsersDirectMessages: client.close', user)
            //     await x.client.close()
            // }
            
            if(found.length < 1) {
                console.log( "No DMs found for this user.");
            }
        return found

        }catch (error) {
            console.error('Error fetching DMs.', error);
            throw error;
        }
}