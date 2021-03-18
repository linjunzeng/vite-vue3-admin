import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            aa: '123'
        }
    },
    actions: {
        changeBB(state, aa){
            state.commit('changeAA', aa)
        }
    },
    mutations: {
        changeAA(state, aa){
            state.aa = aa
            setTimeout(() => {
                console.log(12);
                
            }, 2000)
        }
    }
})

export default store