<template>
    <div class="todo-wrapper">
        <todo-card v-for="task in paginatedActiveTasks" :key="task.id" :todo="task" />

        <!-- Pagination Component -->
        <vue-awesome-paginate
            v-if="totalPages > 1"
            v-model="currentPage"
            :total-items="activeTasks.length"
            :items-per-page="itemsPerPage"
            :max-pages-shown="5"
            :show-ending-buttons="true"
            :show-jumping-dots="true"
            @click="onPageChange"
        />
    </div>
</template>

<script setup>
    import todoCard from '@/components/todo/todoCard.vue'
    import useToDosStore from '@/stores/Todo'
    import { storeToRefs } from 'pinia'
    import { computed, ref, watch } from 'vue'

    const store = useToDosStore()
    const { todos } = storeToRefs(store)

    // Pagination state
    const currentPage = ref(1)
    const itemsPerPage = ref(3) // Show 5 todos per page

    const activeTasks = computed(() => todos.value.filter((t) => !t.completed))

    // Computed properties for pagination
    const totalPages = computed(() => {
        return Math.ceil(activeTasks.value.length / itemsPerPage.value)
    })

    const paginatedActiveTasks = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value
        const end = start + itemsPerPage.value
        return activeTasks.value.slice(start, end)
    })

    // Handle page change
    const onPageChange = (page) => {
        currentPage.value = page
    }

    // Watch for changes in totalPages and adjust currentPage if needed
    watch(totalPages, (newTotalPages) => {
        if (currentPage.value > newTotalPages && newTotalPages > 0) {
            currentPage.value = newTotalPages
        }
    })
</script>

<style scoped></style>
