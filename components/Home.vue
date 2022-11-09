<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <Navbar />
    <h1>This is Home Page</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "HomePage",
  components: {
    Navbar,
  },
};
</script>
