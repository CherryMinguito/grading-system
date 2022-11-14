<!-- Please remove this file from your project -->
<template>
  <div>
    <Sidebar/>
    <div class="text-center">
      <h1>This is a Home Page</h1>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  name: 'HomePage',
  components: {
      Sidebar,
    },
}
</script>
