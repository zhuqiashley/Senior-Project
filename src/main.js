import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Global Styling
import '@/assets/main.css';
createApp(App).use(store).use(router).mount('#app')

