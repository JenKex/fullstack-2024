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