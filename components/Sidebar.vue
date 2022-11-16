<template>
  <div class="sidebar">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="active"> 
             <NuxtLink to="/home">Home</NuxtLink>
        </li>
        <hr>
        <li>
              <NuxtLink to="/dashboard">Dashboard</NuxtLink>
        </li>
        <hr>
        <li>
              <NuxtLink to="/students">Students</NuxtLink>
        </li>
        <li><hr></li>
              <NuxtLink to="/">Sign Out</NuxtLink>
      </ul>
</div>
</template>


<style>
.sidebar {
width: 200px;
background-color: #f7edf4;
position: relative;
height: 100%;
width:15%;
}

.sidebar a {
display: block;
color: black;
padding: 15px;
margin-left: 30px;
text-decoration: none;
}

.sidebar a.active {
background-color: purple;
color: white;
}

.sidebar a:hover:not(.active) {
background-color: #2225;
color: white;
}

hr{
width: 100%;
height: 20px;
}

</style>