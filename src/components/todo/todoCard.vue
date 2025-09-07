<template>
    <div class="todo-card" :style="cardBorderStyle(todo)">
        <base-check-box @click="store.changeTodoStatus(todo)" :checked="todo.completed" />
        <div class="todo-card-content">
            <div class="todo-card-text">
                <p :class="{ 'line-throught': todo.completed }">{{ todo.todo }}</p>
                <span>{{ useTimeAgoIntl(todo.createdTime) }}</span>
            </div>
            <div class="todo-card-actions">
                <BaseButton class="todo-card-button todo-card-update">
                    <FontAwesomeIcon :icon="faPen" />
                </BaseButton>
                <BaseButton @click="store.deleteTodo(todo)" class="todo-card-button todo-card-delete">
                    <FontAwesomeIcon :icon="faTrash" />
                </BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
    import useToDosStore from '@/stores/Todo'
    import { useTimeAgoIntl } from '@vueuse/core'
    import BaseCheckBox from '@/components/base/BaseCheckBox.vue'
    import BaseButton from '../base/BaseButton.vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

    defineProps(['todo'])

    const cardBorderStyle = (todo) => {
        return {
            borderBottom: '2px solid #f1f5f9',
            borderTop: '2px solid #f1f5f9',
            borderRight: '2px solid #f1f5f9',
            borderLeft: `4px solid ${todo.completed ? '#51a2ff' : '#ff637e'}`,
        }
    }

    const store = useToDosStore()
</script>

<style scoped>
    .todo-card {
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
        gap: 1rem;
        font-size: 1em;
    }
    .todo-card-content{
        display: flex;
        justify-content: space-between;
        flex-basis: 100%;
    }
    .todo-card-text {
        display: flex;
        flex-direction: column;
    }
    .todo-card-text > p {
        font-weight: bold;
    }
    .todo-card-text > span {
        color: oklch(92.9% 0.013 255.508);
    }
    .todo-card-actions {
        display: flex;
        align-items: center;
        gap: 4px;
    }
    .todo-card-button {
        height: 30px;
        width: 30px;
        cursor: pointer;
    }
    .todo-card-delete {
        background-color: oklch(71.2% 0.194 13.428);
    }
    .todo-card-update {
        background-color: oklch(90.5% 0.182 98.111);
    }
</style>
