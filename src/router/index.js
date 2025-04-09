import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ReviewDetails from '@/components/ReviewDetails.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/review/:id', name: 'ReviewDetails', component: ReviewDetails },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
