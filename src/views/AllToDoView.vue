<template>
    <div class="todos-wrapper">
        <div v-for="todo in todos" :key="todo.id" class="card" :style="cardBorderStyle(todo)">
            <base-check-box @click="changeCheck(todo)" :checked="todo.completed" />
        </div>
    </div>
</template>

<script setup>
    import useToDosStore from '@/stores/Todo'

    import { storeToRefs } from 'pinia'

    import BaseCheckBox from '@/components/base/BaseCheckBox.vue'

    const store = useToDosStore()

    const { todos } = storeToRefs(store)

    const cardBorderStyle = (todo) => {
        return {
            borderBottom: '2px solid #f1f5f9',
            borderTop: '2px solid #f1f5f9',
            borderRight: '2px solid #f1f5f9',
            borderLeft: `4px solid ${todo.completed ? '#51a2ff' : '#ff637e'}`,
        }
    }

    function changeCheck(todo) {
        todo.completed = !todo.completed
    }
</script>

<style scoped>
    .todos-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    .card {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: white;
        border-top: 2px solid #f1f5f9;
        border-right: 2px solid #f1f5f9;
        border-radius: 10px;
        padding: 0 1rem;
    }
</style>
