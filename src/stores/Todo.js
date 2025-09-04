import { defineStore } from 'pinia'
import { ref } from 'vue'

const useToDosStore = defineStore('todos', () => {
    const todos = ref([
        { id: 1, todo: 'finish the course', completed: false },
        { id: 2, todo: 'Take Vue Course', completed: true },
        { id: 3, todo: 'Unsubscribe from copilot', completed: false },
    ])

    function addTodo(todo) {
        todos.value.unshift({
            id: todos.value.length + 1,
            todo: todo,
            completed: false,
        })
    }

    return {
        todos,
        addTodo,
    }
})

export default useToDosStore
