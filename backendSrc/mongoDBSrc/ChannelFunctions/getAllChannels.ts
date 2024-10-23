import { FindCursor, WithId } from "mongodb";
import { Channel, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelDocument = Channel & Document; 
let x: ClientType<ChannelDocument> 

export async function getAllChannels(): Promise<WithId<Channel>[]> {

        try {
            console.log('Testning.')
            x = await connectToDatabase<ChannelDocument>("channels")
    
            const cursor: FindCursor <WithId<Channel>> = x.collection.find({})
            const found: WithId<Channel>[] = await cursor.toArray()
            
            if(found.length < 1) {
                console.log( "No channels available.");
            }
        return found

        }catch (error) {
            console.error('Error fetching channels.', error);
            throw error;
        }finally {
            if(x) {
                await x.client.close()
            }
        }
}