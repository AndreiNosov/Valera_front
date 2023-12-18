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
        ],
        fileFromTheUser: []
    },

    getters: {
        getMessages(state) {
            return state.messages
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
            state.messages.unshift(message)
        },

        clearMessages(state) {
            state.messages = []
        },

        sendAFile(state, files) {
            state.fileFromTheUser.push(files);
        },

        statusSwitch(state, index) {
            state.managementButtons[index].status = !state.managementButtons[index].status
        }
    },

    actions: {

    }
});

export default store;
