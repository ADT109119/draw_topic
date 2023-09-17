import Peer from 'peerjs'
import { createStore } from 'vuex'

export default createStore({
  state: {
    peerjsObj: new Peer()
  },
  getters: {
    getPeerjsObj(state){
      return state.peerjsObj;
    }
  },
  mutations: {
    newPeerObj(state){
      state.peerjsObj = new Peer();
    }
  },
  actions: {
    newPeerObj({ commit }){
      commit("newPeerObj");
    }
  },
  modules: {
  }
})
