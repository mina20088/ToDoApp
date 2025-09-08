<template>
    <div class="todo-card" :style="cardBorderStyle(todo)">
        <base-check-box @click="store.changeTodoStatus(todo)" :checked="todo.completed" />
        <div class="todo-card-content">
            <div v-if="!updatable" class="todo-card-text">
                <p :class="{ 'line-throught': todo.completed }">{{ todo.todo }}</p>
                <span>created: {{ useTimeAgoIntl(todo.createdTime) }}</span>
                <span>updated: {{ useTimeAgoIntl(todo.updated_at) }}</span>
            </div>
            <div v-if="updatable" class="todo-card-edit">
                <base-input v-model="updatableValue" class="todo-card-edit-input" />
                <div class="todo-card-edit-actions">
                    <base-button @click="editTodo(todo.id, updatableValue)">edit</base-button>
                    <base-button @click="closeUpdateTodo">close</base-button>
                </div>
            </div>
            <div v-if="!updatable" class="todo-card-actions">
                <BaseButton @click="updateToDo(todo)" class="todo-card-button todo-card-update">
                    <FontAwesomeIcon :icon="faPen" />
                </BaseButton>
                <BaseButton
                    @click="store.deleteTodo(todo)"
                    class="todo-card-button todo-card-delete"
                >
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
    import BaseButton from '@/components/base/BaseButton.vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
    import BaseInput from '@/components/base/BaseInput.vue'
    import { ref, defineModel } from 'vue'

    const updatable = ref(false)

    const updatableValue = defineModel()

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

    function updateToDo(todo) {
        if (!todo.completed) {
            updatable.value = true
            updatableValue.value = todo.todo
        }
    }

    function editTodo(id, todo) {
        store.editTodo(id, todo)
        updatable.value = false
    }

    function closeUpdateTodo() {
        updatable.value = false
    }
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
    .todo-card-content {
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
    .todo-card-edit {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .todo-card-edit-actions {
        display: flex;
        gap: 3px;
        flex-basis: 40%;
        justify-content: end;
    }
    .todo-card-edit-input {
        flex-basis: 60%;
    }

    .todo-card-edit-actions > button:nth-child(1) {
        background-color: oklch(85.2% 0.199 91.936);
        width: 40%;
    }

    .todo-card-edit-actions > button:nth-child(2) {
        background-color: oklch(81% 0.117 11.638);
        flex-basis: 40%;
    }
</style>
