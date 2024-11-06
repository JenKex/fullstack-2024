import React from 'react'
import { DirectMessage } from '../interfaces.js'

export const DMListItem: React.FC<DirectMessage> = ({ sendingUser }) =>{
    return <li>{ sendingUser }</li>
}