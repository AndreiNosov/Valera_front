<template>
  <div>
    <button @click="toggleRecording">{{ recording ? 'Stop Recording' : 'Start Recording' }}</button>
  </div>
</template>

<script>
import { ref, onUnmounted } from 'vue';

export default {
  name: 'VoiceRecorder',
  setup() {
    const recording = ref(false);  // Переменная для отслеживания состояния записи
    const audioChunks = ref([]);   // Массив для хранения частей аудио

    let mediaRecorder;  // Объект MediaRecorder для записи аудио
    let audioStream;    // Объект для отслеживания аудиопотока

    const startRecording = async () => {
      try {
        audioChunks.value = [];
        audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(audioStream);

        // Обработчик события при получении данных аудио
        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.value.push(e.data);
          }
        };

        // Обработчик события при завершении записи
        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' });
          const audioUrl = URL.createObjectURL(audioBlob);
          console.log('Recording complete:', audioUrl);
        };

        mediaRecorder.start();  // Начать запись
        recording.value = true; // Установить флаг записи в true
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    };

    const stopRecording = () => {
      if (mediaRecorder && recording.value) {
        mediaRecorder.stop();
        audioStream.getTracks().forEach((track) => track.stop());

        const audioBlob = new Blob(audioChunks.value, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);

        const audioMessage = {
          author: 'user',
          content: {
            audio: audioUrl,
          },
        };

        // Вызываем мутацию для добавления аудиосообщения в массив messages
        store.commit('addMessages', audioMessage);

        recording.value = false;
      }
    };

    const toggleRecording = () => {
      if (recording.value) {
        stopRecording();
      } else {
        startRecording();
      }
    };

    onUnmounted(() => {
      stopRecording();  // Вызывается при удалении компонента (чтобы избежать утечек ресурсов)
    });

    return {
      recording,
      toggleRecording,
    };
  },
};
</script>

<style scoped>
/* Your component styles here */
</style>
