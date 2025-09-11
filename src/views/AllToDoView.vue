<template>
    <div class="todos-wrapper">
        <transition-group name="all">
            <template v-for="todo in paginatedTodos" :key="todo.id">
                <todo-card v-if="todo" :todo="todo" />
            </template>
        </transition-group>

        <!-- Pagination Component -->
        <vue-awesome-paginate
            v-if="totalPages > 1"
            v-model="currentPage"
            :total-items="todos.length"
            :items-per-page="itemsPerPage"
            :max-pages-shown="5"
            :show-jumping-dots="true"
            @click="onPageChange"
        />
    </div>
</template>

<script setup>
    import useToDosStore from '@/stores/Todo'
    import todoCard from '@/components/todo/todoCard.vue'
    import { storeToRefs } from 'pinia'
    import { ref, computed, watch } from 'vue'

    const store = useToDosStore()
    const { todos } = storeToRefs(store)

    // Pagination state
    const currentPage = ref(1)
    const itemsPerPage = ref(3) // Show 5 todos per page

    const isTransitioning = ref(false)

    // Computed properties for pagination
    const totalPages = computed(() => {
        return Math.ceil(todos.value.length / itemsPerPage.value)
    })

    const paginatedTodos = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value
        const end = start + itemsPerPage.value
        return todos.value.slice(start, end)
    })

    // Handle page change
    const onPageChange = (page) => {
        isTransitioning.value = true
        currentPage.value = page
    }

    // Watch for changes in totalPages and adjust currentPage if needed
    watch(totalPages, (newTotalPages) => {
        if (currentPage.value > newTotalPages && newTotalPages > 0) {
            currentPage.value = newTotalPages
        }
    })
</script>

<style scoped>
    .all-enter-active {
        animation: fadeInLeft 0.6s ease-out;
    }
    .all-leave-active {
        animation: fadeOutRight 0.6s ease-out forwards;
    }
</style>
