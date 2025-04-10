import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue';
import ReviewDetails from '@/components/ReviewDetails.vue'
import NotFound from '@/components/NotFound.vue'
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/review/:slug', name: 'ReviewDetails', component: ReviewDetails },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
