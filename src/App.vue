<template>
  <div class="container-page">
    <div class="container-chat">
      <div
          class="massages"
          :class="'massages-' + author"
          v-for="({ author, text, activeContent }, index) in chatMessages"
          :key="index"
      >
        <div class="text-massage">{{ text }}</div>
        <button
            v-if="activeContent.button"
            class="activeContent"
            @click="openFileInput"
        >{{ activeContent.button }}</button>
      </div>
    </div>
    <div class="wrapper">
      <button class="button-clear" @click="clearMessage">
        <svg-icon type="mdi" :path="mdiDeleteForever"></svg-icon>
      </button>
      <div class="container-input" @click="focusInput">
        <input
            class="input"
            :placeholder="placeholder"
            v-model="textInput"
            @keyup.enter="addMessage"
        />
      </div>
      <button class="button-push" @click="addMessage">
        <svg-icon type="mdi" :path="mdiArrowRightCircle"></svg-icon>
      </button>
    </div>


    <div class="test">
      <!-- Отображение выбранных файлов -->
      <div v-if="selectedFileName.length">
        <div v-for="(file, index) in selectedFileName" :key="index">
          {{ file.name }} ({{ formatFileSize(file.size) }})
        </div>
      </div>

      <!-- Скрытый input для загрузки файлов -->
      <input
          type="file"
          ref="fileInput"
          class="hidden d-none"
          @change="handleFile"
          :accept="acceptTypes"
      />
    </div>

  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiDeleteForever } from '@mdi/js';
import { mdiArrowRightCircle } from '@mdi/js';
import { ref, onMounted, defineProps } from "vue";

defineProps({
  skill: {
    type: String,
    default: "-"
  },
  acceptTypes: {
    type: String,
    default: ""
  }
});

const chatMessages = ref([
  {
    author: "user",
    text: "test user test user test user test user test user test user test user ",
    activeContent: {}
  },
  {
    author: "bot",
    text: "test bot test bot test bot test bot test bot test bot test bot test bot ",
    activeContent: {
      button: "Загрузить файл"
    }
  }
]);

const placeholder = ref("Введите вопрос");
const textInput = ref("");
const isInputFocused = ref(false);
const fileInput = ref(null);
const selectedFileName = ref([]);

function focusInput() {
  isInputFocused.value = true;
  const input = document.querySelector(".input");
  if (input) {
    input.focus();
  }
}

function addMessage() {
  if (textInput.value.length !== 0) {
    chatMessages.value.push({
      author: "user",
      text: textInput.value,
      activeContent: {}
    });
  }
  textInput.value = "";
}

function clearMessage() {
  chatMessages.value = [];
}

function openFileInput() {
  fileInput.value.click();
}

function handleFile() {
  const files = fileInput.value.files;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    addFile(file);
  }
}

function addFile(file) {
  if (file) {
    if (file.size > MAX_FILE_SIZE_BYTES) {
      alert("Размер файла превышает максимально допустимый размер.");
    } else {
      selectedFileName.value.push(file);
    }
  }
}

function formatFileSize(size) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let unitIndex = 0;
  while (size > 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

const MAX_FILE_SIZE_BYTES = 1024 * 1024 * 5; // 5 МБ

onMounted(() => {
  focusInput();
});
</script>

<style lang="scss">
body {
  background: #0B0F19;
}

#app {
  display: flex;
}

.container-page {
  margin: 0 auto;
  width: 1200px;

  .container-chat {
    border: 1px solid #374151;
    height: 500px;
    border-radius: 12px;
    padding: 16px;
    background: #1F2937;
    overflow: hidden;

    overflow-y: auto; // Добавлено для обеспечения вертикального скролла

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
      background-color: #374151;
    }

    .massages {
      justify-content: space-between;
      border: 1px solid #374151;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      padding: 20px;
      color: #F9FFFF;
      word-wrap: break-word;

      .text-massage {
        width: 100%;
      }

      &-user {
        background: #374151;
        border-radius: 16px 16px 0 16px;
      }

      &-bot {
        background: #111827;
        border-radius: 16px 16px 16px 0;
      }

      button {
        padding: 4px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        border-radius: 8px;
        border: 0;
        background: #3D4756;
        color: #F9FFFF;

        &:hover {
          background: #4f5e72;
        }

        &:active {
          transform: scale(0.99);
        }
      }
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 8px;

    .button-clear {
      color: #F9FFFF;
      padding: 10.5px 12px;
      margin-right: 8px;
      border-radius: 12px;
      border: 1px solid #374151;
      background: #1F2937;

      &:active {
        transform: scale(0.97);
      }

      &:hover {
        color: #be0e0e;
      }
    }

    .button-push {
      color: #F9FFFF;
      padding: 10.5px 12px;
      margin-left: 8px;
      border-radius: 12px;
      border: 1px solid #374151;
      background: #1F2937;

      &:active {
        transform: scale(0.97);
      }

      &:hover {
        color: #1d8600;
      }
    }

    .container-input {
      border: 1px solid #374151;
      border-radius: 12px;
      padding: 16px;
      background: #1F2937;
      width: auto;

      input {
        color: #F9FFFF;
        border: 0;
        width: 1046px;
        background: #1F2937;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .test {
    display: none;
  }
}
</style>
