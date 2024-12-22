// import './assets/main.scss'

// import Components from './components/Components'
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
// Components.forEach((component) => {
//     app.component(component.name, component)
// })
app.use(router)
app.mount('#app')