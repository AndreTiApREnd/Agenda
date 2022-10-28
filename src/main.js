import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

createApp( App )

    .use ( router )

    .mount( '#app' )




// import Home from '@/Pages/Home.vue'

// import About from '@/Pages/About.vue'


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         {path:'/', name:'Home', component: Home},
//         {path:'/about', name:'about', component: About}
//     ]
// })