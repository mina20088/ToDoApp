<template>
    <BaseCard>
        <template #header>
            <todoHeader />
        </template>
        <todoCreate />
        <section class="card-navigation">
            <RouterLink to="/">all</RouterLink>
            <RouterLink to="/active">active</RouterLink>
            <RouterLink to="/completed">completed</RouterLink>
        </section>
        <div id="todo-view">
            <hr />
        </div>
        <todoStatisicsPanal />
        <div>
            <ProgressBar :progress="30"/>
        </div>
        <section>
            <RouterView />
        </section>
    </BaseCard>
</template>

<script setup>
    import BaseCard from '@/components/base/BaseCard.vue'
    import todoHeader from '@/components/todo/todoHeader.vue'
    import todoCreate from '@/components/todo/todoCreate.vue'
    import todoStatisicsPanal from '@/components/todo/todoStatisicsPanal.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
</script>

<style scoped>
    .card-navigation {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    a {
        border: 1px solid gainsboro;
        padding: 0.9rem;
        border-radius: 3rem;
        flex-basis: 14%;
        text-align: center;
        text-decoration: none;
    }
    .router-link-exact-active {
        background-image: linear-gradient(to right, #0075cd, #007cc8, #0081c2, #0086ba, #008ab1);
        color: white;
    }
        hr {
        border: none;
        border-top: 2px solid #3498db;
    }
</style>
