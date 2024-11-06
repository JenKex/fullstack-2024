let channels = [{
        name: 'Allmänt',
        isLocked: false
    },
    {
        name: 'Spelsnack',
        isLocked: false
    },
    {
        name: 'Drama',
        isLocked: true
    }];
let channelMessages = [{
        text: "Halloj allihopa, vad spelar ni just nu?",
        channel: "Spelsnack",
        user: "johnDoe",
        messageId: 1
    },
    {
        text: "jag älskar att ha ensidiga känslor! så underbart att ha ensidiga känslor för min bästa kompis!!",
        channel: "Drama",
        user: "emmaStone",
        messageId: 2
    },
    {
        text: "Har någon kommit ner till Valand på senaste?",
        channel: "Allmänt",
        user: "mikeJordan",
        messageId: 3
    },
    {
        text: "God of War 1 är det enda bra spelet. Inget illa ment och inget otrevligt. Bara ren sanning.",
        channel: "Spelsnack",
        user: "alexJohnson",
        messageId: 4
    },
    {
        text: "Emma, vi pratade ju om det här. :(",
        channel: "Drama",
        user: "janeSmith",
        messageId: 5
    },
    {
        text: "God of War 2 är det enda bra spelet lmao",
        channel: "Spelsnack",
        user: "Gäst",
        messageId: 6
    },
    {
        text: "Halloj! Träffas vi fortfarande för ett ölhäng på Tja-Tja? 😊",
        channel: "Allmänt",
        user: "johnDoe",
        messageId: 7
    },
    {
        text: "vi pratade inte tillräckligt!!",
        channel: "Drama",
        user: "emmaStone",
        messageId: 8
    },
    {
        text: "dom har gjort reboots och de e inte bra",
        channel: "Spelsnack",
        user: "Gäst",
        messageId: 9
    },
    {
        text: "@mikeJordan nej, det har brunnit de senaste 24 timmarna. @johnDoe Skulle vara supernajs! :)",
        channel: "Allmänt",
        user: "alexJohnson",
        messageId: 10
    }];
let directMessages = [{
        text: "Vill du köra lite Helldivers tillsammans nån gång?",
        receivingUser: "mikeJordan",
        sendingUser: "johnDoe",
        messageId: 1
    },
    {
        text: "Jag vill inte tappa dig som vän. Jag VILL kunna ha ett liv med dig.  :( ",
        receivingUser: "emmaStone",
        sendingUser: "janeSmith",
        messageId: 2
    },
    {
        text: "John har varit så jävla dryg på senaste, jag står inte ut.",
        receivingUser: "mikeJordan",
        sendingUser: "alexJohnson",
        messageId: 3
    },
    {
        text: "Har du någonsin gått igenom ett jobbigt relationsbrott?",
        receivingUser: "johnDoe",
        sendingUser: "janeSmith",
        messageId: 4
    },
    {
        text: "jag kan inte stå ut med att känna så här hela tiden, inte när jag gillar dig så mycket",
        receivingUser: "emmaStone",
        sendingUser: "alexJohnson",
        messageId: 5
    },
    {
        text: "Ja, ofta. Vill du snacka om det över middag?",
        receivingUser: "janeSmith",
        sendingUser: "johnDoe",
        messageId: 6
    },
    {
        text: "vill du hänga och snacka skit någon gång, känner mig så less på allt just nu",
        receivingUser: "mikeJordan",
        sendingUser: "emmaStone",
        messageId: 7
    },
    {
        text: "Du, har du sett Emma på senaste? Jag träffade John och har inte sett henne sen dess.",
        receivingUser: "alexJohnson",
        sendingUser: "janeSmith",
        messageId: 8
    },
    {
        text: "Så länge du orkar gilla mig lite, lite mindre kan vi fortsätta vara ihop, men annars krossar du mig under vikten av ditt hjärta",
        receivingUser: "janeSmith",
        sendingUser: "emmaStone",
        messageId: 9
    },
    {
        text: "Du måste komma NU, kroppen håller på att RÖRA PÅ SIG",
        receivingUser: "johnDoe",
        sendingUser: "alexJohnson",
        messageId: 10
    }];
