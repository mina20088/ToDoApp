<script setup>
import BaseCard from '@/components/BaseCard.vue'
import BaseInput from './components/BaseInput.vue'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <main>
    <BaseCard>
      <template #header>
        <header class="card-header">
          <div class="card-header-title">
            <FontAwesomeIcon :icon="faCheckCircle" class="card-check-circle" />
            <p>Todo App</p>
          </div>
          <p class="card-header-slogn">Stay organized and get things done</p>
        </header>
      </template>
      <section class="card-body-add-todo">
          <BaseInput type="text" placeholder="What needs to be done?" class="to-do-add-input-feild"/>
      </section>
    </BaseCard>
  </main>
</template>

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
.card-body-add-todo{
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.to-do-add-input-feild{
  flex-basis: 80%;
}
@media screen and (max-width: 576px) {
  .card-header {
    border-radius: 0;
  }
}
</style>
