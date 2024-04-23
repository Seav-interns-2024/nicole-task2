<script setup lang="ts">
import { ref } from 'vue';

const valid = ref(false);
const form = ref({
    firstname: '',
    middlename: '',
    lastname: '',
    suffix: '',
    number: '',
    birthdate: '',
    age: '',
    gender: '',
    email: '',
    password: '',
    terms: false
});

const nameRules = [
    (value: string) => {
        if (value) return true;
        return 'Name is required.';
    },
    (value: string) => {
        if (value?.length <= 10) return true;
        return 'Name must be less than 10 characters.';
    },
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

function submit() {
    console.log('Form submitted!');
    console.log(form.value)

    //clear cell
    form.value.firstname = ''
    form.value.middlename = ''
    form.value.lastname = ''
    form.value.suffix = ''
    form.value.number = ''
    form.value.birthdate = ''
    form.value.age = ''
    form.value.gender = ''
    form.value.email = '',
        form.value.password = ''
    form.value.terms = false
}
</script>

<template>
    <div class="flex bg-gray-200">
        <div class="flex-1 max-w-6xl mx-auto mb-8">
            <v-card class="rounded-lg mt-8">
                <h1 class="text-xl text-center mt-7 mb-2 font-sans font-bold uppercase text-[#134087]">Sign Up</h1>
                <v-form v-model="valid">
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.firstname" :counter="10" :rules="nameRules"
                                    class="text-blue-950" label="First name" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.middlename" :counter="10" :rules="nameRules"
                                    class="text-blue-950" label="Middle name" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.lastname" :counter="10" :rules="nameRules"
                                    class="text-blue-950" label="Last name" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-select label="Suffix" v-model="form.suffix" class="text-blue-950"
                                    :items="['-', 'Jr.', 'Sr.', 'I', 'II', 'III', 'IV', 'V', 'VI']"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.number" :counter="10" type="tel" class="text-blue-950"
                                    label="Contact Number" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.birthdate" :counter="10" type="date" label="Date of Birth"
                                    class="text-blue-950" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-text-field v-model="form.age" :counter="2" label="Age" maxlength="2"
                                    class="text-blue-950" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-select label="Gender" v-model="form.gender" class="text-blue-950"
                                    :items="['Male', 'Female']"></v-select>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="form.email" :rules="emailRules" :counter="10" type="email"
                                    class="text-blue-950" label="Email" required></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field v-model="form.password" :counter="10" type="password"
                                    class="text-blue-950" label="Password" required></v-text-field>
                            </v-col>
                        </v-row>

                        <div>
                            <v-checkbox v-model="form.terms" label="Accept Terms and Conditions" class="text-black"
                                color="#1f4380"></v-checkbox>
                        </div>

                        <div class="flex justify-center -mt-5 mb-4">
                            <v-btn @click="submit" color="#fdc910" class="text-white">Submit</v-btn>
                        </div>
                    </v-container>
                </v-form>
            </v-card>
        </div>
    </div>
</template>

<style scoped></style>