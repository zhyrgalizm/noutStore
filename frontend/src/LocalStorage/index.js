export const setLSToken = (token) => {
    localStorage.setItem('token', token)
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const removeLSToken = () => {
    localStorage.removeItem('token')
}