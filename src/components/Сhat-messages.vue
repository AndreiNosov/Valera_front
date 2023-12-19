<template>
  <div class="wrapper">
    <img class="logo" :src="ocrvLogo" alt="Логотип компании ОЦРВ">
    <div class="container">
      <div
          class="message"
          :class="`message-${message.author}`"
          v-for="(message, index) in messages"
          :key="index"
      >
        <div v-if="message.content.text" class="message-text">{{ message.content.text }}</div>
        <div v-if="message.content.audio" class="message-audio">
          <audio class="audio" :src="message.content.audio" controls></audio>
        </div>
        <button
            v-if="message.author === 'bot' && message.content.button"
            class="message-bot-button"
        >
          {{ message.content.button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ocrvLogo from "@/assets/OCRV-Logo.svg"

const store = useStore();
const messages = computed(() => store.getters.getMessages);
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  .logo {
    top: 30%;
    left: 0;
    position: absolute;
    width: auto;
    opacity: 0.3;
  }

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
      z-index: 1;
      width: 75%;
      margin: 4px 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      border-radius: 16px;
      box-shadow: 0 4px 6px var(--box-shadow-color);

      .message-audio {
        height: 50px; // Задайте конкретную высоту или корректируйте по необходимости
        width: 100%;  // Задайте конкретную ширину или корректируйте по необходимости
        display: flex;
        align-items: center;
        justify-content: center;

        .audio {
          width: 100%;  // Аудио-элемент займет всю доступную ширину
          height: 100%; // Аудио-элемент займет всю доступную высоту
        }
      }



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
}

</style>
