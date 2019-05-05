import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 0,
        username: 'user 1',
        fName: 'alex',
        sName: 'qwe',
        address: 'mt street 2-123'
      },
      {
        id: 1,
        username: 'user 2',
        fName: 'alex',
        sName: 'qwe',
        address: 'mt street 2-123'
      }
    ]
  },
  getters: {
    users (state) {
      return state.users;
    }
  },
  mutations: {
    DELETE_USER (state, id) {
      let index = state.users.find(
        user => user.id === id
      );
      state.users.splice(index, 1);
    },
    UPDATE_USERNAME (state, obj) {
      let index = state.users.findIndex(
        user => user.id === obj.id
      );
      state.users[index]["username"] = obj.username;
    }
  },
  actions: {
    // deleteUser ({commit}, id) {
    //   commit('DELETE_USER', id);
    // }

  }
})
