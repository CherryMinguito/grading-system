<template>
  <div>
    <Home />
  <div class="container">
      
    <br><br>
    <table class="table table-striped table-dark table-bordered table-sm">
      <thead>
        <th>First Name</th>
        <th>Middle Name</th>
        <th>Last Name</th>
        <th class="col-2">Edit</th>
        <th class="col-2">Delete</th>
      </thead>
      <tr v-for="stud in student" :key="stud.firstName">
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.firstName"  v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.firstName}} </span>
        </td>
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.middleName"  v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.middleName}} </span>
        </td>
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.lastName" v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.lastName}} </span>
        </td>
        <td><button @click="stud.edit = !stud.edit" class="btn btn-secondary"><i class="far fa-edit">Edit</i></button></td>
        <td><button @click="removeStud(index)" class="btn btn-danger"><i class="far fa-trash-alt">Delete</i></button></td>
      </tr>

    </table>
    <div class="form-inline" style="margin-right: 8px;">
    <input type="text" id="form-name" v-model="stud.firstName" placeholder="First Name" class="form-control">
    &nbsp;
    <input type="text" v-model="stud.middleName" placeholder="Middle Name" class="form-control">
    &nbsp;
    <input type="text" v-model="stud.lastName" placeholder="Last Name" class="form-control" v-on:keyup.enter="addStud">
    &nbsp;
    <button @click="addStud" class="btn btn-success">Add</button>
      </div>
</div>
</div>
</template>

<script>
  export default {
    name: 'studentsPage',
    mounted() { console.log(this.fetchStudents()) },
    async created(){
    var list = await this.fetchStudents();
    this.student = list.student;
},

    data() {
    return {
      stud: {firstName: "", middleName:"", lastName: "", edit: false},
      student: []
    }
  },
  methods:{
    addStud() {
      this.student.push({
        firstName:this.stud.firstName, middleName:this.stud.middleName, lastName:this.stud.lastName, edit: false}
        );
      this.stud = [];
    },
    removeStud(index){
      this.student.pop(index)
    },
    async fetchStudents(){
        const students = await this.$axios.$get(
            "http://localhost:3001/getStudents" 
            );
        return students;
    }
  }
  }
</script>
