<!-- Please remove this file from your project -->
<!-- From jhonreyA_branch -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <Sidebar/>
    <h1>This is a Home Page</h1>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  name: 'Home',
  components: {
            Sidebar,
        },
}
</script>
