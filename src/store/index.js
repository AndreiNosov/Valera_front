import { createStore } from 'vuex';

const store = createStore({
    state: {
        messages: [
            {
                author: "bot",
                content: {
                    text: "bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ",
                }
            },
            {
                author: "user",
                content: {
                    text:
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user "
                }
            },
            {
                author: "bot",
                content: {
                    text: "bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ",
                }
            },
            {
                author: "user",
                content: {
                    text:
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user "
                }
            },
            {
                author: "bot",
                content: {
                    text: "bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ",
                }
            },
            {
                author: "user",
                content: {
                    text:
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user "
                }
            },
            {
                author: "bot",
                content: {
                    text: "bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ",
                }
            },
            {
                author: "user",
                content: {
                    text:
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user " +
                        "user user user user user user user user user user user user user user user user user user user user user "
                }
            },
            {
                author: "bot",
                content: {
                    text: "bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot bot ",
                    button: "загрузить файл"
                }
            },
            {
                author: "user",
                content: {
                    text: "user user user user user user user user user user user user user user user user user user user user user "
                }
            },
        ],
        managementButtons: [
            {
                title: "button 1",
                content: {}
            },
            {
                title: "button 2",
                content: {}
            },
            {
                title: "button 3",
                content: {}
            },
            {
                title: "button 4",
                content: {}
            }
        ]
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
        getManagementButtons(state) {
            return state.managementButtons
        }
    },
    mutations: {
        addMessages(state, message) {
            state.messages.unshift(message)
        },

        clearMessages(state) {
            state.messages = []
        }
    },
    actions: {

    }
});

export default store;
