<template>
    <section class="card-statisice-panal">
        <div>
            <h2>{{ store.totalTasks }}</h2>
            <p>Total Tasks</p>
        </div>
        <div>
            <h2>{{ store.completedTasks }}</h2>
            <p>Completed Tasks</p>
        </div>
        <div>
            <h2>{{ store.unCompleted }}</h2>
            <p>Remainig Tasks</p>
        </div>
    </section>
</template>

<script setup>
    import useToDosStore from '@/stores/Todo'

    const store = useToDosStore()
</script>

<style scoped>
    .card-statisice-panal {
        background-color: #f8f9fa;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        max-height: 10rem;
        border-radius: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .card-statisice-panal div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .card-statisice-panal div > h2 {
        font-size: 1.5em;
        margin: 0;
        color: #00a6f4;
    }
</style>
