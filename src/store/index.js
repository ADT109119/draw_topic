import Peer from 'peerjs'
import { createStore } from 'vuex'

export default createStore({
  state: {
    peerjsObj: new Peer(),
    data: {}
  },
  getters: {
    getPeerjsObj(state){
      return state.peerjsObj;
    },
    getData(state){
      return state.data;
    }
  },
  mutations: {
    newPeerObj(state){
      state.peerjsObj = new Peer();
    },
    setData(state, val){
      state.data = val;
    }
  },
  actions: {
    newPeerObj({ commit }){
      commit("newPeerObj");
    },
    setData({ commit }, data){
      commit("setData", data)
    }
  },
  modules: {
  }
})
