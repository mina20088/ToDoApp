<template>
  <section class="card">
     <header class="card-header">
       <p>ToDO App</p>
       <p>Stay organized and get things done</p>
     </header>
     <slot></slot>
  </section>
</template>

<script setup>

</script>

<style scoped>
  .card{
    display: flex;
    height: 900px;
    background-color: white;
    width: 600px;
    border-radius: 2rem;
    flex-direction: column;
  }

  .card-header{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-image: linear-gradient(to right, #0263f3, #0070f8, #007dfb, #0089fe, #0b95ff);
  }

  .card-header p{
    color: white;
  }

  @media screen and (max-width:576px) {
    .card{
      border-radius: 0;
    }
  }

</style>
