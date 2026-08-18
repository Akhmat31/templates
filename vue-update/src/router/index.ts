import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('../login_page/LoginPage.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../siswa/pages/DashboardPage.vue'),
  },
  {
    path: '/daftar',
    name: 'daftar',
    component: () => import('../siswa/pages/DaftarUjianPage.vue'),
  },
  {
    path: '/masuk-sesi-ujian',
    name: 'masuk-sesi-ujian',
    component: () => import('../siswa/pages/TokenVerifikasiPage.vue'),
  },
  {
    path: '/sesi-ujian',
    name: 'sesi-ujian',
    component: () => import('../siswa/pages/SesiUjianPage.vue'),
  },
  {
    path: '/hasil-ujian',
    name: 'hasil-ujian',
    component: () => import('../siswa/pages/HasilUjianPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
