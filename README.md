Halloj och välkommen till SolarStorm, den hetaste sociala sajten för svenska ungdomar mellan 15-24 under åren 2002-2007!

## Allmän information

När ni startar sidan kommer getAllMessages och getAllChannels köras, en funktion som fetchar alla kanaler och aktiva meddelanden och renderar dem på sajten. Denna fetch-funktion ser ut, till exempel, så här:

```js
const response = await fetch("/direct-messages",
    {method: EXAMPLE,}
)
```

Ändra "EXAMPLE" till metoden ni vill använda. Alternativen är "GET" (hämtar information från APIt) och "POST" (skickar ett nytt objekt till databasen). PUT och DELETE används inte här, eftersom redigering och radering av meddelanden inte kunde implementeras innan bolaget gick i konkurs. För att skicka information till databasen använder ni POST, och skickar också med en body i formen av ett JavaScript-objekt; exempel finns nedan.

## Objektstruktur

De olika strukturerna för objekt i databasen ser ut så här:
```js
Cart: {
amount: number
}
```

```js
Flower: {
name: string,
price: number,
image: string,
amountInStock: number
}
```

```js
User: {
name: string,
isAdmin: boolean
}
```

Observera att om ni hämtar databasens collection i en console.log kommer ni se flera fält, bland annat _id, userId och productId. Dessa representeras av ObjectId, och läggs till automatiskt i databasen när ni skickar med en body -- inkludera ej _id, userId och productId i bodyn ni skapar för att skicka in.

REST-apierna att fetcha ifrån heter:
```
/channels
/channel-messages
/direct-messages
/users
```

---

## GET /flowers
Hämta alla blom-objekt.

```js
const response = await fetch('/flowers')
const flowers: Flower[] = await response.json()
```

## GET /flowers/:id

Hämta ett specifikt blom-objekt.

```js
const response = await fetch('/flowers/:id')

//Exempel på specifik blomhämtning:
const response = await fetch('/flowers/66fd2a9d040e7f50dcb738e4').

//Förväntat resultat:
{
    _id: 66fd2a9d040e7f50dcb738e4,
    name: "Lily",
    price: 14.25,
    image: "https://februarybloom.com/cdn/shop/products/IMG_3448_530x.jpg?v=1662614773",
    amountInStock: 25
}
```

## POST /flowers
Lägg till ett nytt blom-objekt. Requestet måste inkludera med request body, och måste inkludera alla objektets fält ifyllda enligt objektstrukturen ovan.

```js
//Exempel på ett POST-request:

const response = await fetch("/flowers",
    {method: "POST",}
    {body: {
        name: "Dandelion",
        price: 7.49,
        image: "example.com/dandelion.jpg"
        amountInStock: 1
     }}
)

```

## PUT /flowers/:id

Uppdaterar egenskaperna för ett specifikt blom-objekt. Body måste inkludera minst en egenskap som ska ändras.

```js
//Exempel på ett PUT-request:

const response = await fetch("/flowers/:id",
    {method: "PUT",}
    {body: {
        name: "Lily of the Valley"
     }}
)

```

## DELETE /flowers/:id

Raderar ett specifikt blom-objekt från databasen. Body behöver inte inkluderas.

```js
//Exempel på ett DELETE-request:

const response = await fetch("/flowers/:id",
    {method: "DELETE",}
)

```

 
---
