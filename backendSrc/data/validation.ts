import { users } from './content.js'

export function validateLogin(username: string, password: string): number | null {
	const matchingUser = users.find(user => user.username === username && user.password === password)
	if( matchingUser ) {
		return matchingUser.userId
	}
	return null
}