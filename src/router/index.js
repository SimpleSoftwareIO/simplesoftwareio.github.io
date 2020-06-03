import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'full' },
    component: Home
    },
        {
    path: '/docs/simple-sms',
    name: 'Simple SMS',
    meta: { layout: 'text' },
    component: () => import('../views/SimpleSms.vue')
    },
    {
    path: '/docs/simple-qrcode',
    name: 'Simple QrCode',
    meta: { layout: 'text' },
    component: () => import('../views/SimpleQrCode.vue')
    },
        {
    path: '/docs/simple-qrcode/:language',
    name: 'Simple QrCode',
    meta: { layout: 'text' },
    component: () => import('../views/SimpleQrCode.vue')
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    meta: { layout: 'text' },
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-use',
    name: 'Terms Of Use',
    meta: { layout: 'text' },
    component: () => import('../views/TermsOfUse.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
