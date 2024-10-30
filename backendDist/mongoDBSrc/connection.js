import { initializeMongoClient } from "./connectToClient";
export const con = process.env.CONNECTION_STRING;
export async function connectToDatabase(dataPointer) {
    const client = await initializeMongoClient();
    const db = client.db('chat_client');
    return db.collection(dataPointer);
}
// export async function connectToDatabase<T extends Document>(dataPointer: string): Promise<ClientType<T>>{
//     if(!con){
//         console.log("Error: connection string not found");
//         throw new Error("No connection!")
//     }
//     const client: MongoClient = new MongoClient(con)
//     await client.connect()
//     try {
//         console.log(1);
//         const db : Db = await client.db("chat_client")
//         const collection: Collection <T> = db.collection<T>(dataPointer)
//         console.log(2);
//         return { collection, client }
//     }catch (error) {
//         console.error("Failed to connect to the database or retrieve collection", error);
//         throw new Error("Database connection or query failed");
//     }
// }
