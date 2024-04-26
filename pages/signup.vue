<script setup lang="ts">
import { ref } from 'vue';
import { userSignUpStore } from '~/store/user.js'

const { addSignUp } = userSignUpStore();
const firstname = ref('');
const middlename = ref('');
const lastname = ref('');
const suffix = ref('');
const number = ref('');
const birthdate = ref('');
const age = ref('');
const gender = ref('');
const email = ref('');
const password = ref('');
const terms = ref(false)
const signup = () => {
    addSignUp(firstname.value, middlename.value, lastname.value, suffix.value, number.value, birthdate.value, age.value, gender.value, email.value, password.value, terms.value)
    firstname.value = ''
    middlename.value = ''
    lastname.value = ''
    suffix.value = ''
    number.value = ''
    birthdate.value = ''
    age.value = ''
    gender.value = ''
    email.value = ''
    password.value = ''
    terms.value = false
}

const nameRules = [
    (value: string) => {
        if (value) return true;
        return 'Name is required.';
    },
    (value: string) => {
        if (/^\d*$/.test(value)) return true;
        return 'Must be numerical characters only.';
    }
];
const suffixRules = [
    (value: string) => {
        if (value) return true;
        return 'Suffix is required.';
    }
];
const numRules = [
    (value: string) => {
        if (value) return true;
        return 'Contact Number is required.';
    },
    (value: string) => {
        if (/^\d*$/.test(value)) return true;
        return 'Must be numerical characters only.';
    }
];
const birthdateRules = [
    (value: string) => {
        if (value) return true;
        return 'Date of Birth is required.';
    }
];
const ageRules = [
    (value: string) => {
        if (value) return true;
        return 'Age is required.';
    },
    (value: string) => {
        if (/^\d+$/.test(value)) return true;
        return 'Age must be numerical characters only.';
    }
];
const genderRules = [
    (value: string) => {
        if (value) return true;
        return 'Gender is required.';
    }
];
const emailRules = [
    (value: string) => {
        if (value) return true;
        return 'Email is required.';
    },
    (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;
        return 'Email must be valid.';
    },
];
const passwordRules = [
    (value: string) => {
        if (value) return true;
        return 'Password is required.';
    },
    (value: string) => {
        if (value && value.length >= 6) return true;
        return 'Password must be at least 6 characters long.';
    },
];
const termsRules = [
    (value: boolean) => {
        if (value) return true;
        return 'You must accept the terms and conditions.';
    }
];
</script>

<template>
    <div class="flex bg-gray-200">
        <div class="flex-1 max-w-6xl mx-auto mb-8">
            <v-card class="rounded-lg mt-8">
                <h1 class="text-xl text-center mt-7 mb-2 font-sans font-bold uppercase text-[#134087]">Sign Up</h1>
                <v-form>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="firstname" :rules="nameRules" class="text-blue-950"
                                    label="First name" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="middlename" :rules="nameRules" class="text-blue-950"
                                    label="Middle name" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="lastname" :rules="nameRules" class="text-blue-950"
                                    label="Last name" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-select label="Suffix" v-model="suffix" :rules="suffixRules" class="text-blue-950"
                                    clearable :items="['Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'VI']"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="number" :counter="11" :rules="numRules" class="text-blue-950"
                                    label="Contact Number" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="birthdate" :rules="birthdateRules" type="date"
                                    label="Date of Birth" class="text-blue-950" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="age" :counter="2" label="Age" maxlength="2" :rules="ageRules"
                                    class="text-blue-950" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-select label="Gender" v-model="gender" :rules="genderRules" class="text-blue-950" clearable
                                    :items="['Male', 'Female']"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="email" :rules="emailRules" type="email" class="text-blue-950"
                                    label="Email" clearable required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field v-model="password" :rules="passwordRules" type="password"
                                    class="text-blue-950" label="Password" clearable required></v-text-field>
                            </v-col>
                        </v-row>

                        <div>
                            <v-checkbox v-model="terms" :rules="termsRules" label="Accept Terms and Conditions" class="text-black"
                                color="#1f4380"></v-checkbox>
                        </div>

                        <div class="flex justify-center -mt-5 mb-4">
                            <v-btn @click="signup" color="#fdc910" class="text-white">Submit</v-btn>
                        </div>
                    </v-container>
                </v-form>
            </v-card>
        </div>
    </div>
</template>

<style scoped></style>