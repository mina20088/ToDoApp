import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useToDosStore = defineStore('todos', () => {
    let todos = ref([
        { id: 1, todo: 'finish the course', completed: false, createdTime: 1694102400000 },
        { id: 2, todo: 'Take Vue Course', completed: true, createdTime: 1694102400000 },
        { id: 3, todo: 'Unsubscribe from copilot', completed: false, createdTime: 1694102400000 },
    ])

    const totalTasks = computed(() => {
        return todos.value.length
    })

    const completedTasks = computed(() => {
        return todos.value.filter((t) => t.completed).length
    })

    const unCompleted = computed(() => {
        return todos.value.filter((t) => !t.completed).length
    })

    function addTodo(todo) {
        todos.value.unshift({
            id: todos.value.length + 1,
            todo: todo,
            completed: false,
            createdTime: Date.now(),
        })
    }

    function changeTodoStatus(todo) {
        todo.completed = !todo.completed
    }

    function editTodo(id, updatablevalue) {
        const tod = todos.value.find((t) => t.id === id)
        tod.todo = updatablevalue
        tod.updated_at = Date.now()
    }

    function deleteTodo(todo) {
        todos.value = todos.value.filter((t) => t.id !== todo.id)
    }

    return {
        todos,
        totalTasks,
        completedTasks,
        unCompleted,
        addTodo,
        editTodo,
        deleteTodo,
        changeTodoStatus,
    }
})

export default useToDosStore
