<template>
  <div class="container">
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="button" variant="primary" @click="login">  
        Submit
        <NuxtLink to="/home">Submit</NuxtLink>
      </b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      login() {
        // const ip = this.$axios.$post('/login', this.form)
      },
    }
  }
</script>

