<template>
  <div class="container">
    <img :src="ava" alt="аватарка">
    <div class="buttons">
      <button class="button" v-for="({title, content}, index) in buttons" :key="index">{{ title }}</button>
    </div>
  </div>
</template>

<script setup>
import ava from "@/assets/ava.jpg"
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const buttons = computed(() => store.getters.getManagementButtons);
</script>

<style scoped lang="scss">
.container {
  width: 220px;
  padding: 16px;
  border-radius: 16px;
  background: var(--background-color);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px var(--box-shadow-color);

  img {
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 4px solid var(--main-color);
    box-shadow: 0 4px 6px var(--box-shadow-color);
  }

  .buttons {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .button {
      margin: 4px 0;
      padding: 12px;
      background: var(--main-color);
      color: var(--text-color-white);
      border: 0;
      border-radius: 16px;
      font-size: 16px;
      box-shadow: 0 4px 6px var(--box-shadow-color);

      &:hover {
        transform: scale(1.01);
      }

      &:active {
        transform: scale(0.99);
      }
    }
  }
}
</style>
