<!-- Please remove this file from your project -->
<!-- From jhonreyA_branch -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This Students Page</h1>
      <li v-for="student in studentList" :key="student.id">
            {{getfullname(student)}}
      </li>
    </div>
  </template>
  

<script>
    import Sidebar from './Sidebar.vue';

    export default {
        name: 'StudentPage',
        components: {
            Sidebar,
        },
        data(){
            return {
                studentList: [
                    {
                      firstName: "John",
                      lastName: "Smith",
                      id:1,
                    },
                    {
                      firstName: "John",
                      lastName: "Mccoy",
                      id:2,
                    }
                ]
            }
        },
        methods: {
          getfullname(student){
            return student.firstName + " " + student.lastName;
          },
            
        }
    }
</script>