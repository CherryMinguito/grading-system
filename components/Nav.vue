<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="/Dashboard">Dashboard</b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="/">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
        name: 'Nav'
    }
</script>