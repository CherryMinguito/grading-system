<template>
  <div>
    <Sidebar />
    <div>
      <b-button v-b-modal.modal-1>Insert</b-button>
      <b-modal id="modal-1" title="BootstrapVue">
        <label>Name:</label>
        <input
          type="Text"
          for="name"
          id="name"
          v-model="name"
          class="form-control"
        />
        <br />
        <label>Address:</label>
        <input
          type="Text"
          for="address"
          id="address"
          v-model="address"
          class="form-control"
        />
        <div class="modal-footer">
          <button class="btn btn-primary" type="button" v-on:click="addstud()">
            Submit
          </button>
        </div>
      </b-modal>
    </div>
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
    getfullname(student) {},
    addstud() {
      console.warn("values: ", this.name, this.address);
      let student = {
        id: Date.now(),
        name: this.name,
        address: this.address,
      };
      this.studentList.push(student);
    },
  },
};
/*document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addstud);
});*/
</script>
