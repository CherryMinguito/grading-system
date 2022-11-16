<template>
    <div>
    <h1>Students List:</h1>
    
    <div class="container">
    <ul>
      <li v-for="item in students" :key="item.id">{{item.Fullname}}</li>
    </ul>



    </div>
    </div>
  </template>


<script>
//import Sidebar from "./sideBar.vue";

export default {
  //name: 'NuxtLink',
  //extends: Vue.component('RouterLink'),

  data() {
    return {
      newStud: '',
      students: [
      {id: 1, Fullname: 'Osmand Hadjiamer S. Decampong'},


      ]
      
    }
  },
  
  name: 'Students'

}
</script>

