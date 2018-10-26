export const setJwtItem = (token) => {
    localStorage.setItem('jwtToken', token)
    if(localStorage.getItem('jwtToken')) {
        return true
    } else {
        return false
    }
}

export const getJwtToken = () => {
    return localStorage.getItem('jwtToken')
}

export const removeJwtToken = () => {
    localStorage.removeItem('jwtToken')
    if (localStorage.getItem('jwtToken')) {
        localStorage.removeItem('vuex')
        return false
    } else {
        return true
    }
}
