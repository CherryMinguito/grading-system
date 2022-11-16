<template>
  <div style="background-color: lightcyan">
  <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh">
    <form>
      <div class="form-outline mb-4">
        <input type="user" id="username" class="form-control" />
        <label class="form-label" for="username">Username</label>
      </div>

      <div class="form-outline mb-4">
        <input type="password" id="pass" class="form-control" />
        <label class="form-label" for="pass">Password</label>
      </div>

      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <div class="navbar-nav">
        <b-button>
          <NuxtLink to="/home">Login</NuxtLink> 
        </b-button>
      </div>
  
    <div class="text-center">
      <p>No account yet? <a href="#!">Sign up</a></p>
    </div>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>
