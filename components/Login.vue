<template>
    <div>
   <h1 class="text-center">Login Form</h1>
   
   <form>
  <div class="form-group row mx-5">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10 mx-auto">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group row mx-5">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password:</label>
    <div class="col-sm-10 mx-auto">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="container"> 
    <div class="col-md-12 text-center">
        <button type="button" class="btn-lg btn-outline-primary ">Login</button>
    </div>
  </div>
 
</form>    

   </div>

  


</template>


   
<style>
.nuxt-logo {
  height: 180px;
}
</style>

<script>
export default {
  name: 'Login'
}
</script>

