<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- HEADER -->
    <header class="bg-blue-600 shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="min-h-16 py-3 flex items-center justify-between">
          <!-- INFORMASI UJIAN -->
          <div class="flex items-center">
            <div
              class="w-9 h-9 bg-white rounded-sm flex items-center justify-center mr-3"
            >
              <span class="text-blue-600 font-bold">U</span>
            </div>
            <div>
              <h1 class="text-white font-semibold text-sm sm:text-base">
                Ujian Matematika
              </h1>
              <p class="text-blue-200 text-xs">
                Budi Santoso &nbsp;|&nbsp; XII IPA 1
              </p>
            </div>
          </div>

          <!-- TIMER -->
          <div class="flex items-center">
            <div class="text-right mr-3 hidden sm:block">
              <p class="text-blue-200 text-xs">Sisa Waktu</p>
              <p class="text-white text-xs">Waktu pengerjaan</p>
            </div>
            <div
              class="bg-blue-700 border border-blue-500 px-3 sm:px-4 py-2 rounded-sm"
            >
              <div class="flex items-center">
                <svg
                  class="w-5 h-5 text-white mr-2"
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
                <span class="text-white font-bold text-lg tracking-wider">
                  {{ formattedTime }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN -->
    <main class="max-w-7xl mx-auto px-4 py-5">
      <!-- INFORMASI ATAS -->
      <div
        class="bg-white border border-gray-200 rounded-sm shadow-sm px-5 py-4 mb-5"
      >
        <div
          class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          <div>
            <p class="text-xs text-gray-500">Mata Pelajaran</p>
            <h2 class="text-base font-semibold text-gray-800">Matematika</h2>
          </div>
          <div>
            <p class="text-xs text-gray-500">Progress Pengerjaan</p>
            <div class="flex items-center mt-1">
              <div class="w-32 h-2 bg-gray-200 rounded-full mr-3">
                <div
                  class="h-2 bg-blue-600 rounded-full transition-all"
                  :style="{ width: progressPercentage + '%' }"
                ></div>
              </div>
              <span class="text-xs font-medium text-gray-700">
                {{ answeredCount }} / {{ questions.length }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- LAYOUT UJIAN -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <!-- BAGIAN SOAL -->
        <section class="lg:col-span-3">
          <div class="bg-white border border-gray-200 rounded-sm shadow-sm">
            <!-- HEADER SOAL -->
            <div class="px-5 py-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-gray-500">Soal Nomor</p>
                  <h3 class="text-lg font-semibold text-gray-800">
                    {{ currentQuestion + 1 }}
                  </h3>
                </div>
                <span
                  class="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-sm"
                >
                  Pilihan Ganda
                </span>
              </div>
            </div>

            <!-- ISI SOAL -->
            <div class="p-5 sm:p-7">
              <div class="mb-7">
                <p
                  class="text-base sm:text-lg leading-7 text-gray-800"
                >
                  {{ questions[currentQuestion].question }}
                </p>
              </div>

              <!-- PILIHAN -->
              <div class="space-y-3">
                <label
                  v-for="option in questions[currentQuestion].options"
                  :key="option.key"
                  class="block cursor-pointer"
                  @click="selectAnswer(option.key)"
                >
                  <div
                    class="border rounded-sm px-4 py-4 transition cursor-pointer"
                    :class="
                      answers[currentQuestion] === option.key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 hover:bg-blue-50 hover:border-blue-400'
                    "
                  >
                    <div class="flex items-center">
                      <span
                        class="w-8 h-8 border rounded-full flex items-center justify-center text-sm font-semibold mr-4"
                        :class="
                          answers[currentQuestion] === option.key
                            ? 'border-blue-500 bg-blue-600 text-white'
                            : 'border-gray-300'
                        "
                      >
                        {{ option.key }}
                      </span>
                      <span class="text-sm">{{ option.value }}</span>
                    </div>
                  </div>
                </label>
              </div>

              <!-- NAVIGASI -->
              <div
                class="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-gray-200 mt-8 pt-5"
              >
                <button
                  :disabled="currentQuestion === 0"
                  class="px-5 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-50 text-sm rounded-sm"
                  :class="{
                    'opacity-50 cursor-not-allowed': currentQuestion === 0,
                  }"
                  @click="previousQuestion"
                >
                  ← Sebelumnya
                </button>
                <button
                  class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-sm"
                  @click="nextQuestion"
                >
                  {{
                    currentQuestion === questions.length - 1
                      ? 'Soal Terakhir'
                      : 'Berikutnya →'
                  }}
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- DAFTAR NOMOR SOAL -->
        <aside class="lg:col-span-1">
          <div
            class="bg-white border border-gray-200 rounded-sm shadow-sm lg:sticky lg:top-5"
          >
            <!-- HEADER -->
            <div class="px-5 py-4 border-b border-gray-200">
              <h3 class="text-sm font-semibold text-gray-800">Daftar Soal</h3>
              <p class="text-xs text-gray-500 mt-1">
                Pilih nomor untuk berpindah soal.
              </p>
            </div>

            <!-- NOMOR -->
            <div class="p-4">
              <div
                class="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2"
              >
                <button
                  v-for="(q, index) in questions"
                  :key="index"
                  class="w-full h-9 text-xs font-medium rounded-sm border transition"
                  :class="getQuestionButtonClass(index)"
                  @click="goToQuestion(index)"
                >
                  {{ index + 1 }}
                </button>
              </div>

              <!-- LEGEND -->
              <div class="border-t border-gray-200 mt-5 pt-4 space-y-2">
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-blue-600 rounded-sm mr-2"></span>
                  <span class="text-xs text-gray-500">Soal aktif</span>
                </div>
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-green-500 rounded-sm mr-2"></span>
                  <span class="text-xs text-gray-500">Sudah dijawab</span>
                </div>
                <div class="flex items-center">
                  <span
                    class="w-4 h-4 bg-gray-100 border border-gray-300 rounded-sm mr-2"
                  ></span>
                  <span class="text-xs text-gray-500">Belum dijawab</span>
                </div>
              </div>

              <!-- SELESAI -->
              <button
                class="w-full mt-5 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-sm"
                @click="finishExam"
              >
                Selesai Ujian
              </button>
            </div>
          </div>
        </aside>
      </div>

      <!-- FOOTER -->
      <footer class="text-center py-7">
        <p class="text-xs text-gray-500">Aplikasi Ujian Online &copy; 2015</p>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { examQuestions } from '../data/questions';

const router = useRouter();
const questions = examQuestions;
const answers = ref<Record<number, string>>({});
const currentQuestion = ref(0);
const remainingTime = ref(60 * 60);
let timerInterval: ReturnType<typeof setInterval> | null = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(remainingTime.value / 60);
  const seconds = remainingTime.value % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

const answeredCount = computed(() => Object.keys(answers.value).length);

const progressPercentage = computed(() =>
  (answeredCount.value / questions.length) * 100,
);

function selectAnswer(key: string) {
  answers.value[currentQuestion.value] = key;
}

function nextQuestion() {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
  }
}

function previousQuestion() {
  if (currentQuestion.value > 0) {
    currentQuestion.value--;
  }
}

function goToQuestion(index: number) {
  currentQuestion.value = index;
}

function getQuestionButtonClass(index: number): string {
  if (index === currentQuestion.value) {
    return 'bg-blue-600 text-white border-blue-600';
  }
  if (answers.value[index]) {
    return 'bg-green-500 text-white border-green-500';
  }
  return 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-blue-50 hover:border-blue-400';
}

function finishExam() {
  const answered = Object.keys(answers.value).length;
  const total = questions.length;
  const confirmed = window.confirm(
    `Anda telah menjawab ${answered} dari ${total} soal.\n\nApakah Anda yakin ingin mengakhiri ujian?`,
  );
  if (confirmed) {
    if (timerInterval) clearInterval(timerInterval);
    router.push('/hasil-ujian');
  }
}

function updateTimer() {
  if (remainingTime.value <= 0) {
    if (timerInterval) clearInterval(timerInterval);
    finishExam();
    return;
  }
  remainingTime.value--;
}

onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000);
});

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval);
});
</script>
