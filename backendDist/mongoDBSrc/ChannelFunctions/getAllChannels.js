import { connectToDatabase } from "../connection.js";
export async function getAllChannels() {
    try {
        console.log('getAllChannels: Testning.');
        let collection = await connectToDatabase("channels");
        const cursor = collection.find({});
        const found = await cursor.toArray();
        if (found.length < 1) {
            console.log("No channels available.");
        }
        return found;
    }
    catch (error) {
        console.error('Error fetching channels.', error);
        throw error;
    }
}
// Originalfunktion utan klientinitialisering:
// type ChannelDocument = Channel & Document; 
// let x: ClientType<ChannelDocument> 
// export async function getAllChannels(): Promise<WithId<Channel>[]> {
//     // if (x){
//     // }
//         try {
//             console.log('GetAllChannels: Testning.')
//             x = await connectToDatabase<ChannelDocument>("channels")
//             const cursor: FindCursor <WithId<Channel>> = x.collection.find({})
//             const found: WithId<Channel>[] = await cursor.toArray()
//             if(found.length < 1) {
//                 console.log( "No channels available.");
//             }
//         return found
//         }catch (error) {
//             console.error('Error fetching channels.', error);
//             throw error;
//         }finally {
//             if(x && x.client) {
//                 await x.client.close()
//             }
//         }
// }
