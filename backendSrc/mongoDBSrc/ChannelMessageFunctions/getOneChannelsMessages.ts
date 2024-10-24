import { FindCursor, WithId } from "mongodb";
import { ChannelMessage, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelMessageDocument = ChannelMessage & Document; 
let x: ClientType<ChannelMessageDocument> 

export async function getOneChannelsMessages(channel: string): Promise<WithId<ChannelMessage>[]> {

        try {
            console.log('Testning.')
            x = await connectToDatabase<ChannelMessageDocument>("channelMessages")
    
            const cursor: FindCursor <WithId<ChannelMessage>> = x.collection.find({ channel: channel })
            const found: WithId<ChannelMessage>[] = await cursor.toArray()
            
            if(found.length < 1) {
                console.log( "No posts registered to this channel.");
            }
        return found

        }catch (error) {
            console.error('Error fetching posts from this channel.', error);
            throw error;
        }finally {
            if(x) {
                await x.client.close()
            }
        }
}