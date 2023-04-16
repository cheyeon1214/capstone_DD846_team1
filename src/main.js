import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
app.use(router)
app.use(vuetify)
// app.config.globalProperties.$axios = axios;  // [axios / http 통신] , 전역 설정
app.provide('$axios', axios);   // axios 전역 설정 2번째 방법

app.mount('#app')
