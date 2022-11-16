<template>
    <div>
      <Sidebar />
    <div class="container">
      <br><br>
      <h1 class="center">This is Students Page</h1><br>
      <b-button class="add" v-b-modal.modal-1>Add New Student</b-button>
            <b-modal id="modal-1" title="Add New Student" hide-footer>
                <label class="ml-5" for="firstname">Firstname</label>&nbsp;
                <input class="ml-3" v-model="stud.fname" type="text" id="firstname"><br>
                <label class="ml-5" for="lastname">Lastname</label>&nbsp;&nbsp;
                <input class="ml-3" type="text" id="lastname" v-model="stud.lname"><br>
                <label class="ml-5" for="course">Course</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" id="course" v-model="stud.course"><br>
                <label class="ml-5" for="address">Address</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" v-on:keyup.enter="addStud" id="address" v-model="stud.address">

                <div class="modal-footer">
                  <button @click="addStud" class="btn btn-dark"><i>Add</i></button>
                </div>
            </b-modal>
    </div>
      <br><br>
      <table class="table table-striped table-dark table-bordered table-sm">
        <thead class="thead-dark">
          <th>First Name</th>
          <th>Lastname</th>
          <th>Course</th>
          <th>Address</th>
          <th class="col-2">Edit</th>
          <th class="col-3">Delete</th>
        </thead>
        <tr v-for="stud in studs" :key="stud.fname">
            <td>
            <input v-if="stud.edit" type="text" v-model="stud.fname"  v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.fname}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.lname" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.lname}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.course" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.course}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.address" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.address}} </span>
          </td>
          <td>
            <button @click="stud.edit = !stud.edit" class="btn btn-info"><b>Edit</b></button>
          </td>
          <td>
            <button @click="removeStud(index)" class="btn btn-danger"><b>Delete</b></button>
          </td>
        </tr>
      </table>

  </div>
  </template>
  
  <script scope>
    export default {
      data() {
      return {
        stud: {fname: "", lname: "", course: "", address: "", edit: false},
        studs: []
      }
    },
    methods:{
      addStud() {
        this.studs.push({
          fname:this.stud.fname, lname:this.stud.lname, course:this.stud.course, address:this.stud.address, edit: false}
          );
        this.stud = [];
      },
      removeStud(index){
        this.studs.splice(index, 1)
      }
    }
    }
  </script>
  
  <style scoped>
  .form-inline input {
    margin-right:8px;
  }
  
  .add{
  justify-content: center;
  align-studs: left;
  height: 50px;
  border: 3px solid rgb(255, 215, 252); 
}
  </style>
  