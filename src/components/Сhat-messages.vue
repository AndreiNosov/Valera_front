<template>
  <div class="container">
    <div
        class="message"
        :class="`message-${author}`"
        v-for="({ author, content }, index) in messages"
        :key="index"
    >
      <div class="message-text">{{ content.text }}</div>
      <button
          v-if="author === 'bot' && content.button"
          class="message-bot-button"
      >
        {{ content.button }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const messages = computed(() => store.getters.getMessages);
</script>

<style scoped lang="scss">
.container {
  height: 80vh;
  width: 700px;
  padding: 16px;
  border-radius: 16px;
  background: var(--background-color);
  display: flex;
  flex-direction: column-reverse;
  box-shadow: 0 4px 6px var(--box-shadow-color);
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 4px;
    background-color: transparent;
    border: 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--main-color);
  }

  .message {
    width: 75%;
    margin: 4px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0 4px 6px var(--box-shadow-color);

    &-user {
      margin-left: auto;
      border-bottom-right-radius: 0;
      background: var(--main-color);
      color: var(--text-color-white);
    }

    &-bot {
      border-bottom-left-radius: 0;
      background: var(--background-color);
      border: 2px solid var(--main-color);

      &-button {
        margin-left: 16px;
        padding: 8px;
        border-radius: 8px;
        background: var(--main-color);
        color: var(--text-color-white);
        border: 0;

        &:hover {
          transform: scale(1.01);
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }
  }
}
</style>
