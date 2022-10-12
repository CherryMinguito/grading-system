<template>
<div>
  <div class="login_page">
    <div class="login_form">
  <form action="view">
  <div class="mb-3" >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'IndexPage'
}
</script>
<style>
  .login_page {
    width: 100%;
    height: 100%;
  }

  .login_form {
    width: 400px;
    margin: auto;
    margin-top: 10%;
  }
</style>