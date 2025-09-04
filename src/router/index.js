import ActiveToDoView from '@/views/ActiveToDoView.vue'
import AllToDOView from '@/views/AllToDoView.vue'
import CompletedToDoView from '@/views/CompletedToDoView.vue'
import TodoView from '@/views/TodoView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: TodoView,
            children: [
                {
                    path: '/',
                    component: AllToDOView,
                },
                {
                    path: 'active',
                    component: ActiveToDoView,
                },
                {
                    path: 'completed',
                    component: CompletedToDoView,
                },
            ],
        },
    ],
})

export default router
