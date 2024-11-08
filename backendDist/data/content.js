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
