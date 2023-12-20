import {createStore} from 'vuex';

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
                title: "Навык 1",
                status: true
            },
            {
                title: "Навык 2",
                status: false
            },
            {
                title: "Навык 3",
                status: false
            },
        ]
    },

    getters: {
        getMessages(state) {
            return state.messages.reverse()
        },

        getManagementButtons(state) {
            return state.managementButtons
        },

        getStatusSwitch(state, index) {
            return state.managementButtons[index].status
        }
    },

    mutations: {
        addMessages(state, message) {
            state.messages.push(message);
        },

        clearMessages(state) {
            state.messages = []
        },

        statusSwitch(state, index) {
            state.managementButtons[index].status = !state.managementButtons[index].status
        }
    },

    actions: {}
});

export default store;
