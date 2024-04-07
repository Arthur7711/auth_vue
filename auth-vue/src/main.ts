import { createApp } from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'primevue/resources/primevue.min.css';
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import InlineMessage from 'primevue/inlinemessage';
import 'primevue/resources/themes/lara-light-indigo/theme.css';

import './assets/main.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(VueAxios, axios);

app.component('ButtonPrime', Button);
app.component('InputPrime', InputText);
app.component('InlineMessagePrime', InlineMessage);

app.mount('#app')
