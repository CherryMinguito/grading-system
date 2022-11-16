<template>
    <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh">
        <form class="border shadow p-3 rouneded bg-light">
          <h1 class="text-center p-3 text-dark">My Login Page</h1>
          <div class="row justify-content-center">
                  <div class="col mb-3">
                      <label class="form-label text-dark">Email</label>
                      <input class="form-control">
                  </div>
          </div>
          <div class="row justify-content-center">
                <div class="col mb-3">
                  <label class="form-label text-dark">Password</label>
                  <input class="form-control">
              </div>
          </div>
          <div class="row justify-cotent-center">
            <div class="col mb-3">
                <p class="text-dark">No Account yet? <a class="text-dark" href="">Sign Up</a></p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col mb-3">
    
              <b-button variant="outline-primary" @click="login">Login</b-button>
         
    
            </div>
          </div>
        </form>
      </div>
    </template>

<script>
export default {
  data()
  {
      return {
        form: {
          email: 'man@gmail.com',
          password: '123456',
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