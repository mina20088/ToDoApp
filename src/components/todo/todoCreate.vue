<template>
    <section class="card-body-add-todo">
        <BaseInput
            type="text"
            placeholder="What needs to be done?"
            class="card-body-to-do-add-input-feild"
            v-model="todo"
        />
        <BaseButton title=" + Add Task" class="card-body-to-do-add-button" />
    </section>
</template>

<script setup>
    import BaseInput from '@/components/base/BaseInput.vue'
    import BaseButton from '@/components/base/BaseButton.vue'
    import { ref } from 'vue'
    const todo = ref('todo')
</script>

<style scoped>
    .card-body-add-todo {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        margin-bottom: 2rem;
        gap: 4px;
    }
    .card-body-to-do-add-input-feild {
        flex-basis: 80%;
    }
    .card-body-to-do-add-button {
        flex-basis: 20%;
    }
</style>
