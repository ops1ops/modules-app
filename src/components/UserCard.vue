<template >
	<v-content v-if="isExist">
		<v-card 
			max-width	= "500"
			:style		= "{ border: '4px solid ' + [isChosen ? SELECT_COLOR : 'transparent'] }"
			class			= "mx-auto pb-3 pt-2 mb-1"
			@click		= "isChosen = !isChosen"
			dark 		
		>
			<v-card-title	class="title font-weight-regular">
				<v-text-field
					label="label"
					:value="username"
					@input="$emit('update-username', $event)"
				></v-text-field>
				<v-spacer></v-spacer>
				<span>{{ id }}</span>
			</v-card-title>
			<v-card-text class="body-1">
				<v-content>
					<v-layout row wrap>
						<v-flex xs3>
							<v-layout
								class="grey--text text-xs-center"
								column
							>
								<span class="mb-2">FIRST NAME</span>
								<span class="mb-2">SECOND NAME</span>
								<span class="mb-2">ADDRESS</span>
							</v-layout>
						</v-flex>
						<v-flex xs9>
							<v-layout column>
								<span class="mb-2">field 1</span>
								<span class="mb-2">field 2</span>
								<span class="mb-2">field 3</span>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-content>
			</v-card-text>
			<v-card-actions>
				<v-btn 
					color	 = "error"
					@click = "$emit('delete-user')"	
					left
					large
					round
					outline
				>DELETE</v-btn>
				<v-btn 
					color="info"
					absolute
					large
					right
					round
					outline
				>EDIT</v-btn>
			</v-card-actions>
		</v-card>
	</v-content>
</template>

<script>
export default {
	props: ['username', 'id'],
	data () {
		return {
			SELECT_COLOR: '#00A6F2',
			isChosen: false,
			isExist: true,
			isEditing: false,
		}
	},
	methods: {

	}
}
</script>



