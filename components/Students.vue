<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Students Page</h1>
        <li v-for="student in studentList" :key="student.id">
            {{getfullname(student)}}
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
                    firstname: "Marky",
                    lastname: "Gabison",
                    id:1,
                },
                {
                    firstname: "Anna",
                    lastname: "Frozen",
                    id:2,
                }
            ]
        }
    },
    methods: {
        getfullname(student){
            return student.firstname + " " + student.lastname;
        },
    }
  }
  </script>