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
        text: "Hey everyone, what games are you playing?",
        channel: "Spelsnack",
        user: "johnDoe",
        timestamp: new Date()
    },
    {
        text: "Just started a new movie role, super excited!",
        channel: "Drama",
        user: "emmaStone",
        timestamp: new Date()
    },
    {
        text: "Anyone got tips for improving in basketball?",
        channel: "Allmänt",
        user: "mikeJordan",
        timestamp: new Date()
    },
    {
        text: "Can't wait for the new game release next month!",
        channel: "Spelsnack",
        user: "alexJohnson",
        timestamp: new Date()
    },
    {
        text: "Did you hear about the latest celebrity drama?",
        channel: "Drama",
        user: "janeSmith",
        timestamp: new Date()
    },
    {
        text: "I'm trying to beat my high score in this game.",
        channel: "Spelsnack",
        user: "mikeJordan",
        timestamp: new Date()
    },
    {
        text: "Looking forward to hanging out with everyone!",
        channel: "Allmänt",
        user: "johnDoe",
        timestamp: new Date()
    },
    {
        text: "Let's talk about some new acting techniques.",
        channel: "Drama",
        user: "emmaStone",
        timestamp: new Date()
    },
    {
        text: "I'm new here, any recommendations for the best games?",
        channel: "Spelsnack",
        user: "janeSmith",
        timestamp: new Date()
    },
    {
        text: "Wow, this channel is really active today!",
        channel: "Allmänt",
        user: "alexJohnson",
        timestamp: new Date()
    }];
let directMessages = [{
        text: "Hey, want to team up for that game?",
        receivingUser: "mikeJordan",
        sendingUser: "johnDoe",
        timestamp: new Date()
    },
    {
        text: "Congrats on your new movie role, that's amazing!",
        receivingUser: "emmaStone",
        sendingUser: "janeSmith",
        timestamp: new Date()
    },
    {
        text: "Got any basketball tips for me?",
        receivingUser: "mikeJordan",
        sendingUser: "alexJohnson",
        timestamp: new Date()
    },
    {
        text: "Thanks for the suggestion on that game!",
        receivingUser: "johnDoe",
        sendingUser: "janeSmith",
        timestamp: new Date()
    },
    {
        text: "Had a great time discussing acting techniques.",
        receivingUser: "emmaStone",
        sendingUser: "alexJohnson",
        timestamp: new Date()
    },
    {
        text: "Wanna grab coffee sometime soon?",
        receivingUser: "janeSmith",
        sendingUser: "johnDoe",
        timestamp: new Date()
    },
    {
        text: "Good luck with your high score attempt!",
        receivingUser: "mikeJordan",
        sendingUser: "emmaStone",
        timestamp: new Date()
    },
    {
        text: "Let's catch up soon, it's been a while.",
        receivingUser: "alexJohnson",
        sendingUser: "janeSmith",
        timestamp: new Date()
    },
    {
        text: "Appreciate the support, it's a big role!",
        receivingUser: "janeSmith",
        sendingUser: "emmaStone",
        timestamp: new Date()
    },
    {
        text: "How's everything going on your side?",
        receivingUser: "johnDoe",
        sendingUser: "alexJohnson",
        timestamp: new Date()
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
