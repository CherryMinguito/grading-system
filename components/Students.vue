<template>
  <div>
    <Sidebar />
    <div>
      <b-table striped hover :items="studentList"></b-table>
    </div>
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
      studentList: [],
    };
  },
  methods: {
    getfullname(student) {
      return this.studentList;
    },
  },
};
</script>
