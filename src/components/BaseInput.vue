<template>
    <input :type="props.type" :placeholder="props.placeholder"/>
</template>

<script setup>
   const props = defineProps(['type','placeholder']);
</script>

<style scoped>
   input{
     padding: 1rem;
     border-radius: 2rem;
     border: 1px solid gainsboro;
   }

   input:focus{
     outline: none;
     border: 1px solid  gainsboro ;
     box-shadow: inset 0px 0px 0px 1px #00c89c;
   }
</style>
