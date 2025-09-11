<template>
    <section>
        <div class="card-body-add-todo">
            <BaseInput
                type="text"
                placeholder="What needs to be done?"
                class="card-body-to-do-add-input-feild"
                v-model="todo"
            />
            <BaseButton @click="addTodo" title=" + Add Task" class="card-body-to-do-add-button" />
        </div>

        <span ref="error"></span>
    </section>
</template>

<script setup>
    import BaseInput from '@/components/base/BaseInput.vue'

    import BaseButton from '@/components/base/BaseButton.vue'

    import { ref, useTemplateRef, watch } from 'vue'

    import useToDosStore from '@/stores/Todo'

    const todo = ref('todo')

    const store = useToDosStore()

    const error = useTemplateRef('error')

    const isError = ref(false);

    watch(todo, (newValue) => {
        newValue == ''
            ? (error.value.innerText = 'please add a todo')
            : (error.value.innerText = '')
        error.value.style.color = 'red'

        isError.value = true

    })

    function addTodo() {
        if(!isError.value){
            return store.addTodo(todo.value)
        }
        error.value.innerText = 'please add a todo'
        return;

    }
</script>

<style scoped>
    .card-body-add-todo {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 1rem;
        gap: 4px;
    }
    .card-body-to-do-add-input-feild {
        flex-basis: 80%;
    }
    .card-body-to-do-add-button {
        flex-basis: 20%;
    }
    button {
        background-image: linear-gradient(to right, #0075cd, #007cc8, #0081c2, #0086ba, #008ab1);
    }

    @media screen and (max-width:412px){
        .card-body-to-do-add-input-feild{
            flex-basis: 70%;
        }
        .card-body-to-do-add-button{
            flex-basis: 30%;
        }
    }
</style>
