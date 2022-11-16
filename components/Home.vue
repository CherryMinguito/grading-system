<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <br><br><br><br><br>
      <h1 style="text-align: center">This is a Home Page</h1>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar';
  export default {
    name: 'NuxtTutorial',
    name: 'HomePage',
    components: {
      Sidebar,
    }
  }
  </script>