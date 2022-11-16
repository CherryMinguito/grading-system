<template>
      <div>
            <b-dropdown id="dropdown-1" text="Menu" class="m-md-2">
                  <b-dropdown-item><NuxtLink to="/home">Home</NuxtLink></b-dropdown-item>
                  <b-dropdown-item><NuxtLink to="/dashboard">Dashboard</NuxtLink></b-dropdown-item>
                  <b-dropdown-item><NuxtLink to="/students">Students</NuxtLink></b-dropdown-item>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item><NuxtLink to="/">Sign Out</NuxtLink></b-dropdown-item>
            </b-dropdown>
      </div>
</template>


<style>


</style>