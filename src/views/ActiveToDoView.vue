<template>
    <div class="todo-wrapper">
        <todo-card v-for="task in completedTasks" :key="task.id" :todo="task" />
    </div>
</template>

<script setup>
    import todoCard from '@/components/todo/todoCard.vue'
    import useToDosStore from '@/stores/Todo'
    import { storeToRefs } from 'pinia'
    import { computed } from 'vue'

    const store = useToDosStore()

    const { todos } = storeToRefs(store)

    const completedTasks = computed(() => todos.value.filter((t) => !t.completed))
</script>

<style scoped></style>
