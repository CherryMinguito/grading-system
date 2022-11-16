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
      <tr v-for="stud in student" :key="stud.name">
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.name"  v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.name}} </span>
        </td>
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.midname"  v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.midname}} </span>
        </td>
        <td>
          <input v-if="stud.edit" type="text" v-model="stud.desc" v-on:keyup.enter="stud.edit = !stud.edit">
          <span v-else>{{stud.desc}} </span>
        </td>
        <td><button @click="stud.edit = !stud.edit" class="btn btn-secondary"><i class="far fa-edit">Edit</i></button></td>
        <td><button @click="removeStud(index)" class="btn btn-danger"><i class="far fa-trash-alt">Delete</i></button></td>
      </tr>

    </table>
    <div class="form-inline" style="margin-right: 8px;">
    <input type="text" id="form-name" v-model="stud.name" placeholder="First Name" class="form-control">
    &nbsp;
    <input type="text" v-model="stud.midname" placeholder="Middle Name" class="form-control">
    &nbsp;
    <input type="text" v-model="stud.desc" placeholder="Last Name" class="form-control" v-on:keyup.enter="addStud">
    &nbsp;
    <button @click="addStud" class="btn btn-success">Add</button>
      </div>
</div>
</div>
</template>

<script>
  export default {
    data() {
    return {
      stud: {name: "", midname:"", desc: "", edit: false},
      student: []
    }
  },
  methods:{
    addStud() {
      this.student.push({
        name:this.stud.name, midname:this.stud.midname, desc:this.stud.desc, edit: false}
        );
      this.stud = [];
    },
    removeStud(index){
      this.student.pop(index)
    }
  }
  }
</script>
