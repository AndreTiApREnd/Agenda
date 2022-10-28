
import {createRouter, createWebHistory,} from 'vue-router'

import Home from'@/Pages/Home.vue'

// import Grupo from '@/src/Pages/Grupo.vue'

// import NovoContato from '@/components/Dados/NovoContato.vue'

const routes = [
    { path: '/', name:'Home', component: Home },

    // { path: '/Grupo', name: 'Grupo', component: Grupo },

    // { path: '/NovoContato', name: 'NovoContato', component: NovoContato }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;








