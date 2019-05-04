<template>
	<v-content>
		<v-card 
		
			max-width	= "500"
			class			= "mx-auto pb-3 pt-2"
			selected
			dark 
		>
			<v-card-title	class="title font-weight-regular">
				<span>User 1</span>
				<v-spacer></v-spacer>
				<span>ID</span>
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
								<span>ADDRESS</span>
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
					color="error"
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
	data () {

	},
	methods () {

	}
}
</script>

