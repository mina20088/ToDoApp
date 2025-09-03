<template>
    <header class="card-header">
        <div class="card-header-title">
            <FontAwesomeIcon :icon="faCheckCircle" class="card-check-circle" />
            <p>Todo App</p>
        </div>
        <p class="card-header-slogn">Stay organized and get things done</p>
    </header>
</template>

<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
</script>

<style scoped>
    .card-header {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        background-image: linear-gradient(to right, #0263f3, #0070f8, #007dfb, #0089fe, #0b95ff);
        gap: 12px;
    }

    .card-header-title {
        display: flex;
        align-items: center;
        font-size: 2.5em;
        color: white;
        gap: 2px;
    }

    .card-header-slogn {
        color: white;
        text-align: center;
    }

    @media screen and (max-width: 576px) {
        .card-header {
            border-radius: 0;
        }
    }
</style>
