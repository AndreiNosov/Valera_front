import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        messages: [
            {
                author: 'user',
                content: {
                    text: 'user user user user user user user user user user user user user user user user user user ',
                },
            },
            {
                author: 'bot',
                content: {
                    text: 'bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ',
                },
            },
        ],
        managementButtons: [
            {
                title: 'Навык 1',
                status: true,
            },
            {
                title: 'Навык 2',
                status: false,
            },
            {
                title: 'Навык 3',
                status: false,
            },
        ],
    },

    getters: {
        getMessages(state) {
            return state.messages;
        },

        getManagementButtons(state) {
            return state.managementButtons;
        },

        getStatusSwitch(state, index) {
            return state.managementButtons[index].status;
        },
    },

    mutations: {
        addMessage(state, message) {
            state.messages.push(message);
        },

        chatHistory(state, messages) {
            state.messages = messages;
        },

        clearMessages(state) {
            state.messages = [];
        },

        statusSwitch(state, index) {
            state.managementButtons[index].status = !state.managementButtons[index].status;
        },
    },

    actions: {
        async sendMessageToChat({ commit }, message) {
            const backendUrl = 'http://localhost:3000/api/greet';

            try {
                const response = await axios.post(backendUrl, { message });

                const userMessage = {
                    author: 'user',
                    content: {
                        text: message,
                    },
                };

                const botMessage = {
                    author: 'bot',
                    content: {
                        text: response.data.response,  // Используем ответ от сервера
                    },
                };

                // Добавляем сообщения в стор
                commit('addMessage', userMessage);
                commit('addMessage', botMessage);
            } catch (error) {
                console.error('Ошибка при отправке запроса:', error);
            }
        },

        // async sendAMessageText({ commit, state }, messageText) {
        //     try {
        //         // Отправляем сообщение на бекенд
        //         const response = await axios.post('http://127.0.0.1:8000/chat', { message: messageText });
        //
        //         const userMessage = {
        //             author: 'user',
        //             content: {
        //                 text: messageText,
        //             },
        //         };
        //
        //         const botMessage = {
        //             author: 'bot',
        //             content: {
        //                 text: response.data.response,  // Используем ответ от сервера
        //             },
        //         };
        //
        //         // Добавляем сообщения в стор
        //         commit('addMessage', userMessage);
        //         commit('addMessage', botMessage);
        //     } catch (error) {
        //         console.error('Ошибка при отправке сообщения:', error);
        //     }
        // },
    },
});

export default store;
