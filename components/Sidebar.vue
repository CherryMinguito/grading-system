<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 280px"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
    >
      <svg class="bi me-2" width="40" height="24">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Grading System</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <NuxtLink to="/home">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/students">List of Students</NuxtLink>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/297627844_5509103285778560_221197393229153217_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFfkp3a4acgjSwRqbJzfBtJN3oMWzR5NgA3egxbNHk2AMBNTfyfFfaBXWqPoalY5psoZxfcAsOTgelBMlKcdoVB&_nc_ohc=Clp0ffhMao8AX9ULkTU&_nc_ht=scontent.fceb3-1.fna&oh=00_AfDYiNDoMX2YdA2VUDi39pn73cR3dZ4BjvaK13crFsO8JQ&oe=6361037D"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        />
        <strong>Yusuf</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
