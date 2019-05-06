import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id      : 1,
        username: 'user 1',
        fName   : 'alex',
        sName   : 'qwe',
        address : 'mt street 2-123'
      },
      {
        id      : 2,
        username: 'user 2',
        fName   : 'test2',
        sName   : 'test2',
        address : 'ph street 22-3'
      },
      {
        id      : 3,
        username: 'user 3',
        fName   : 'test3',
        sName   : 'test3',
        address : 'ph street 22-3 new street tester 3'
      }
    ]
  },
  getters: {
    users (state) {
      return state.users;
    }
  },
  mutations: {
    DELETE_USER (state, index) {
      // let index = state.users.find(
      //   user => user.id === id
      // );
      state.users.splice(index, 1);
    },
    UPDATE_PROFILE (state, obj) {
      let index = state.users.findIndex(
        user => user.id === obj.id
      );
      state.users[index]["username"] = obj.username;
      state.users[index]["fName"]    = obj.firstname;
      state.users[index]["sName"]    = obj.secondname;
      state.users[index]["address"]  = obj.address;
    }
  },
  actions: {
    // deleteUser ({commit}, id) {
    //   commit('DELETE_USER', id);
    // }
  }
})
