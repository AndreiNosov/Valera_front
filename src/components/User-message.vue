<template>
  <div class="message">
    <div v-if="props.content.text" class="message-text">{{ content.text }}</div>

    <div v-if="props.content.audio" class="message-audio">
      <audio class="audio" :src="content.audio" controls></audio>
    </div>

    <div v-if="props.content.file" class="message-file">
      <button class="message-download-button" @click.prevent="downloadFile">
        <svg-icon type="mdi" :path="mdiFile"></svg-icon>
      </button>
      <span class="name-file">{{ content.file.name }}</span>
      <span class="size-file">{{ formatFileSize(content.file.size) }}</span>
      <a :href="content.file.url" :download="content.file.name" ref="downloadLink"></a>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiFile } from '@mdi/js';
import { defineProps, ref, onMounted, watch } from "vue";

const props = defineProps({
  content: {
    type: Object
  }
})

const content = ref(props.content);
const downloadLink = ref(null);

function formatFileSize(size) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let unitIndex = 0;
  while (size > 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

const downloadFile = () => {
  const link = downloadLink.value;
  if (link) {
    link.click();
  }
};

onMounted(() => {
  watch(() => props.content, (newContent) => {
    content.value = newContent;
  })

  downloadLink.value = $refs.downloadLink;
});
</script>

<style scoped lang="scss">
.message {
  position: relative;
  z-index: 2;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 4px 6px var(--box-shadow-color);
  margin-left: auto;
  border-radius: 16px;
  border-bottom-right-radius: 0;
  background: var(--main-color);
  color: var(--text-color-white);

  &-audio {
    height: 50px; // Задайте конкретную высоту или корректируйте по необходимости
    width: 100%; // Задайте конкретную ширину или корректируйте по необходимости
    display: flex;
    align-items: center;
    justify-content: center;

    .audio {
      width: 100%; // Аудио-элемент займет всю доступную ширину
      height: 100%; // Аудио-элемент займет всю доступную высоту
    }
  }

  &-file {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .download-file {
      margin-right: 16px;
    }

    .size-file {
      margin-left: 16px;
    }

    button {
      width: 64px;
      height: 64px;
      border: 0;
      border-radius: 50%;
      margin: 0 !important;
    }

    .message-download-button {
      margin-bottom: 8px;
    }
  }
}
</style>
