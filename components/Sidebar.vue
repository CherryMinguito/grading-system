<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item Nuxtlink to="/students"><strong>Christine Alissa Caintapan</strong></b-nav-item>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <b-nav-item Nuxtlink to="/home">Home</b-nav-item>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <b-nav-item Nuxtlink to="/dashboard">Dashboard</b-nav-item>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <b-nav-item Nuxtlink to="/students">Students</b-nav-item>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
                <b-nav-item Nuxtlink to="/login">Log Out</b-nav-item>
            </b-navbar-nav>
</b-collapse>
 </b-navbar>
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