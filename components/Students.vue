<template>
  <div style="background-color: lightcyan">
  <h2 style="text-align: center">Student Page</h2>
  <Sidebar/>
  <div style="margin-left:10%">
    <br>
    <div>
    <div>
      <input type="text" v-model="stud.fname" placeholder="First Name" v-on:keyup.enter="addStudent">
    </div>
    <br>
    <div>
      <input type="text" v-model="stud.lname" placeholder="Last Name" v-on:keyup.enter="addStudent">
    </div>
    <br>
    <div>
      <input type="text" v-model="stud.course" placeholder="Course" v-on:keyup.enter="addStudent">
    </div>
    <br>
    <button @click="addStudent">Add Student</button>
  </div> 
  </div>
  <br>
  <div style="margin-left:20%">
    <table>
      <thead>
        <th class="col-3"></th>
        <th class="col-3"></th>
        <th class="col-3"></th>
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
          <button @click="removeStudent(index)">Delete</button>
          <button @click="stud.edit = !stud.edit">Update</button>
        </td>
      </tr>
    </table>
  </div>
</div>
</template>

<script scope>
  export default {
    data() 
    {
      return {
        stud: 
        {
          fname: "", lname: "", course: "", edit: false
        },
        studs: []
      }
    },

  methods:{
    addStudent() 
    {
      this.studs.push({
        fname:this.stud.fname, lname:this.stud.lname, course:this.stud.course, edit: false}
        );
      this.stud = [];

    },

    removeStudent(index)
    {
      this.studs.splice(index, 1)
    }

  }

  }
</script>

