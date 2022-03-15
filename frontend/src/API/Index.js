import axios from "axios"


const instance = axios.create({
    baseURL: 'http://localhost:8000'
})

export const hakatonApi = {
    signIn(userData) {
        return instance.post('/auth/token/login/', userData).then(response => response.data)
    },
    signUp(userData) {
        return instance?.post('/api/v1/auth/users/', userData).then(response => response.data)
    },
    getAllItems() {
        return instance.get('/api/v1/product/').then(response => response.data)
    },
    getAllByName(value) {
        return instance.get('/api/v1/product/?search=' + value).then(response => response.data)
    },
    getAllById(id) {
        return instance.get('/api/v1/product/' + id).then(response => response.data)
    },
} 
