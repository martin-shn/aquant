import { httpService } from "./http.service"
import { storgeService } from "./storage.service"


export const userService = {
    getUsers,
    loadUsers,
    getUserById
}

async function loadUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    let users = await httpService.get(url)
    users = users.map(user => {
        return {
            ...user,
            isFav: false,
            imgUrl:`https://robohash.org/${user.id}?set=set5`
        }
    })
    console.log('users', users[0]);

    storgeService.SaveToLocalStorge(users)
    return users

}

function getUsers() {

    const users = storgeService.loadFromLocalStorge()
    if (!users) {
        return loadUsers()
    }
    return users

}

function getUserById(userId) {
    const users = storgeService.loadFromLocalStorge()
    const user = users.find(user => user.id === userId)
    return Promise.resolve(user)

}

