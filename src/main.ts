import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare as faSquareHollow } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faSquare, faSquareHollow)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
