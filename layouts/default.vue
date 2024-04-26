<script setup lang="ts">
  const drawer= ref(false)
</script>

<template>
  <div>
    <v-card>
      <v-layout>
        <v-app-bar color="#294278" height="140" prominent>
          <img src="assets/props/logo.png" alt="logo" class="w-96 h-30 ml-4">
          <v-spacer></v-spacer>
          <ul class="flex gap-4 font-sans font-bold text-[#294278] text-sm uppercase mr-5">
                    <li><NuxtLink to="/" class="p-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#fdc910]">Home</NuxtLink></li>
                    <li><NuxtLink to="/login" class="p-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#fdc910]">Log In</NuxtLink></li>
                    <li><NuxtLink to="/signup" class="p-2.5 rounded-lg bg-[#FFFFFF] hover:bg-[#fdc910]">Sign Up</NuxtLink></li>
          </ul>
          <v-app-bar-nav-icon variant="text" class="mr-5" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : 'right'" temporary>
          <a href="#" class="font-sans font-bold text-[#294278] text-sm uppercase">
            <div class="mt-3 space-y-3">
              <v-list-item link>About</v-list-item>
              <v-list-item link>Registration</v-list-item>
              <v-list-item link>Use Cases</v-list-item>
              <v-list-item link>Ephilid</v-list-item>
              <v-list-item lin>News and events</v-list-item>
              <v-list-item link>Testimonals</v-list-item>
              <v-list-item link>Contact us</v-list-item>
            </div>
          </a>
        </v-navigation-drawer>

        <v-main>
          <slot />
        </v-main>

      </v-layout>
    </v-card>
  </div>
</template>

<!-- <script setup lang="ts">

</script>

<template>
    <div>
        <header class="shadow-sm bg-[#294278]">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/"class="font-bold">Welcome to Nuxt!</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<style scoped>

</style> -->