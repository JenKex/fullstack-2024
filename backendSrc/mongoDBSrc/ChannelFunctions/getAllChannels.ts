import { FindCursor, WithId } from "mongodb";
// import { ClientType } from "../../data/interfaces.js";
import { Channel } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelDocument = Channel & Document; 

export async function getAllChannels(): Promise<WithId<Channel>[]> {

    try {
        console.log('getAllChannels: Testning.')
        let collection = await connectToDatabase<ChannelDocument>("channels")

        const cursor: FindCursor <WithId<Channel>> = collection.find({})
        const found: WithId<Channel>[] = await cursor.toArray()
        
        if(found.length < 1) {
            console.log( "No channels available.");
        }
    return found

    }catch (error) {
        console.error('Error fetching channels.', error);
        throw error;
    }
}