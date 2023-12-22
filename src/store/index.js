    import {createStore} from 'vuex';
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
            ]
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
            addMessages(state, message) {
                state.messages.push(message);
            },

            clearMessages(state) {
                state.messages = [];
            },

            statusSwitch(state, index) {
                state.managementButtons[index].status = !state.managementButtons[index].status;
            },
        },

        actions: {
            async sendMessageToBackend({ commit, state }, message) {
                try {
                    // Отправляем сообщение на бекенд
                    const response = await axios.post('http://127.0.0.1:8000/chat', { message: message.content.text });

                    // Обновляем состояние сразу после отправки сообщения пользователя
                    commit('addMessages', message);

                    // Обновляем состояние с ответом от бота
                    const botMessage = {
                        author: 'bot',
                        content: {
                            text: response.data.response.message,
                        },
                    };
                    commit('addMessages', botMessage);
                } catch (error) {
                    console.error('Error sending message to backend:', error);
                    // Обработка ошибки
                }
            },
        },
    });

    export default store;
