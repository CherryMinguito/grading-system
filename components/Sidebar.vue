<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/Home">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Students" right>
          <b-dropdown-item href="/Insert">Insert</b-dropdown-item>
          <b-dropdown-item href="">Delete</b-dropdown-item>
          <b-dropdown-item href="#">Update</b-dropdown-item>
          <b-dropdown-item href="/Students">List</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
