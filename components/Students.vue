<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <Sidebar/>
    <h1>This is Students Page</h1>
  
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>

      <b-modal id="modal-1" title="Add Student">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>

    <li v-for="student in studentList" :key="student.id">
    {{ getFullName(student) }}
    </li>
  </div>
</template>

<script>
import Sidebar from './Sidebar';

export default {
  name: 'StudentsPage',
  components: {
    Sidebar,
  },
  data() {
    return {
        studentList: [
          {
            firstName: "John",
            lastName: "Smith",
            id: 1,
          },
          {
            firstName: "Anna",
            lastName: "Smith",
            id: 2,
          },
        ],
      }
  },
  methods: {
    getFullName(student) {
      return student.firstName + " " + student.lastName;
    },
    saveStudent() {

    }
  }
}
</script>
