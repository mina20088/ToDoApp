<template>
    <button v-if="title">{{ props.title }}</button>
    <button v-else>
        <slot/>
    </button>
</template>

<script setup>
    const props = defineProps(['title'])
</script>

<style scoped>
    button {
        background-color: transparent;
        border: none;
        border-radius: 2rem;
        color: white;
    }
</style>
