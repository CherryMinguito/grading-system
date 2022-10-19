<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px; height: 100vh;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li>
        <NuxtLink to="/index">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/students">Students</NuxtLink>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <strong>KC</strong>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarPage'
}
</script>
<style>
ul li{
  padding: 10px;
}
</style>