<template>
    <div>
      <Sidebar />
    <div class="container">
      <br><br>
      <h1 class="center">This is Students Page</h1><br>
      <b-button class="add" v-b-modal.modal-1 data-cy="add">Add New Student</b-button>
            <b-modal id="modal-1" title="Add New Student" hide-footer>
                <label class="ml-5" for="firstname">Firstname</label>&nbsp;
                <input class="ml-3" v-model="stud.fname" type="text" id="firstname" data-cy="firstname"><br>
                <label class="ml-5" for="lastname">Lastname</label>&nbsp;&nbsp;
                <input class="ml-3" type="text" id="lastname" v-model="stud.lname" data-cy="lastname"><br>
                <label class="ml-5" for="course">Course</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" id="course" v-model="stud.course" data-cy="course"><br>
                <label class="ml-5" for="address">Address</label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" data-cy="address" id="address"  v-model="stud.address">

                <div class="modal-footer">
                  <button @click="addStud" class="btn btn-dark" data-cy="addstud"><i>Add</i></button>
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
            <input v-if="stud.edit" type="text" v-model="stud.fname" data-cy="edit-fname" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.fname}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.lname" data-cy="edit-lname" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.lname}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.course" data-cy="edit-course" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.course}} </span>
          </td>
          <td>
            <input v-if="stud.edit" type="text" v-model="stud.address" data-cy="edit-address" v-on:keyup.enter="stud.edit = !stud.edit">
            <span v-else>{{stud.address}} </span>
          </td>
          <td>
            <button @click="stud.edit = !stud.edit" class="btn btn-info" data-cy="edit"><b>Edit</b></button>
          </td>
          <td>
            <button @click="removeStud(stud.id)" class="btn btn-danger" data-cy="delete"><b>Delete</b></button>
          </td>
        </tr>
      </table>

  </div>
  </template>
  
  <script scope>
    let url = "http://localhost:3002/student";
    export default {
      data() {
      return {
        stud: {fname: "", lname: "", course: "", address: "", edit: false},
        studs: [],
        tempData: []
      }
    },
    methods:{
      async addStud() {
        await this.$axios.$post(url + '/create', {fname: this.stud.fname, lname: this.stud.lname, course: this.stud.course, address: this.stud.address})
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
        this.stud = [];
      },
      async removeStud(id){
        await this.$axios.$post(url + '/delete', {id: id})
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async GetAllData(){
        this.studs = await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.tempData = res;
        console.log(this.studs);
      })
      .catch((err) => console.log(err));
      this.studs = this.tempData;
      },
      async StudEdit(stud)
      {
        if(!stud.edit)
        {
          stud.edit = !stud.edit
        }
        else
        {
          stud.edit = !stud.edit
          await this.$axios.$post(url + '/update', {id: stud.id, name: stud.fname, lname: stud.lname, course: stud.course, address: stud.address})
          .then((res) => {
            console.log(res);
            this.GetAllData();
          })
          .catch((err) => console.log(err));
        }
      }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>
  
  <style scoped>
  .form-inline input {
    margin-right:8px;
  }
  
  .add{
  justify-content: center;
  align-content: left;
  height: 50px;
  border: 3px solid rgb(255, 215, 252); 
}
  </style>
  