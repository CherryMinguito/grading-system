<template>
  <div
    class="container relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <Sidebar />
    <h1>This is Students Page</h1>
    <li v-for="student in studentList" :key="student.id">
      {{ getfullname(student) }}
    </li>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "StudentsPage",
  components: {
    Sidebar,
  },
  data() {
    return {
      studentList: [
        {
          firstname: "Neo Frank",
          lastname: "Uy",
          id: 1,
        },
        {
          firstname: "Kazuya",
          lastname: "Mishima",
          id: 2,
        },
        {
          firstname: "Jin",
          lastname: "Kazuya",
          id: 3,
        },
      ],
    };
  },
  methods: {
    getfullname(student) {
      return student.firstname + " " + student.lastname;
    },
  },
};
</script>
