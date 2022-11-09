<template>
  <b-container class="bv-example-row bv-example-row-flex-cols">
    <b-row align-v="center">
      <b-col></b-col>
      <b-col class="bg-dark" align-self="center" style="white-space: pre-wrap; padding: 2rem">
        <b-form v-if="show">
          <b-form-group
            id="username"
            label="Username"
            label-for="username"
            class="text-white"
          >
            <b-form-input
              id="username"
              v-model="form.email"
              type="text"
              placeholder="Username"
            ></b-form-input>
          </b-form-group>
          <b-form-group 
            id="password" 
            label="Password" 
            label-for="password"
            class="text-white"
          >
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>

          <router-link to="/home" class="btn btn-primary">Login</router-link>
          <!-- <b-button type="submit" variant="primary"> Login </b-button> -->
          <b-button type="reset" variant="danger"> Sign Up </b-button>
          <br/>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    }
  }
</script>
