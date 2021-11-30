const usersDB = 'usersDB'

export const storgeService = {
    loadFromLocalStorge,
    SaveToLocalStorge,
    clearLocalStorge
}

function loadFromLocalStorge() {
    const DB = localStorage.getItem(usersDB)
    if (DB) return JSON.parse(DB)
    return null
}
function SaveToLocalStorge(data) {
    localStorage.setItem(usersDB, JSON.stringify(data))
}

function clearLocalStorge() {
    localStorage.removeItem(usersDB)
}

