<template>
	<v-content>
		<UserCard
			v-for						="(user, index) in getUsers"
			:key						="index"
			:id							="getUserId(index)"
			:username				="getUsername(index)"
			@delete-user		="deleteUser(getUserId(index))"
			@update-username="updateUsername($event, getUserId(index))"
			
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
		getUserId (index) {
			return this.$store.getters.users[index]["id"];
		},
		deleteUser(id) {
			this.$store.commit('DELETE_USER', id);
		},
		updateUsername (username, id) {
			this.$store.commit('UPDATE_USERNAME', {
				id: id,
				username: username
			})
		}
		
	}
	
}
</script>
