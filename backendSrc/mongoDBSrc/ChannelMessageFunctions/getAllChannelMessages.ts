import { FindCursor, WithId } from "mongodb";
import { ChannelMessage, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelMessageDocument = ChannelMessage & Document; 
let x: ClientType<ChannelMessageDocument> 

export async function getAllChannelMessages(): Promise<WithId<ChannelMessage>[]> {

        try {
            console.log('Testning.')
            x = await connectToDatabase<ChannelMessageDocument>("channelMessages")
    
            const cursor: FindCursor <WithId<ChannelMessage>> = x.collection.find({})
            const found: WithId<ChannelMessage>[] = await cursor.toArray()
            
            if(found.length < 1) {
                console.log( "No posts to channels registered.");
            }
        return found

        }catch (error) {
            console.error('Error fetching posts to channels.', error);
            throw error;
        }finally {
            if(x) {
                await x.client.close()
            }
        }
}