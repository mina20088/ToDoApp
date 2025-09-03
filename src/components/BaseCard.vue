<template>
  <section class="card">
    <slot name="header"></slot>
    <section class="card_body">
      <slot></slot>
    </section>
  </section>
</template>

<script setup></script>

<style scoped>
.card {
  display: flex;
  background-color: white;
  width: 600px;
  border-radius: 2rem;
  flex-direction: column;
}

.card_body {
  padding: 0 2rem;
}

@media screen and (max-width: 576px) {
  .card {
    border-radius: 0;
    width: 100%;
  }
  .card-header {
    border-radius: 0;
  }
}
</style>
