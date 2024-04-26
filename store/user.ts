import { defineStore } from 'pinia'

interface login {
    email: string;
    password: string;
    remember: boolean;
}

interface signup {
    firstname: string;
    middlename: string;
    lastname: string;
    suffix: string;
    number: string;
    birthdate: string;
    age: string;
    gender: string;
    email: string;
    password: string;
    terms: boolean;
}

export const userLogInStore = defineStore('login', () => {
    const loginInfo = ref<login[]>([])

    function addLogIn(email: string, password: string, remember: boolean) {
        loginInfo.value.push({ email, password, remember });
    }

    return { addLogIn, loginInfo }
})

export const userSignUpStore = defineStore('signup', () => {
    const signupInfo = ref<signup[]>([])

    function addSignUp(firstname: string, middlename: string, lastname: string, suffix: string, number: string, birthdate: string, age: string, gender: string, email: string, password: string, terms: boolean) {
        signupInfo.value.push({ firstname, middlename, lastname, suffix, number, birthdate, age, gender, email, password, terms });
    }

    return { addSignUp, signupInfo }
})