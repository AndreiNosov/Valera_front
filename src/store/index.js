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

        chatHistory(state, messages) {
            state.messages = messages
        },

        clearMessages(state) {
            state.messages = [];
        },

        statusSwitch(state, index) {
            state.managementButtons[index].status = !state.managementButtons[index].status;
        },
    },

    actions: {
        async sendAMessageText({commit, state}, messageText) {
            try {
                await axios.post('http://localhost:5000/api/message', { message: messageText });
            } catch (error) {
                console.error('Error when sending a message:', error);
            }
        },

        async sendAMessageVoice({commit, state}, messageVoice) {
            try {
                await axios.post('http://127.0.0.1:8000/chat', { message: messageVoice });
            } catch (error) {
                console.error('Error when sending a message:', error);
            }
        },

        async chatHistory({commit}) {
            try {
                const messages = await axios.get('http://127.0.0.1:8000/chat');

                commit('chatHistory', messages);
            } catch (error) {
                console.error('Error when retrieving chat history:', error);
            }
        },

        async chatClear() {
            try {
                await axios.get('http://127.0.0.1:8000/chat');
            } catch (error) {
                console.error('Error when clearing chat:', error);
            }
        },

        // async skillsList({commit}) {
        //     try {
        //         const skillsList = await axios.get('http://127.0.0.1:8000/chat');
        //
        //         // commit('chatHistory', skillsList);
        //     } catch (error) {
        //         console.error('Error when retrieving chat history:', error);
        //     }
        // }
    },
});

export default store;
