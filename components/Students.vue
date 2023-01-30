<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
    <Navbar />
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
              <b-button
                v-b-modal.modal-edit
                variant="info"
                v-on:click="updatelist(student)"
                >Update</b-button
              >

              <b-modal
                class="modal"
                id="modal-edit"
                title="Edit Student"
                hide-footer
              >
                <b-container>
                  <b-row class="p-3">
                    <input type="hidden" id="idet" />
                    <b-col>
                      <b-form-input
                        v-model="fname"
                        id="firstnameupd"
                        placeholder="First Name"
                      ></b-form-input>
                    </b-col>
                    <b-col>
                      <b-form-input
                        v-model="mname"
                        id="middlenameupd"
                        placeholder="Middle Name"
                      ></b-form-input>
                    </b-col>
                    <b-col>
                      <b-form-input
                        v-model="lname"
                        id="lastnameupd"
                        placeholder="Last Name"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="mx-1 pb-3">
                    <b-col>
                      <b-form-input
                        v-model="add"
                        id="addressupd"
                        placeholder="address"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-container>
                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                  <button type="button" class="btn btn-danger">Cancel</button>
                  <button
                    type="button"
                    id="btn_add"
                    class="btn btn-success"
                    v-on:click="updatestud()"
                  >
                    Update
                  </button>
                </div>
              </b-modal>
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
import Navbar from "./Navbar.vue";
export default {
  name: "StudentsPage",
  components: {
    Navbar,
  },
  async created() {
    var list = await this.fetchStudents();
    this.studentList = list.student;
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
    updatelist(student, event) {
      this.idet = student.id;
      this.firstname = student.fname;
      this.middlename = student.mname;
      this.lastname = student.lname;
      this.address = student.addr;
    },
    updatestud() {
      for (var i = 0; i < this.studentList.length; i++) {
        if (this.studentList[i].id === this.idet) {
          this.studentList[i].firstName = this.fname;
          this.studentList[i].middlename = this.mname;
          this.studentList[i].lastName = this.lname;
          this.studentList[i].address = this.add;
        }
      }
      this.clear();
    },
    async fetchStudents() {
      const students = await this.$axios.$get(
        "http://localhost:3001/getStudents"
      );
      return students;
    },
  },
};
/*document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", addstud);
});*/
</script>
