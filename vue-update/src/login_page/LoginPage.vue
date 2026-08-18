<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <!-- Header / Logo -->
      <div class="text-center mb-6">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>

        <h1 class="text-2xl font-semibold text-gray-800">
          Aplikasi Ujian Online
        </h1>
        <p class="mt-1 text-sm text-gray-500">Berbasis WEB</p>
      </div>

      <!-- Login Card -->
      <div
        class="bg-white border border-gray-200 shadow-sm rounded-sm p-6 sm:p-8"
      >
        <div class="mb-6">
          <h2 class="text-xl font-medium text-gray-800">Login</h2>
          <p class="text-sm text-gray-500 mt-1">
            Silakan masuk untuk mengikuti ujian.
          </p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin">
          <!-- Username -->
          <div class="mb-5">
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              v-model="username"
              type="text"
              placeholder="Masukkan username"
              autocomplete="username"
              required
              class="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          <!-- Password -->
          <div class="mb-5">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Masukkan password"
              autocomplete="current-password"
              required
              class="w-full px-3 py-2.5 border border-gray-300 rounded-sm text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Masuk
          </button>
        </form>
      </div>

      <div class="text-center mt-6">
        <p class="text-xs text-gray-500">
          &copy; 2015 Aplikasi Ujian Online
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

function handleLogin() {
  router.push('/dashboard');
}
</script>
