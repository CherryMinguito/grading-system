<!-- Please remove this file from your project -->
<template>
    <div>
      <Sidebar/>
      <h1>This is Home Page</h1>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar';
  export default {
    name: 'HomePage',
    components: {
      Sidebar,
    },
  }
  </script>