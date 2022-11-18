<template>
   
  <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
 <a class="navbar-brand" href="#">Dashboard</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNav">
   <ul class="navbar-nav">
     <li class="nav-item active">
       <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="/Students">STUDENTS</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">LOGOUT</a>
     </li>
   </ul>
 </div>
</nav>

<div>
       <h3 class="welcome">Welcome to Dashboard</h3>
   </div>
  </div>
   
</template>

<script>
   export default{

   }
</script>
<style>
.btn{
   margin-left: 1100px;
}
.welcome{
   margin-left: 45%;
   margin-top: 10%;

}
</style>