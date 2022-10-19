<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Students List Page</h1>
      <li v-for="student in studentList" :key="student.id">
            {{getfullname(student)}}
      </li>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar';
  export default {
    name: 'ListsPage',
    components: {
      Sidebar,
    },
    data() {
        return {
            studentList: [
                {
                    firstname: "Fun",
                    lastname: "Gag",
                    add: "kahoyan",
                    id:1,
                },
                {
                    firstname: "Man",
                    lastname: "Oak",
                    add: "poultry",
                    id:2,
                }
            ]
        }
    },
    methods: {
        getfullname(student){
            return "Name: " + student.firstname + " " + student.lastname + " Address: " + student.add;
        },
    }
  }
  </script>