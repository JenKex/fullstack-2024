import { ObjectId, InsertOneResult } from "mongodb";
import { DirectMessage, ClientType } from "../../data/interfaces.js"; 
import { connectToDatabase } from "../connection.js";

type DirectMessageDocument = DirectMessage & Document; 
let x: ClientType<DirectMessageDocument>

export async function insertDirectMessage(directMessage: DirectMessage): Promise<ObjectId | null>{
    try{
        x = await connectToDatabase<DirectMessageDocument>('directMessages')
        const result: InsertOneResult<DirectMessage> = await x.collection.insertOne(directMessage as DirectMessageDocument)
        return result.insertedId
    }
    catch (error){
        console.log('Error fetching messages.')
        throw error
    }
    finally{
        if (x){
            await x.client.close()
        }
    }
}