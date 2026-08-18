<template>
  <DefaultLayout>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <!-- WELCOME -->
      <div class="mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">
          Dashboard Siswa
        </h1>
        <p class="text-sm text-gray-500 mt-1">
          Selamat datang kembali, Budi Santoso.
        </p>
      </div>

      <!-- CONTENT GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- SIDEBAR -->
        <aside class="lg:col-span-1">
          <div
            class="bg-white border border-gray-200 rounded-sm shadow-sm"
          >
            <!-- Profile -->
            <div
              class="p-5 border-b border-gray-200 text-center"
            >
              <div
                class="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3"
              >
                <span class="text-xl font-semibold text-blue-600">
                  BS
                </span>
              </div>
              <h2 class="text-sm font-semibold text-gray-800">
                Budi Santoso
              </h2>
              <p class="text-xs text-gray-500 mt-1">XII IPA 1</p>
            </div>

            <!-- Menu -->
            <div class="p-3">
              <!-- Dashboard -->
              <RouterLink
                to="/dashboard"
                class="flex items-center px-3 py-2.5 bg-blue-50 text-blue-600 rounded-sm text-sm font-medium mb-1"
              >
                <svg
                  class="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6"
                  />
                </svg>
                Dashboard
              </RouterLink>

              <!-- Ujian -->
              <RouterLink
                to="/daftar"
                class="flex items-center px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-sm text-sm mb-1"
              >
                <svg
                  class="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a3 3 0 006 0M9 5a3 3 0 016 0M9 12h6m-6 4h6"
                  />
                </svg>
                Daftar Ujian
              </RouterLink>

              <!-- Profil -->
              <a
                href="#"
                class="flex items-center px-3 py-2.5 text-gray-600 hover:bg-gray-50 rounded-sm text-sm mb-1"
              >
                <svg
                  class="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profil Saya
              </a>

              <!-- Logout -->
              <div class="border-t border-gray-200 mt-3 pt-3">
                <RouterLink
                  to="/"
                  class="flex items-center px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-sm text-sm"
                >
                  <svg
                    class="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  Keluar
                </RouterLink>
              </div>
            </div>
          </div>
        </aside>

        <!-- MAIN CONTENT -->
        <main class="lg:col-span-3">
          <!-- STAT CARDS -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <!-- Total Ujian -->
            <div
              class="bg-white border border-gray-200 rounded-sm shadow-sm p-5"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-gray-500 uppercase">
                    Total Ujian
                  </p>
                  <p
                    class="text-2xl font-semibold text-gray-800 mt-1"
                  >
                    12
                  </p>
                </div>
                <div
                  class="w-10 h-10 bg-blue-100 rounded-sm flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a3 3 0 006 0M9 5a3 3 0 016 0"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Sudah Dikerjakan -->
            <div
              class="bg-white border border-gray-200 rounded-sm shadow-sm p-5"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-gray-500 uppercase">Selesai</p>
                  <p
                    class="text-2xl font-semibold text-gray-800 mt-1"
                  >
                    8
                  </p>
                </div>
                <div
                  class="w-10 h-10 bg-green-100 rounded-sm flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Belum Dikerjakan -->
            <div
              class="bg-white border border-gray-200 rounded-sm shadow-sm p-5"
            >
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-gray-500 uppercase">
                    Belum Dikerjakan
                  </p>
                  <p
                    class="text-2xl font-semibold text-gray-800 mt-1"
                  >
                    4
                  </p>
                </div>
                <div
                  class="w-10 h-10 bg-yellow-100 rounded-sm flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- UJIAN TERSEDIA -->
          <div
            class="bg-white border border-gray-200 rounded-sm shadow-sm mb-6"
          >
            <div class="px-5 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <h2
                    class="text-base font-semibold text-gray-800"
                  >
                    Ujian Tersedia
                  </h2>
                  <p class="text-xs text-gray-500 mt-1">
                    Daftar ujian yang dapat Anda kerjakan.
                  </p>
                </div>
                <RouterLink
                  to="/daftar"
                  class="text-sm text-blue-600 hover:text-blue-700"
                >
                  Lihat Semua
                </RouterLink>
              </div>
            </div>

            <!-- Exam List -->
            <div class="divide-y divide-gray-200">
              <!-- Exam 1 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3
                      class="text-sm font-semibold text-gray-800"
                    >
                      Ujian Matematika
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                      Matematika &nbsp;•&nbsp; 40 Soal
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      Durasi: 60 Menit
                    </p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span
                      class="px-2.5 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-sm"
                    >
                      Belum Dikerjakan
                    </span>
                    <RouterLink
                      to="/masuk-sesi-ujian"
                      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-sm"
                    >
                      Mulai Ujian
                    </RouterLink>
                  </div>
                </div>
              </div>

              <!-- Exam 2 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3
                      class="text-sm font-semibold text-gray-800"
                    >
                      Ujian Bahasa Indonesia
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                      Bahasa Indonesia &nbsp;•&nbsp; 30 Soal
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      Durasi: 45 Menit
                    </p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span
                      class="px-2.5 py-1 text-xs bg-yellow-100 text-yellow-700 rounded-sm"
                    >
                      Belum Dikerjakan
                    </span>
                    <RouterLink
                      to="/masuk-sesi-ujian"
                      class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-sm"
                    >
                      Mulai Ujian
                    </RouterLink>
                  </div>
                </div>
              </div>

              <!-- Exam 3 -->
              <div class="p-5">
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3
                      class="text-sm font-semibold text-gray-800"
                    >
                      Ujian Bahasa Inggris
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                      Bahasa Inggris &nbsp;•&nbsp; 35 Soal
                    </p>
                    <p class="text-xs text-gray-500 mt-1">
                      Durasi: 50 Menit
                    </p>
                  </div>
                  <div class="flex items-center gap-3">
                    <span
                      class="px-2.5 py-1 text-xs bg-green-100 text-green-700 rounded-sm"
                    >
                      Selesai
                    </span>
                    <button
                      disabled
                      class="px-4 py-2 bg-gray-100 text-gray-500 text-xs font-medium rounded-sm cursor-not-allowed"
                    >
                      Selesai
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- INFORMASI -->
          <div
            class="bg-white border border-gray-200 rounded-sm shadow-sm"
          >
            <div class="px-5 py-4 border-b border-gray-200">
              <h2 class="text-base font-semibold text-gray-800">
                Informasi
              </h2>
            </div>
            <div class="p-5">
              <div
                class="border-l-4 border-blue-500 bg-blue-50 px-4 py-3"
              >
                <p class="text-sm font-medium text-blue-800">
                  Perhatian
                </p>
                <p class="text-xs text-blue-700 mt-1">
                  Pastikan koneksi internet Anda stabil sebelum
                  memulai ujian. Jangan menutup halaman ujian selama
                  proses pengerjaan.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <!-- FOOTER -->
      <footer class="text-center py-6">
        <p class="text-xs text-gray-500">
          &copy; 2015 Aplikasi Ujian Online. All rights reserved.
        </p>
      </footer>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';
</script>
