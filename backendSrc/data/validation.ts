import Joi from 'joi'
import { ChannelMessage, DirectMessageWithoutId, User } from '../data/interfaces.js' 
import { users } from './content.js'
// import { getAllUsers } from userFunctions

//Gör denna async och kör en fetch på användare i databasen.
export async function validateLogin(username: string, password: string): Promise<number | null> {
	// const users = await getAllUsers()
	const matchingUser = users.find(user => user.username === username && user.password === password)
	if( matchingUser ) {
		return matchingUser.userId
	}
	console.log('Fel användarnamn eller lösenord. :(')
	return null
}

export const userSchema = Joi.defaults(schema => {
	return schema.required()
})
	.object({
		_id: Joi.string()
		.min(24),
		username: Joi.string()
		.min(1)
		.required(),
		password: Joi.string()
		.min(1)
		.required(),
	})
	.unknown(false)

export const channelMessageSchema = Joi.defaults(schema => {
	return schema.required()
})
	.object({
		_id: Joi.string()
		.min(24),
		text: Joi.string()
		.min(1)
		.required(),
		channel: Joi.string()
		.min(1)
		.required(),
		user: Joi.string()
		.min(1)
		.required(),
	})
	.unknown(false)

	export const directMessageSchema = Joi.defaults(schema => {
		return schema.required()
	})
	.object({
		_id: Joi.string()
		.min(24),
		text: Joi.string()
		.min(1)
		.required(),
		receivingUser: Joi.string()
		.min(1)
		.required(),
		sendingUser: Joi.string()
		.min(1)
		.required()
	})
	.unknown(false)

export function isValidUser(user: User): boolean {
	let result = userSchema.validate(user)
	return !result.error
}

export function isValidDirectMessage(directMessage: DirectMessageWithoutId): boolean {
	let result = directMessageSchema.validate(directMessage)
	console.log(result)
	return !result.error
}

export function isValidChannelMessage(channelMessage: ChannelMessage): boolean {
	let result = channelMessageSchema.validate(channelMessage)
	console.log(result)
	return !result.error
}