import { FindCursor, WithId } from "mongodb";
import { DirectMessage } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type DirectMessageDocument = DirectMessage & Document; 

export async function getAllDirectMessages(): Promise<WithId<DirectMessage>[]> {

        try {
            console.log('getAllDirectMessages: Testning.')
            let collection = await connectToDatabase<DirectMessageDocument>("directMessages")
    
            const cursor: FindCursor <WithId<DirectMessage>> = collection.find({})
            const found: WithId<DirectMessage>[] = await cursor.toArray()

            // if(x) {
            //     await x.client.close()
            // }
            
            if(found.length < 1) {
                console.log( "No DMs registered.");
            }
        return found

        }catch (error) {
            console.error('Error fetching DMs.', error);
            throw error;
        }
}