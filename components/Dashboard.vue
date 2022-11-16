<template>
    <div style="background-color: lightcyan">
    <h2 style="text-align: center">Dashboard Page</h2>
    <Sidebar/>
    <div class="container d-flex justify-content-center align-items-center" style="min-height: 100vh">

    </div>
  </div>
</template>
<script>
import Sidebar from './Sidebar';
export default {
    name: 'DashboardPage',
    components:{
        Sidebar,
    },
}
</script>