import { createWebHistory, createRouter } from "vue-router";

import HomeView from '@/pages/HomeView.vue'
import ProjectView from '@/pages/ProjectView.vue'
import BlogView from '@/pages/BlogView.vue'
import ContactView from '@/pages/ContactView.vue'

const routes = [
    {
        path: '/', 
        name: 'home',
        component: HomeView
    }, 
    {
        path: '/project', 
        component: ProjectView
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView
    }, 
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router