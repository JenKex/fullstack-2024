import { ObjectId, InsertOneResult, FindCursor, WithId } from "mongodb";
import { DirectMessage } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type DirectMessageDocument = DirectMessage & Document; 

export async function insertDirectMessage(directMessage: DirectMessage): Promise<ObjectId | null>{
    try{
        let collection = await connectToDatabase<DirectMessageDocument>('directMessages')
        // const timestamp = new Date()

        const cursor: FindCursor <WithId<DirectMessage>> = collection.find({}).sort({messageId: -1}).limit(1)
        const previousMaxMessage: WithId<DirectMessage>[] = await cursor.toArray()
        const previousMaxMessageId: number = previousMaxMessage[0].messageId

        directMessage = {...directMessage,
            // timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        }
        const result: InsertOneResult<DirectMessage> = await collection.insertOne(directMessage as DirectMessageDocument)
        console.log('Här är det nya objekt-IDet:', result.insertedId)
        return result.insertedId
    }
    catch (error){
        console.log('Error inserting messages.', error)
        return null
    }
}