

<template>
    <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh">
        <form class="border shadow p-3 rouneded bg-light">
          <h1 class="text-center p-3 text-dark">My Login Page</h1>
          <div class="row justify-content-center">
                  <div class="col mb-3">
                      <label class="form-label text-dark">Email</label>
                      <input id="email" class="form-control">
                  </div>
          </div>
          <div class="row justify-content-center">
                <div class="col mb-3">
                  <label class="form-label text-dark">Password</label>
                  <input id="password" class="form-control" type="password">
              </div>
          </div>
          <div class="row justify-cotent-center">
            <div class="col mb-3">
                <p class="text-dark">No Account yet? <a class="text-dark" href="">Sign Up</a></p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col mb-3">
    
              <b-button id="submitBtn" variant="outline-primary" to="/home">Login</b-button>
         
    
            </div>
          </div>
        </form>
      </div>
    </template>

<script>
import { BButton } from 'bootstrap-vue';
export default {
  name:'IndexPage',
 
 
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
    
    components: {
    BButton,
  },
    methods: {
      login() {
        this.$axios.$post('/login', this.form)
        .then(response => {
                // use the response data here
                this.$router.push({name:'HomePage'});
                this.$toast.success("Logged In Successfully",{});
            })
            .catch(error => {
                console.log(error);
                this.$toast.error("Invalid Credentials",{});
                // handle error
            });
      },
    }
}
</script>