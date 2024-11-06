import { Collection, MongoClient } from "mongodb";

export interface Channel{
    name: string,
    // Renderar lista av messages in-app beroende på meddelandets associerade kanal, har det inte som en hårdkodad egenskap i kanalerna själva.
    // messages: ChannelMessage[],
    // Behöver eventuellt ingen lista på users i kanalen, eftersom alla kommer vara med ändå -- alternativet skulle vara om man gör en till egenskap på users t.ex. 'affiliatedChannels' där man sätter vilka användare som är med i vilka kanalers ID.
    // users: User[],
    isLocked: boolean
}

export interface ChannelMessage{
    text: string,
    // Tycker det är OK att basera kanal på sträng snarare än ID -- kan sätta in en unika-namn klausul på kanalnamn, och det blir mer komplicerat när man kollar mot kanal-id vs. objectId.
    channel: string,
    user: string,
    // timestamp?: Date
    messageId: number
}

export interface DirectMessage{
    text: string,
    receivingUser: string,
    sendingUser: string,
    // Antagligen enklare att sortera på timestamp än att sortera på messageId. Genereras automatiskt.
    // Unikhetsproblem dock. Kör kanske med båda.
    // timestamp?: Date
    messageId: number
}

export interface DirectMessageWithoutId{
    text: string,
    receivingUser: string,
    sendingUser: string,
    // timestamp?: Date
}

export interface User{
    username: string,
    password: string,
    userId: number
}

export interface ClientType<T extends Document> {
    client: MongoClient;
    collection: Collection<T>;
}
