export default{
    state: () => ({
        dark: 'false'
    }),
    getters: {
        dark: (state) => state.dark,
    },
    mutations: {
        SET_DARK(state, bool) {
            state.dark = bool
        }
    },
    actions: {},

}