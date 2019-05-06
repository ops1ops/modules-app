<template>
  <v-content>
    <UserCard
      v-for           ="(user, index) in getUsers"
      :key            ="index"
      :id             ="getUserId(index)"
      :username       ="getUsername(index)"
      :firstname      ="getFirstname(index)"
      :secondname     ="getSecondname(index)"
      :address        ="getAddress(index)"
      @delete-user    ="deleteUser(index)"
      @update-profile ="updateProfile($event, getUserId(index))"
    ></UserCard>
  </v-content>
</template>

<script>
import UserCard from './UserCard.vue'
import store from '../store'

export default {
  components: {
    UserCard	
  },
  store,
  computed: {
    getUsers () {
      return this.$store.getters.users;
    }
  },
  methods: {
    getUsername (index) {
      return this.$store.getters.users[index]["username"];
    },
    getFirstname (index) {
      return this.$store.getters.users[index]["fName"];
    },
    getSecondname (index) {
      return this.$store.getters.users[index]["sName"];
    },
    getAddress (index) {
      return this.$store.getters.users[index]["address"];
    },
    getUserId (index) {
      return this.$store.getters.users[index]["id"];
    },
    deleteUser(index) {
      this.$store.commit('DELETE_USER', index);
    },
    updateProfile (userObject, id) {
      console.log(userObject);
      this.$store.commit('UPDATE_PROFILE', {
        id,
        username    : userObject.username,
        firstname   : userObject.firstname,
        secondname  : userObject.secondname,
        address     : userObject.address
      });
    }
  }
}
</script>
