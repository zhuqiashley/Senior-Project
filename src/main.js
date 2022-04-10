import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//remove before demo, test code for session storage

//import * as Vue from 'vue'
//import VueSessionStorage from 'vue-sessionstorage'
//Vue.use(VueSessionStorage);


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Global Styling
import '@/assets/main.css';
createApp(App).use(store).use(router).mount('#app')

//remove before demo, test code for session storage

//App.use(VueSessionStorage)
//App.mount('#app')
//createApp(App).use(store).use(router).use(VueSessionStorage).mount('#app')

//Notifications 
import Notifications from '@kyvg/vue3-notification'
createApp(App).use(Notifications)