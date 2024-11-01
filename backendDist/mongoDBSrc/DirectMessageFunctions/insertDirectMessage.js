import { connectToDatabase } from "../connection.js";
export async function insertDirectMessage(directMessage) {
    try {
        let collection = await connectToDatabase('directMessages');
        const timestamp = new Date();
        const cursor = collection.find({}).sort({ messageId: -1 }).limit(1);
        const previousMaxMessage = await cursor.toArray();
        const previousMaxMessageId = previousMaxMessage[0].messageId;
        directMessage = { ...directMessage,
            timestamp: timestamp,
            messageId: (previousMaxMessageId + 1)
        };
        const result = await collection.insertOne(directMessage);
        console.log('Här är det nya objekt-IDet:', result.insertedId);
        return result.insertedId;
    }
    catch (error) {
        console.log('Error inserting messages.');
        throw error;
    }
}
// export async function insertDirectMessage(directMessage: DirectMessageWithoutId): Promise<ObjectId | null>{
//     try{
//         x = await connectToDatabase<DirectMessageDocument>('directMessages')
//         const timestamp = new Date()
//         const cursor: FindCursor <WithId<DirectMessage>> = x.collection.find({}).sort({messageId: -1}).limit(1)
//         const previousMaxMessage: WithId<DirectMessage>[] = await cursor.toArray()
//         const previousMaxMessageId: number = previousMaxMessage[0].messageId
//         const newDirectMessage: DirectMessage = {...directMessage,
//             timestamp: timestamp,
//             messageId: (previousMaxMessageId + 1)
//         }
//         const result: InsertOneResult<DirectMessage> = await x.collection.insertOne(newDirectMessage as DirectMessageDocument)
//         return result.insertedId
//     }
//     catch (error){
//         console.log('Error inserting messages.')
//         throw error
//     }
//     finally{
//         if (x){
//             await x.client.close()
//         }
//     }
// }
