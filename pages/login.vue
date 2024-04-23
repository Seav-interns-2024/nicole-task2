<script setup lang="ts">
import { ref } from 'vue';

const valid = ref(false);
const form = ref({
  email: '',
  password: '',
  remember: false
});

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
  form.value.email = '',
    form.value.password = ''
  form.value.remember = false
}
</script>

<template>
  <div class="flex bg-gray-200">
    <div class="w-3/5 max-w-xl mx-auto mt-7 mb-6">
      <v-carousel show-arrows="hover">
        <v-carousel-item>
          <div class="flex flex-col items-center">
            <img src="https://philsys.gov.ph/wp-content/uploads/2024/04/Registration-Dashboard-as-of-05-April-2024.png"
              alt="img1">
            <div class="text-center mt-1 font-italic text-sm text-[#1f4380]">Registration as of April 5, 2024</div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="flex flex-col items-center">
            <img
              src="https://philsys.gov.ph/wp-content/uploads/2024/04/PhilID-Issuance-Dashboard-as-of-05-April-2024-1024x770.jpg"
              alt="img2">
            <div class="text-center mt-1 font-italic text-sm text-[#1f4380]">PhilID Processing, Issuance or Delivery as
              of April 5, 2024</div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="flex-1 max-w-md mx-auto">
      <v-card class="rounded-lg mt-16">
        <h1 class="text-center mt-10 mb-2 text-xl font-sans font-bold uppercase text-[#134087]">Log In</h1>
        <v-form v-model="valid">
          <v-container class="space-y-6">
            <v-text-field v-model="form.email" :rules="emailRules" class="text-blue-950" label="Email"
              required></v-text-field>
            <v-text-field v-model="form.password" :counter="10" class="text-blue-950" label="Password"
              required></v-text-field>
            <div class="flex justify-between mt-1">
              <v-checkbox v-model="form.remember" label="Remember me" color="#1f4380"
                class="-ml-1 text-black"></v-checkbox>
              <a href="#" class="text-[#134087] mt-5">Forgot Password?</a>
            </div>
            <div class="flex justify-center mt-0 mb-5">
              <v-btn @click="submit" color="#fdc910" class="text-white">Submit</v-btn>
            </div>
          </v-container>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<style scoped></style>