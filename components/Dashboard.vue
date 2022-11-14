<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Dashboard Page</h1>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar';
  import Login from './Login.vue';
  export default {
    name: 'DashboardPage',
    components: {
      Sidebar,
    },
  }
  </script>