import { defineStore } from 'pinia'
import { ref } from 'vue'

const useToDosStore = defineStore('todos', () => {
    let todos = ref([
        { id: 1, todo: 'finish the course', completed: false,createdTime: 1694102400000 },
        { id: 2, todo: 'Take Vue Course', completed: true, createdTime:1694102400000  },
        { id: 3, todo: 'Unsubscribe from copilot', completed: false ,createdTime:1694102400000 },
    ])

    console.log(todos.value)

    function addTodo(todo) {
        todos.value.unshift({
            id: todos.value.length + 1,
            todo: todo,
            completed: false,
            createdTime: Date.now(),
        })
    }

    function changeTodoStatus(todo){
        todo.completed = !todo.completed
    }

    function deleteTodo(todo)
    {
        todos.value = todos.value.filter((t)=> t.id !== todo.id )
    }

    return {
        todos,
        addTodo,
        deleteTodo,
        changeTodoStatus
    }
})

export default useToDosStore
