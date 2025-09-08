<template>
    <div class="todos-wrapper">
        <todo-card v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
</template>

<script setup>
    import useToDosStore from '@/stores/Todo'

    import todoCard from '@/components/todo/todoCard.vue'

    import { storeToRefs } from 'pinia'

    const store = useToDosStore()

    const { todos } = storeToRefs(store)
</script>

<style scoped>
    .todos-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
</style>
