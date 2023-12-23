import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        messages: [],

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

        clearMessage(state) {
            state.messages = [];
        },

        statusSwitch(state, index) {
            state.managementButtons[index].status = !state.managementButtons[index].status;
        },
    },

    actions: {
        async sendMessageToChat({ commit }, message) {
            try {
                const response = await axios.post('http://localhost:3000/api/greet', { message });

                const userMessage = {
                    author: 'user',
                    content: {
                        text: message,
                    },
                };

                const botMessage = {
                    author: 'bot',
                    content: {
                        text: response.data.response,
                    },
                };

                commit('addMessage', userMessage);
                commit('addMessage', botMessage);
            } catch (error) {
                console.error('Ошибка при отправке запроса: ', error);
            }
        },
    },
});

export default store;
