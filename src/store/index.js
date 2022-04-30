import { createStore } from 'vuex'

// Temp store for quiz
export default createStore({
    state: {
        current: [],
        isSubmit:false,
        UserID:'',
    },
    mutations: {
        setCurrent(state, value) {
            state.current = value
        },
    },
    actions: {},
    modules: {}
})
