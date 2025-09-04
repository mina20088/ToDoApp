<template>
    <div class="checkbox"  :class="checkBox"></div>
</template>

<script setup>
import { computed } from 'vue';

const prop = defineProps({
    checked: {
        default: false
    }
});

const checkBox = computed(()=> {
    return prop.checked ? "checked" : ''
 })


</script>

<style scoped>
    .checkbox {
        width: 2em;
        height: 2em;
        accent-color: green;
        border: 1px solid gainsboro;
        border-radius: 100%;
    }
    .checked {
        background-color: aquamarine;
    }
</style>
