import React from 'react'
import { DirectMessage } from '../interfaces.js'

// Insåg att sättet jag har dessa uppsatt gör att man ser hela listan användare, och kan klicka på dem och se även om man inte har några DMs emellan sig. Känns som att det funkar OK, eftersom den enda--
// Nej, jag måste omstrukturera .mapen för att rendera bara från listan man har DMs ifrån, köra en if.includes och stryk dem som dupliceras. Annars kommer den egna användaren med på listan och det bara blir för mycket strul i framtiden. 

export const DMListItem: React.FC<DirectMessage> = ({ sendingUser }) =>{
    // onClick => navigate(chatrooms/${sendingUser.username})
    return <li>{ sendingUser }</li>
}