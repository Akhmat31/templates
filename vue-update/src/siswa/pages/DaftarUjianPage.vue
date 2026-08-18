<template>
  <DefaultLayout>
    <div class="max-w-7xl mx-auto px-4 py-6">
      <!-- BREADCRUMB -->
      <div class="mb-5">
        <p class="text-xs text-gray-500">
          Home
          <span class="mx-2">/</span>
          Dashboard
        </p>
      </div>

      <!-- WELCOME -->
      <div
        class="bg-white border border-gray-200 rounded-sm shadow-sm p-5 mb-6"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 class="text-xl font-semibold text-gray-800">
              Selamat Datang, Budi Santoso
            </h2>
            <p class="text-sm text-gray-500 mt-1">
              Selamat datang di sistem ujian online. Silakan pilih menu
              yang tersedia.
            </p>
          </div>
          <div class="mt-4 sm:mt-0">
            <span
              class="inline-block px-3 py-2 bg-green-100 text-green-700 text-xs rounded-sm"
            >
              Status: Siswa Aktif
            </span>
          </div>
        </div>
      </div>

      <!-- STATISTIK -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <!-- Total Ujian -->
        <div class="bg-white border border-gray-200 rounded-sm shadow-sm p-5">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs text-gray-500 uppercase">Total Ujian</p>
              <p class="text-3xl font-semibold text-gray-800 mt-2">12</p>
            </div>
            <div
              class="w-11 h-11 bg-blue-100 rounded-sm flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a3 3 0 006 0" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Selesai -->
        <div class="bg-white border border-gray-200 rounded-sm shadow-sm p-5">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs text-gray-500 uppercase">Ujian Selesai</p>
              <p class="text-3xl font-semibold text-gray-800 mt-2">8</p>
            </div>
            <div
              class="w-11 h-11 bg-green-100 rounded-sm flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Belum -->
        <div class="bg-white border border-gray-200 rounded-sm shadow-sm p-5">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs text-gray-500 uppercase">Belum Dikerjakan</p>
              <p class="text-3xl font-semibold text-gray-800 mt-2">4</p>
            </div>
            <div
              class="w-11 h-11 bg-yellow-100 rounded-sm flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Nilai -->
        <div class="bg-white border border-gray-200 rounded-sm shadow-sm p-5">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs text-gray-500 uppercase">Nilai Rata-rata</p>
              <p class="text-3xl font-semibold text-gray-800 mt-2">84</p>
            </div>
            <div
              class="w-11 h-11 bg-purple-100 rounded-sm flex items-center justify-center"
            >
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 3v18m4-16v14M7 8v8m8-12v16" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- UJIAN TERDEKAT -->
        <div class="lg:col-span-2">
          <div class="bg-white border border-gray-200 rounded-sm shadow-sm">
            <!-- Header -->
            <div class="px-5 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="font-semibold text-gray-800">Ujian Tersedia</h3>
                  <p class="text-xs text-gray-500 mt-1">
                    Ujian yang dapat Anda kerjakan.
                  </p>
                </div>
                <RouterLink to="#" class="text-xs text-blue-600 hover:text-blue-700">
                  Lihat Semua
                </RouterLink>
              </div>
            </div>

            <!-- Exam List -->
            <div class="divide-y divide-gray-200">
              <!-- Item 1 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h4 class="text-sm font-semibold text-gray-800">
                      Ujian Matematika
                    </h4>
                    <p class="text-xs text-gray-500 mt-1">
                      40 Soal &nbsp; | &nbsp; 60 Menit
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      Jadwal: 08:00 - 09:00 WIB
                    </p>
                  </div>
                  <div>
                    <span
                      class="inline-block mb-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-sm"
                    >
                      Belum Dikerjakan
                    </span>
                    <br />
                    <RouterLink
                      to="/masuk-sesi-ujian"
                      class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-sm"
                    >
                      Mulai Ujian
                    </RouterLink>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h4 class="text-sm font-semibold text-gray-800">
                      Ujian Bahasa Indonesia
                    </h4>
                    <p class="text-xs text-gray-500 mt-1">
                      30 Soal &nbsp; | &nbsp; 45 Menit
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      Jadwal: 10:00 - 10:45 WIB
                    </p>
                  </div>
                  <div>
                    <span
                      class="inline-block mb-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-sm"
                    >
                      Belum Dikerjakan
                    </span>
                    <br />
                    <RouterLink
                      to="/masuk-sesi-ujian"
                      class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-sm"
                    >
                      Mulai Ujian
                    </RouterLink>
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h4 class="text-sm font-semibold text-gray-800">
                      Ujian Bahasa Inggris
                    </h4>
                    <p class="text-xs text-gray-500 mt-1">
                      35 Soal &nbsp; | &nbsp; 50 Menit
                    </p>
                    <p class="text-xs text-gray-500 mt-1">Sudah dikerjakan</p>
                  </div>
                  <div>
                    <span
                      class="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs rounded-sm"
                    >
                      Selesai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SIDEBAR KANAN -->
        <div class="space-y-6">
          <!-- PROFIL -->
          <div class="bg-white border border-gray-200 rounded-sm shadow-sm">
            <div class="px-5 py-4 border-b border-gray-200">
              <h3 class="font-semibold text-gray-800">Data Siswa</h3>
            </div>
            <div class="p-5">
              <div class="flex items-center mb-5">
                <div
                  class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
                >
                  <span class="font-semibold text-blue-600">BS</span>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-semibold text-gray-800">
                    Budi Santoso
                  </p>
                  <p class="text-xs text-gray-500">Siswa</p>
                </div>
              </div>

              <div class="space-y-3 text-xs">
                <div class="flex justify-between">
                  <span class="text-gray-500">NIS</span>
                  <span class="text-gray-800 font-medium">12001</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Kelas</span>
                  <span class="text-gray-800 font-medium">XII IPA 1</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-500">Jurusan</span>
                  <span class="text-gray-800 font-medium">IPA</span>
                </div>
              </div>

              <a
                href="#"
                class="block text-center mt-5 border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 text-xs rounded-sm"
              >
                Lihat Profil
              </a>
            </div>
          </div>

          <!-- INFORMASI -->
          <div class="bg-white border border-gray-200 rounded-sm shadow-sm">
            <div class="px-5 py-4 border-b border-gray-200">
              <h3 class="font-semibold text-gray-800">Informasi</h3>
            </div>
            <div class="p-5">
              <div class="border-l-4 border-blue-500 bg-blue-50 p-3">
                <p class="text-xs font-semibold text-blue-800">Perhatian</p>
                <p class="text-xs text-blue-700 mt-1 leading-5">
                  Pastikan Anda membaca petunjuk ujian sebelum memulai
                  pengerjaan.
                </p>
              </div>
              <div class="border-l-4 border-yellow-500 bg-yellow-50 p-3 mt-3">
                <p class="text-xs font-semibold text-yellow-800">Pengingat</p>
                <p class="text-xs text-yellow-700 mt-1 leading-5">
                  Jangan menutup browser ketika sedang mengerjakan ujian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="text-center py-8">
        <p class="text-xs text-gray-500">
          &copy; 2015 Aplikasi Ujian Online
        </p>
        <p class="text-xs text-gray-400 mt-1">Sistem Informasi Akademik</p>
      </footer>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>
