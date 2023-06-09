const ALL_STRING_ID = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'


function randomNumber(n, allStr) {
    let str = ''
    for (let i = 0; i < n; i++) {
        let pos = Math.floor(Math.random() * allStr.length);
        str += allStr.substring(pos,pos+1);
    }
    return str
}

export function randomId() {
    let id = randomNumber(10, ALL_STRING_ID)
    return id
}

function getNewDate(data) {
    let dataStr = (data) >= 10
        ? (data)
        : `0${(data)}`
    return dataStr
}

export function genData() {

    let day = getNewDate(new Date().getDay())
    let month = getNewDate(new Date().getMonth())
    let year = new Date().getFullYear()

    return `${day}/${month}/${year} `
}

export function genTime() {

    let second = getNewDate(new Date().getSeconds())
    let minute = getNewDate(new Date().getMinutes())
    let hours = getNewDate(new Date().getHours())
   
    return `${hours}:${minute}:${second} `
}