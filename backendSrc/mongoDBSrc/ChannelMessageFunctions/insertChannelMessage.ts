import { ObjectId, InsertOneResult } from "mongodb";
import { ChannelMessage, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelMessageDocument = ChannelMessage & Document; 
let x: ClientType<ChannelMessageDocument>

export async function insertChannelMessage(channelMessage: ChannelMessage): Promise<ObjectId | null>{
    try{
        x = await connectToDatabase<ChannelMessageDocument>('channelMessages')
        const timestamp = new Date()
        channelMessage = {...channelMessage,
            timestamp: timestamp
        }
        const result: InsertOneResult<ChannelMessage> = await x.collection.insertOne( channelMessage as ChannelMessageDocument)
        return result.insertedId
    }
    catch (error){
        console.log('Error posting to channel.')
        throw error
    }
    finally{
        if (x){
            await x.client.close()
        }
    }
}