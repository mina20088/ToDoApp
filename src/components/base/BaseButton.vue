<template>
    <button>{{ props.title }}</button>
</template>

<script setup>
    const props = defineProps(['title'])
</script>

<style scoped>
    button {
        background-color: transparent;
        border: none;
        border-radius: 2rem;
        background-image: linear-gradient(to right, #0075cd, #007cc8, #0081c2, #0086ba, #008ab1);
        color: white;
    }
</style>
