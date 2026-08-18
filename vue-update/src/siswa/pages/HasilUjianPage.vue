<template>
  <DefaultLayout>
    <main class="max-w-6xl mx-auto px-4 py-6">
      <!-- BREADCRUMB -->
      <div class="mb-5">
        <p class="text-xs text-gray-500">
          Dashboard
          <span class="mx-2">/</span>
          Hasil Ujian
          <span class="mx-2">/</span>
          Matematika
        </p>
      </div>

      <!-- SUCCESS MESSAGE -->
      <div
        class="bg-white border border-gray-200 rounded-sm shadow-sm p-5 mb-6"
      >
        <div class="flex items-start">
          <div
            class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
          >
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-800">
              Ujian Berhasil Diselesaikan
            </h2>
            <p class="text-sm text-gray-500 mt-1">
              Jawaban Anda telah berhasil disimpan. Berikut adalah ringkasan
              hasil ujian.
            </p>
          </div>
        </div>
      </div>

      <!-- INFO UJIAN -->
      <div class="bg-white border border-gray-200 rounded-sm shadow-sm mb-6">
        <div class="px-5 py-4 border-b border-gray-200">
          <h2 class="text-base font-semibold text-gray-800">
            Informasi Ujian
          </h2>
        </div>
        <div class="p-5">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <p class="text-xs text-gray-500">Peserta</p>
              <p class="text-sm font-medium text-gray-800 mt-1">Budi Santoso</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">NIS</p>
              <p class="text-sm font-medium text-gray-800 mt-1">12001</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Mata Pelajaran</p>
              <p class="text-sm font-medium text-gray-800 mt-1">Matematika</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Kelas</p>
              <p class="text-sm font-medium text-gray-800 mt-1">XII IPA 1</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Tanggal</p>
              <p class="text-sm font-medium text-gray-800 mt-1">12 Mei 2015</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Waktu Mulai</p>
              <p class="text-sm font-medium text-gray-800 mt-1">08:00 WIB</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Waktu Selesai</p>
              <p class="text-sm font-medium text-gray-800 mt-1">08:47 WIB</p>
            </div>
            <div>
              <p class="text-xs text-gray-500">Durasi</p>
              <p class="text-sm font-medium text-gray-800 mt-1">47 Menit</p>
            </div>
          </div>
        </div>
      </div>

      <!-- PREVIEW JAWABAN -->
      <div class="bg-white border border-gray-200 rounded-sm shadow-sm mb-6">
        <!-- HEADER -->
        <div class="px-5 py-4 border-b border-gray-200">
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          >
            <div>
              <h2 class="text-base font-semibold text-gray-800">
                Preview Jawaban
              </h2>
              <p class="text-xs text-gray-500 mt-1">
                Ringkasan jawaban yang telah Anda kerjakan.
              </p>
            </div>
            <div>
              <span class="text-xs text-gray-500">40 Soal</span>
            </div>
          </div>
        </div>

        <!-- LEGEND -->
        <div class="px-5 py-4 bg-gray-50 border-b border-gray-200">
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center">
              <span class="w-4 h-4 bg-green-500 rounded-sm mr-2"></span>
              <span class="text-xs text-gray-600">Sudah di isi</span>
            </div>
            <div class="flex items-center">
              <span
                class="w-4 h-4 bg-gray-200 border border-gray-300 rounded-sm mr-2"
              ></span>
              <span class="text-xs text-gray-600">Tidak Dijawab</span>
            </div>
          </div>
        </div>

        <!-- ANSWER GRID -->
        <div class="p-5">
          <div class="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
            <button
              v-for="n in 40"
              :key="n"
              class="h-10 text-white text-xs font-medium rounded-sm"
              :class="
                n <= 35
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-gray-100 border border-gray-300 text-gray-500'
              "
            >
              {{ n }}
            </button>
          </div>
        </div>
      </div>

      <!-- ACTION -->
      <div class="flex flex-col sm:flex-row sm:justify-between gap-3">
        <RouterLink
          to="/dashboard"
          class="px-5 py-2.5 border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 text-sm text-center rounded-sm"
        >
          Kembali ke Dashboard
        </RouterLink>
      </div>

      <!-- FOOTER -->
      <footer class="text-center py-8">
        <p class="text-xs text-gray-500">Aplikasi Ujian Online &copy; 2015</p>
        <p class="text-xs text-gray-400 mt-1">Sistem Informasi Akademik</p>
      </footer>
    </main>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>
