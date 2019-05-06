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
          class	 					= "pa-0 ma-0 title font-weight-regular"
          :value 					= "username"
          v-if	 					= "isEditing"
          v-model					= "usernameInput"
          :error-messages = "required($v.usernameInput.required)"
          clearable
        ></v-text-field>
        <span v-else>{{ username }}</span>
        <v-spacer v-show="!isEditing"></v-spacer>
        <span v-show="!isEditing">{{ id }}</span>
      </v-card-title>
      <v-card-text class="body-1">
        <v-content>
          <v-layout
            :class="[isEditing ? '' : 'pb-3']" 
            row 
            wrap 
          >
            <v-flex 
              class="grey--text text-xs-center"
              xs3 
            >FIRST NAME</v-flex>
            <v-flex xs9>
              <span v-if="!isEditing">{{ firstname }}</span>
              <v-text-field
                :error-messages ="required($v.firstnameInput.required)"
                :value					="firstname"
                class						="pa-0 ma-0 body-1"
                v-model					="firstnameInput"
                absolute
                clearable
                top
                v-else
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout  
            :class="[isEditing ? '' : 'pb-3']"
            row 
            wrap
          >
            <v-flex 
              class="grey--text text-xs-center"
              xs3 
            >SECOND NAME</v-flex>
            <v-flex xs9>
              <span v-if="!isEditing">{{ secondname }}</span>
              <v-text-field
                :error-messages	="required($v.secondnameInput.required)"
                class						="pa-0 ma-0 body-1"
                :value					="secondname"
                v-model					="secondnameInput"
                clearable
                absolute
                top
                v-else
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex 
              class="grey--text text-xs-center"
              xs3	
            >ADDRESS</v-flex>
            <v-flex xs9>
              <span v-if="!isEditing">{{ address }}</span>
              <v-text-field
                class					 ="pa-0 ma-0 body-1"
                :error-messages="required($v.addressInput.required)"
                :value				 ="address"
                v-model				 ="addressInput"
                absolute
                top
                clearable
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
          @click ="onCancelEdit()"	
          v-else
          left
          large
          round
          outline
        >CANCEL</v-btn>
        <v-btn 
          color		="info"
          @click	="onEdit()"
          v-if		="!isEditing"
          absolute
          large
          right
          round
          outline
        >EDIT</v-btn>
        <v-btn 
          @click		="onSave($event); isChosen = true;"
          :disabled	="!isEditValid"
          color			="info"
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

// todo:
// 	1.validate for !=+- symbols and etc

import {required} from 'vuelidate/lib/validators'

export default {
  props: [
    'id',
    'username', 
    'firstname',
    'secondname',
    'address'
  ],
  data () {
    return {
      usernameInput		: this.username,
      firstnameInput	: this.firstname,
      secondnameInput	: this.secondname,
      addressInput		: this.address,

      SELECT_COLOR : '#00A6F2',
      isChosen		 : false,
      isExist			 : true,
      isEditing		 : false
    }
  },
  validations: {
    usernameInput: {
      required
    },
    firstnameInput: {
      required
    },
    secondnameInput: {
      required
    },
    addressInput: {
      required
    }
  },
  computed: {
    isEditValid () {
      return (
        this.$v.usernameInput.required &&
        this.$v.firstnameInput.required &&
        this.$v.secondnameInput.required &&
        this.$v.addressInput.required
      );
    }
  },
  methods: {
    // fix :error-messages = []
    required (condition) {
      if (!condition) return 'Required';
      else return "";   
    },
    bindInputsToProps () {
      this.usernameInput 		= this.username;
      this.firstnameInput 	= this.firstname;
      this.secondnameInput  = this.secondname;
      this.addressInput 		= this.address;
    },
    onCancelEdit () {
      this.isEditing 				= !this.isEditing;
      this.isChosen 				= true;
      //return prev info by pressing cancel
      this.bindInputsToProps();
    },
    onEdit () {
      this.isEditing = !this.isEditing;
      this.isChosen = true;
      //fix bug after delete
      this.bindInputsToProps();
    },
    onSave () {
      this.isEditing = !this.isEditing;
      this.$emit('update-profile', {
        username	 : this.usernameInput,
        firstname	 : this.firstnameInput,
        secondname : this.secondnameInput,
        address		 : this.addressInput
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