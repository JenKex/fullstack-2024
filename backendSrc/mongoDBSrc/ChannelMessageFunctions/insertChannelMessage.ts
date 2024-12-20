import { ObjectId, InsertOneResult, FindCursor, WithId } from "mongodb";
import { ChannelMessage } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type ChannelMessageDocument = ChannelMessage & Document; 
// let x: ClientType<ChannelMessageDocument>

export async function insertChannelMessage(channelMessage: ChannelMessage): Promise<ObjectId | null>{
    try{
        let collection = await connectToDatabase<ChannelMessageDocument>('channelMessages')
        // const timestamp = new Date()

        const cursor: FindCursor <WithId<ChannelMessage>> = collection.find({}).sort({messageId: -1}).limit(1)
        const previousMaxMessage: WithId<ChannelMessage>[] = await cursor.toArray()
        const previousMaxMessageId: number = previousMaxMessage[0].messageId

        channelMessage = {...channelMessage,
            // timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        }
        const result: InsertOneResult<ChannelMessage> = await collection.insertOne( channelMessage as ChannelMessageDocument)
        return result.insertedId
    }
    catch (error){
        console.log('Error posting to channel.', error)
        return null
    }
}