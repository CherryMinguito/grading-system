<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="Home">Grading System</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href=""><NuxtLink to="/Home">Home</NuxtLink></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-navbar-nav>
                <b-nav-item href="#"><NuxtLink to="/dashboard">Dashboard</NuxtLink></b-nav-item>
                <b-nav-item href=""><NuxtLink to="/lists">Students List</NuxtLink></b-nav-item>
                <b-nav-item href=""><NuxtLink to="/loginpage">Logout</NuxtLink></b-nav-item>
                </b-navbar-nav>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>