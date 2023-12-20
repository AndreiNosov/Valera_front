import {createStore} from 'vuex';

const store = createStore({
    state: {
        messages: [],

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
