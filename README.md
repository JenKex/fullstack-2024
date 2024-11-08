Halloj och välkommen till SolarStorm, den hetaste sociala sajten för svenska ungdomar mellan 15-24 under åren 2002-2007!

## Allmän information

När ni startar sidan kommer getAllMessages och getAllChannels köras, en funktion som fetchar alla kanaler och aktiva meddelanden och renderar dem på sajten. Denna fetch-funktion ser ut, till exempel, så här:

```js
const response = await fetch("/direct-messages",
    {method: EXAMPLE}
)
```

Ändra "EXAMPLE" till metoden ni vill använda. Alternativen är "GET" (hämtar information från APIt) och "POST" (skickar ett nytt objekt till databasen). PUT och DELETE används inte här, eftersom redigering och radering av meddelanden inte kunde implementeras innan bolaget gick i konkurs. För att skicka information till databasen använder ni POST, och skickar också med en body i formen av ett JavaScript-objekt; exempel finns nedan.

## Objektstruktur

De olika strukturerna för objekt i databasen ser ut så här:

```js
Channel: {
    name: string,
    id?: number,
    isLocked: boolean
}
```

```js
ChannelMessage: {
    text: string,
    channel: number,
    user: string,
    messageId: number
}
```

```js
DirectMessage: {
    text: string,
    receivingUser: string,
    sendingUser: string,
    messageId: number
}
```

```js
User: {
    username: string,
    password: string,
    userId: number
}
```

Inkludera ej _id eller messageId i bodyn ni skapar för att skicka in -- detta läggs till automatiskt av programmet.

REST-apierna att fetcha ifrån heter:
```
/channels
/channel-messages
/direct-messages
/users
```

---

## GET /channels
Hämta alla kanaler.

```js
const response = await fetch('/channels')
const channels: Channel[] = await response.json()
```

## GET /channel-messages
Hämta alla meddelanden från alla kanaler.

```js
const response = await fetch('/channel-messages')
const channelMessages: ChannelMessage[] = await response.json()
```

## GET /channel-messages/:id
Hämta alla meddelanden associerad med en specifik kanal. Denna fetch kör en funktion som använder den nuvarande kanalen som en parameter.

```js
const {path} = useParams<{path: string}>()
async function getChannelMessages(){
    const response: Response | null = await fetch(`/api/channel-messages/${path}`)
    }
```

## POST /channel-messages
Posta ett nytt meddelande. Enbart texten måste skapas i frontend, och skapas när man skriver den i textfältet; information om användaren som postar det och vilken kanal det postas i skapas båda baserat på den nuvarande addressen och inloggade användaren.

```js
    const user: string = localStorage.getItem('username') || 'Gäst'
    const channel: string | undefined = path
    const newMessage = { text, user, channel }
    console.log(newMessage)
    await fetch('/api/channel-messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newMessage)
    })

```

## GET /direct-messages
Hämta alla direktmeddelanden postade mellan användare.

```js
const response = await fetch('/direct-messages')
const channelMessages: ChannelMessage[] = await response.json()
```

## GET /direct-messages/:id
Hämta alla meddelanden associerad med en specifik användare. Denna fetch kör en funktion som kollar om ett visst användarnamn dyker upp antingen som receivingUser eller sendingUser bland alla meddelanden.

```js
const username = localStorage.getItem('username')
const response = await fetch(`/api/direct-messages/${loggedInUser}`)
const channels: Channel[] = await response.json()
```

## POST /direct-messages
Posta ett nytt meddelande. Enbart texten måste skapas i frontend, och skapas när man skriver den i textfältet; information om användaren som postar det och vilken användare det postas till skapas båda automatiskt baserat på den nuvarande addressen och inloggade användaren.

```js

    const {path} = useParams<{path: string}>()
    const sendingUser: string = localStorage.getItem('username') || ''
    const receivingUser: string | undefined = path
    const newMessage = { text, sendingUser, receivingUser }
    console.log(newMessage)
    await fetch('/api/direct-messages', {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newMessage)
    })

```

## GET /users

Hämta information om alla användare.

```js
const response = await fetch('/users')
const channelMessages: ChannelMessage[] = await response.json()
```
 
---

Lycka till, och njut av din flärdiga socialiseringsupplevelse! 💗