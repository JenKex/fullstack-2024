import { MongoClient, Db, Collection, Document } from "mongodb"
// import { initializeMongoClient } from "./connectToClient.js";

// let clientInstance: MongoClient | null = null;
export const con: string | undefined = process.env.CONNECTION_STRING

interface ClientType<T extends Document> {
    client: MongoClient;
    collection: Collection<T>;
}

// export async function connectToDatabase<T extends Document>(dataPointer: string): Promise<Collection<T>> {
//     console.log('connectToDatabase: Har startat.')
//     const client = await initializeMongoClient();
//     const db: Db = client.db('chat_client');
//     console.log('Db har hittats.')
//     return db.collection<T>(dataPointer);
// }

// originalfunktion:

export async function connectToDatabase<T extends Document>(dataPointer: string): Promise<ClientType<T>>{
    
    if(!con){
        console.log("Error: connection string not found");
        throw new Error("No connection!")
    }
    const client: MongoClient = new MongoClient(con)
    await client.connect()
    try {
        console.log('ConnectToDatabase: 1');
        
        const db : Db = await client.db("chat_client")
        const collection: Collection <T> = db.collection<T>(dataPointer)
        console.log('ConnectToDatabase: 2');
        
        return { client, collection }

    }catch (error) {
        console.error("Failed to connect to the database or retrieve collection", error);
        throw new Error("Database connection or query failed");
    }

}

// export async function connectToDatabase<T extends Document>(dataPointer: string): Promise<ClientType<T>>{
//     let collection: Collection <T>
//     if (!clientInstance){
//         if(!con){
//             console.log("Error: connection string not found");
//             throw new Error("No connection!")
//         }
//         const clientInstance: MongoClient = new MongoClient(con)
//         await clientInstance.connect()
//         try {
//             console.log(1);
            
//             const db : Db = await clientInstance.db("chat_client")
//             collection = db.collection<T>(dataPointer)
//             console.log(2);
    
//         }catch (error) {
//             console.error("Failed to connect to the database or retrieve collection", error);
//             throw new Error("Database connection or query failed");
//         }
//     }
//     return { collection, clientInstance }

// }