// let channelMessages: ChannelMessage[] = [  {
//     text: "Hey everyone, what games are you playing?",
//     channel: "Spelsnack",
//     user: "johnDoe",
//     timestamp: new Date()
//   },
//   {
//     text: "Just started a new movie role, super excited!",
//     channel: "Drama",
//     user: "emmaStone",
//     timestamp: new Date()
//   },
//   {
//     text: "Anyone got tips for improving in basketball?",
//     channel: "Allmänt",
//     user: "mikeJordan",
//     timestamp: new Date()
//   },
//   {
//     text: "Can't wait for the new game release next month!",
//     channel: "Spelsnack",
//     user: "alexJohnson",
//     timestamp: new Date()
//   },
//   {
//     text: "Did you hear about the latest celebrity drama?",
//     channel: "Drama",
//     user: "janeSmith",
//     timestamp: new Date()
//   },
//   {
//     text: "I'm trying to beat my high score in this game.",
//     channel: "Spelsnack",
//     user: "mikeJordan",
//     timestamp: new Date()
//   },
//   {
//     text: "Looking forward to hanging out with everyone!",
//     channel: "Allmänt",
//     user: "johnDoe",
//     timestamp: new Date()
//   },
//   {
//     text: "Let's talk about some new acting techniques.",
//     channel: "Drama",
//     user: "emmaStone",
//     timestamp: new Date()
//   },
//   {
//     text: "I'm new here, any recommendations for the best games?",
//     channel: "Spelsnack",
//     user: "janeSmith",
//     timestamp: new Date()
//   },
//   {
//     text: "Wow, this channel is really active today!",
//     channel: "Allmänt",
//     user: "alexJohnson",
//     timestamp: new Date()
//   }]
// let directMessages: DirectMessage[] = [  {
//     text: "Hey, want to team up for that game?",
//     receivingUser: "mikeJordan",
//     sendingUser: "johnDoe",
//     timestamp: new Date()
//   },
//   {
//     text: "Congrats on your new movie role, that's amazing!",
//     receivingUser: "emmaStone",
//     sendingUser: "janeSmith",
//     timestamp: new Date()
//   },
//   {
//     text: "Got any basketball tips for me?",
//     receivingUser: "mikeJordan",
//     sendingUser: "alexJohnson",
//     timestamp: new Date()
//   },
//   {
//     text: "Thanks for the suggestion on that game!",
//     receivingUser: "johnDoe",
//     sendingUser: "janeSmith",
//     timestamp: new Date()
//   },
//   {
//     text: "Had a great time discussing acting techniques.",
//     receivingUser: "emmaStone",
//     sendingUser: "alexJohnson",
//     timestamp: new Date()
//   },
//   {
//     text: "Wanna grab coffee sometime soon?",
//     receivingUser: "janeSmith",
//     sendingUser: "johnDoe",
//     timestamp: new Date()
//   },
//   {
//     text: "Good luck with your high score attempt!",
//     receivingUser: "mikeJordan",
//     sendingUser: "emmaStone",
//     timestamp: new Date()
//   },
//   {
//     text: "Let's catch up soon, it's been a while.",
//     receivingUser: "alexJohnson",
//     sendingUser: "janeSmith",
//     timestamp: new Date()
//   },
//   {
//     text: "Appreciate the support, it's a big role!",
//     receivingUser: "janeSmith",
//     sendingUser: "emmaStone",
//     timestamp: new Date()
//   },
//   {
//     text: "How's everything going on your side?",
//     receivingUser: "johnDoe",
//     sendingUser: "alexJohnson",
//     timestamp: new Date()
//   }]
let users = [
    {
        username: "johnDoe",
        password: "123",
        userId: 101
    },
    {
        username: "janeSmith",
        password: "mySecurePass",
        userId: 102
    },
    {
        username: "mikeJordan",
        password: "hoopsKing23",
        userId: 103
    },
    {
        username: "emmaStone",
        password: "hollywoodStar",
        userId: 104
    },
    {
        username: "alexJohnson",
        password: "alexIsCool",
        userId: 105
    }
];
export { channels, channelMessages, directMessages, users };
