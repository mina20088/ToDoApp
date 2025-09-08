import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())


app.use(router)

app.use(VueAwesomePaginate)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
