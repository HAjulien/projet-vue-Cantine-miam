export default{
    state: () => ({
        showHeader: 'true',
        lastScrollPosition: 0,
        scrollOffset: 40,
    }),
    getters: {
        showHeader: (state) => state.showHeader,
    },
    mutations: {
        SET_SHOWHEADER(state, bool) {
            state.showHeader = bool
        }
    },
    actions: {},

}