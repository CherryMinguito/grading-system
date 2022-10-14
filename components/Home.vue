<template>
  <form class="codehim-form">
     <div class="form-title">
        <div class="user-icon gr-bg">
           <i class="fa fa-user"></i>
        </div>
        <div class="vertical-center">
          <h2>LOGIN</h2>
        </div>
     </div>
     <label for="email"><i class="fa fa-envelope"></i> Email:</label>
     <input type="email" id="email" class="cm-input" placeholder="Enter your email adress">
     <label for="pass"><i class="fa fa-lock"></i> Password:</label>
     <input id="pass" type="password" class="cm-input" placeholder="Enter your password">
     <div class="row justify-content-center">
        <div class="vertical-center">
           <b-button pill>Login</b-button>
        </div>
     </div>
  </form>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>

<style>



.codehim-form{
    max-width: 400px;
    min-height: 400px;
    box-sizing: border-box;
    background: rgba(233, 133, 133, 0.6);
    box-shadow: 4px 2px 16px rgba(255, 0, 170, 0.4);
    border-radius: 8px;
    margin:  20px auto 0 auto;
    padding: 25px;
    color: #414141;
        
}

.cm-input{
    display: block;
    box-sizing: border-box;
    padding: 10px;
    width: 100%; 
    margin: 14px auto;
    border-radius: 20px;
    border: 1px solid #ccc;
    
    
}
.cm-input:focus{
    outline: 0;
    border-color: #f9cb81;
    
}
.cm-input:invalid{
    border-color: #e41b17;
    
}


</style>