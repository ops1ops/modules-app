<template >
	<v-content v-if="isExist">
		<v-card 
			max-width	= "550"
			:style		= "{ border: '4px solid ' + [isChosen ? SELECT_COLOR : 'transparent'] }"
			class			= "mx-auto pb-3 pt-2 mb-1"
			@click		= "isChosen = !isChosen"
			dark 		
		>
			<v-card-title	class="title font-weight-regular">
				<v-text-field
					class	 = "pa-0 ma-0 title font-weight-regular"
					:value = "username"
					v-if	 = "isEditing"
					v-model= "usernameInput"
					clearable
				></v-text-field>
				<span v-else>{{ username }}</span>
				<v-spacer v-show="!isEditing"></v-spacer>
				<span v-show="!isEditing">{{ id }}</span>
			</v-card-title>
			<v-card-text class="body-1">
				<v-content>
					<v-layout row wrap :class="[isEditing ? '' : 'pb-3']">
						<v-flex xs3 class="grey--text text-xs-center">
							FIRST NAME
						</v-flex>
						<v-flex xs9>
							<span v-if="!isEditing">{{ firstname }}</span>
							<v-text-field
								class="pa-0 ma-0"
								absolute
								clearable
								:value="firstname"
								top
								name="name"
								id="id"
								v-model="firstnameInput"
								v-else
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap :class="[isEditing ? '' : 'pb-3']">
						<v-flex xs3 class="grey--text text-xs-center">
							SECOND NAME
						</v-flex>
						<v-flex xs9>
							<span v-if="!isEditing">{{ secondname }}</span>
							<v-text-field
								class="pa-0 ma-0"
								clearable
								absolute
								:value="secondname"
								v-model="secondnameInput"
								top
								name="name"
								id="id"
								v-else
							></v-text-field>
						</v-flex>
					</v-layout>
					<v-layout row wrap class="">
						<v-flex xs3 class="grey--text text-xs-center">
							ADDRESS
						</v-flex>
						<v-flex xs9>
							<span v-if="!isEditing">{{ address }}</span>
							<v-text-field
								class="pa-0 ma-0"
								absolute
								:value="address"
								v-model="addressInput"
								top
								clearable
								name="name"
								id="id"
								v-else
							></v-text-field>
						</v-flex>
					</v-layout>
				</v-content>
			</v-card-text>
			<v-card-actions>
				<v-btn 
					color	 = "error"
					@click = "$emit('delete-user')"	
					v-if	 ="!isEditing"
					left
					large
					round
					outline
				>DELETE</v-btn>
				<v-btn 
					color	 = "info"
					@click ="isEditing = !isEditing; isChosen = true;"	
					v-else
					left
					large
					round
					outline
				>CANCEL</v-btn>
				<v-btn 
					color	="info"
					@click="isEditing = !isEditing; isChosen = true;"
					v-if="!isEditing"
					absolute
					large
					right
					round
					outline
				>EDIT</v-btn>
				<v-btn 
					color	="info"
					@click="onSave($event); isChosen = true;"
					v-else
					absolute
					large
					right
					round
					outline
				>SAVE</v-btn>
			</v-card-actions>
		</v-card>
	</v-content>
</template>

<script>
export default {
	props: [
		'username', 
		'id', 
		'firstname',
		'secondname',
		'address'
	],
	data () {
		return {
			usernameInput: this.username,
			firstnameInput: this.firstname,
			secondnameInput: this.secondname,
			addressInput: this.address,

			SELECT_COLOR: '#00A6F2',
			isChosen: false,
			isExist: true,
			isEditing: false,
		}
	},
	methods: {
		onSave () {
			this.isEditing = !this.isEditing;
			this.$emit('update-profile', {
				username: this.usernameInput,
				firstname: this.firstnameInput,
				secondname: this.secondnameInput,
				address: this.addressInput
			});
		}
	}
}
</script>

<style>
input {
	padding: 0 !important;
}
</style>



// <v-layout row wrap>
// 						<v-flex xs3>
// 							<v-layout
// 								class="grey--text text-xs-center"
// 								column
// 							>
// 								<span class="mb-2">FIRST NAME</span>
// 								<span class="mb-2">SECOND NAME</span>
// 								<span class="mb-2">ADDRESS</span>
// 							</v-layout>
// 						</v-flex>
// 						<v-flex xs9>
// 							<v-layout column>
// 								<span class="mb-2" v-if="!isEditing">{{ firstname }}</span>
// 								<v-text-field
// 									class="pt-0 mb-2"
// 									name="firstname"
// 									v-else
// 								></v-text-field>
// 								<span class="mb-2">field 2</span>
// 								<span class="mb-2">field 3</span>
// 							</v-layout>
// 						</v-flex>
// 					</v-layout>






































