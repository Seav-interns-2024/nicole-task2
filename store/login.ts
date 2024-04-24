import { defineStore } from 'pinia'

export const userLogInStore = defineStore('LogIn',{

    state: () => ({
        email: '',
        password: ''
    }),
    getters: {
    },
    actions: {
    }
})