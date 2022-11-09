<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <Sidebar />
    <div class="container">
      <div>
        <b-button v-b-modal.modal-1 class="btn btn-primary">Add</b-button>

        <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
          <label class="form-label" for="firstname">Firstname :</label
          >&nbsp;&nbsp;&nbsp;
          <input
            class="form-control"
            type="text"
            id="firstname"
            v-model="firstname"
          /><br />
          <label class="form-label" for="lastname">Middlename :</label
          >&emsp;&nbsp;
          <input
            class="form-control"
            type="text"
            id="middlename"
            v-model="middlename"
          /><br />
          <label class="form-label" for="lastname">Lastname :</label
          >&emsp;&nbsp;
          <input
            class="form-control"
            type="text"
            id="lastname"
            v-model="lastname"
          /><br />
          <label class="form-label" for="address">Address :</label>&emsp;
          <input
            class="form-control"
            type="text"
            id="address"
            v-model="address"
          />

          <div id="modal-1___BV_modal_footer_" class="modal-footer">
            <button type="button" class="btn btn-secondary">Cancel</button>
            <button
              type="button"
              id="btn_add"
              class="btn btn-primary"
              v-on:click="addstud()"
            >
              Add Student
            </button>
          </div>
        </b-modal>
      </div>
      <br />
      <table class="table">
        <thead class="table-warning">
          <th>ID</th>
          <th>Firstname</th>
          <th>Middlename</th>
          <th>Lastname</th>
          <th>Address</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr v-for="(student, ctn) in studentList" :key="student.id">
            <td>{{ student.id }}</td>
            <td>{{ student.firstname }}</td>
            <td>{{ student.middlename }}</td>
            <td>{{ student.lastname }}</td>
            <td>{{ student.address }}</td>
            <td>
              <button
                type="button"
                id="btn_add"
                class="btn btn-success"
                v-on:click="update()"
              >
                Update
              </button>
            </td>
            <td>
              <button
                type="button"
                id="btn_add"
                class="btn btn-danger"
                v-on:click="delstud()"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "StudentsPage",
  components: {
    Sidebar,
  },
  created() {
    this.getStudents();
  },
  data() {
    return {
      studentList: [],
    };
  },
  methods: {
    getStudents() {
      if (process.browser) {
        var list = JSON.parse(localStorage.getItem("students"));
      }
      this.studentList = list !== null ? list : [];
    },
    getfullname(student) {},
    addstud() {
      let student = {};
      if (this.studentList == null) {
        student = {
          id: 1,
          firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          address: this.address,
        };
      } else {
        student = {
          id: this.studentList.length + 1,
          firstname: this.firstname,
          middlename: this.middlename,
          lastname: this.lastname,
          address: this.address,
        };
      }
      this.studentList.push(student);
      this.clear();
    },

    delstud(ctn) {
      this.studentList.splice(ctn, 1);
    },
    clear() {
      this.firstname = "";
      this.middlename = "";
      this.lastname = "";
      this.address = "";
    },
  },
};
/*document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addstud);
});*/
</script>
