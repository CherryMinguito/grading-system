<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <Navbar />
    <h1>This is Dashboard Page</h1>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "DashboardPage",
  components: {
    Navbar,
  },
};
</script>
