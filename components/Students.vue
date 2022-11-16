<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <Sidebar/>
    <div class="text-center">
      <h1>This is Students Page</h1>
    </div>
  <div class="container">
      <div>

          <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
              <label class="ml-5" for="firstname" >Firstname :</label>&nbsp;&nbsp;&nbsp;
              <input class="ml-3" type="text" id="firstname" v-model="firstname"><br>
              <label class="ml-5" for="lastname">Lastname   :</label>&emsp;&nbsp;
              <input class="ml-2" type="text" id="lastname" v-model="lastname"><br>


              <div id="modal-1___BV_modal_footer_" class="modal-footer">
                  <button type="button" class="btn btn-secondary">Cancel</button>
                  <button type="button" id="btn_add" class="btn btn-primary" v-on:click="addStudent()">Add Student</button>
              </div>
          </b-modal>
      </div>
      <table class="table">
          <thead class="Gray">
              <th>#</th>
              <th>Student ID</th>
              <th>Firstname</th>
              <th>Lastname</th>

              <th>Date Enrolled</th>
              <th><b-button v-b-modal.modal-1>Add New Student +</b-button></th>
          </thead>
          <tbody>
              <tr v-for="student, count in studentList" :key="student.id">

                  <td>{{student.id}}</td>
                  <td>{{count+101014}}</td>
                  <td>{{student.firstName}}</td>
                  <td>{{student.lastName}}</td>
                  <td>{{student.dateAdded}}</td>
                  <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button>

                    <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                        <b-container>

                                <input type="hidden" id="idet"/>


                                    <b-form-input v-model="fname" id="fnamedit" placeholder="First Name"></b-form-input>


                                    <b-form-input v-model="lname" id="lnamedit" placeholder="Last Name"></b-form-input>





                        </b-container>
                        <div id="modal-1___BV_modal_footer_" class="modal-footer">
                            <button type="button" class="btn btn-danger">Cancel</button>
                            <button type="button" id="btn_add" class="btn btn-success" @click="updateStudent()" >Update</button>
                        </div>
                    </b-modal>


      <b-button @click="deleteStudent(count)" variant="danger">Delete</b-button>

              </tr>
          </tbody>
      </table>
  </div>
  </div>
</template>

<script>
export default{
  name: 'StudentsPage',
data(){
  return{
      studentList: []
  }
},
methods: {

    deletePro(id,){
      alert(id);


    },
  getFullDetails(student){
      return student.firstName + " " + student.lastName ;

  },
  addStudent(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;
      let student = {
          id: this.studentList.length + 1,
          firstName: this.firstname,
          lastName: this.lastname,
          dateAdded: today
      }
      this.studentList.push(student);
  },editStudent(student, event)
            {
                this.idet = student.id;
                this.fname = student.firstName;
                this.lname = student.lastName;
            },
    updateStudent()
            {
                for(var i = 0; i < this.studentList.length; i++)
                {
                    if(this.studentList[i].id === this.idet)
                    {
                        this.studentList[i].firstName = this.fname;
                        this.studentList[i].lastName = this.lname;

                    }
                }
                this.clear();
                this.updateStorage();
                this.showMsgBoxTwo();
            },
  deleteStudent(count)
            {
                this.studentList.splice(count, 1);
                this.updateStorage();
                this.showMsgBoxTwo();
            },
            showMsgBoxOne() {
            this.boxOne = ''
            this.$bvModal.msgBoxConfirm('Are you sure?')
            .then(value => {
                this.boxOne = value
            })
            .catch(err => {
                // An error occurred
            })
            },
            showMsgBoxTwo() {
                this.boxTwo = ''
                this.$bvModal.msgBoxOk('Success!', {
                    title: '',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'success',
                    headerClass: 'p-2 border-bottom-0',
                    footerClass: 'p-2 border-top-0',
                    centered: true
                })
                .then(value => {
                    this.boxTwo = value
                })
                .catch(err => {
                // An error occurred
                })
            },
            updateStorage(){
                localStorage.setItem("students", JSON.stringify(this.studentList));
            },
            clear(){
                this.fname = '';
                this.lname = '';
                this.Fname = '';
                this.Lname = '';
            }
}
}

</script>
<style>
</style>
