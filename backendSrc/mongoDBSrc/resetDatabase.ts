import { Collection, Db, MongoClient } from "mongodb";
import { con } from './connection.js'
// import { connectToDatabase } from "./connection";
import { Channel, ChannelMessage, DirectMessage, User } from '../data/interfaces.js'
import { channels, channelMessages, directMessages, users } from '../data/content.js'

// Vill kunna reda ut ett sätt att göra det här med en generisk funktion, men får ett fel över flera promises -- vilket känns rätt rimligt, eftersom jag returnar både collection och client men bara har Promise<ClientType<T>> i ett enda promise? 

// export async function resetDatabase(){
//     const [col, client]: [Collection<Channel>, MongoClient] = await connectToDatabase<Channel>('channels')
//     client.close()
//     await connectToDatabase()
// }

export async function resetDatabase(){
    if(!con) {
        console.log("Error: connection string not found");
        throw new Error("No connection!")
    }

    const client: MongoClient = new MongoClient(con)
    const db : Db = await client.db("chat_client")
    const collectionChannels: Collection<Channel> = db.collection<Channel>('channels')
    const collectionChannelMessages: Collection<ChannelMessage> = db.collection<ChannelMessage>('channelMessages')
    const collectionDirectMessages: Collection<DirectMessage> = db.collection<DirectMessage>('directMessages')
    const collectionUsers: Collection<User> = db.collection<User>('users')

    const resultChannels = await collectionChannels.deleteMany({})
    const resultChannelMessages = await collectionChannelMessages.deleteMany({})
    const resultDirectMessages = await collectionDirectMessages.deleteMany({})
    const resultUsers = await collectionUsers.deleteMany({})

    await collectionChannels.insertMany(channels)
    await collectionChannelMessages.insertMany(channelMessages)
    await collectionDirectMessages.insertMany(directMessages)
    await collectionUsers.insertMany(users)
    console.log('Database reset.')
    console.log(`Deleted channels: ${resultChannels.deletedCount}`)
    console.log(`Deleted channel messages: ${resultChannelMessages.deletedCount}`)
    console.log(`Deleted direct messages: ${resultDirectMessages.deletedCount}`)
    console.log(`Deleted users: ${resultUsers.deletedCount}`)
}