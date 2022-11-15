<!-- Please remove this file from your project -->
<template>
<div class="container">
        <div>
            <b-button v-b-modal.modal-1>Add New Student +</b-button>

            <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
                <label class="ml-5" for="firstname" >Firstname :</label>&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" id="firstname" v-model="firstname"><br>
                <label class="ml-5" for="lastname">Lastname   :</label>&emsp;&nbsp;
                <input class="ml-2" type="text" id="lastname" v-model="lastname"><br>

                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                    <button type="button" id="btn_add" class="btn btn-primary" v-on:click="addStudent()">Add Student</button>
                </div>
            </b-modal>
        </div>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center">

                                    <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                                        <b-container>
                                            <b-row class="p-3">
                                                <input type="hidden" v-model="id" id="id"/>
                                                <b-col>
                                                    <b-form-input v-model="firstname" id="firstname" placeholder="First Name"></b-form-input>
                                                </b-col>
                                                <b-col>
                                                    <b-form-input v-model="lastname" id="lastname" placeholder="Last Name"></b-form-input>
                                                </b-col>
                                            </b-row>
                                        </b-container>                    
                                        <div id="modal-1___BV_modal_footer_" class="modal-footer">
                                            <button type="button" class="btn btn-danger">Cancel</button>
                                            <button type="button" id="btn_add" class="btn btn-success" @click="updateStudent(student)" >Update</button>
                                        </div>
                                    </b-modal>
      <Sidebar/>
      <h1>This is Students Page</h1>
        <li v-for="student in studentList" :key="student.id">
            {{getfullname(student)}}
            <b-button @click="deleteStudent(count)" variant="danger">Delete</b-button>
            <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button>
        </li>
    </div>

</div>
  </template>
  
  <script>
  import Sidebar from './Sidebar';
  export default {
    name: 'StudentsPage',
    components: {
      Sidebar,
    },
    data() {
        return {
            studentList: []
        }
    },
    methods: {
        getfullname(student){
            return student.firstname + " " + student.lastname;
        },

        addStudent(){
            var student = {
                id: this.studentList.length + 1,
                firstname: this.firstname,
                lastname: this.lastname,
            }
            this.studentList.push(student);
            this.clear();
        },

        editStudent(student){
            {
                this.id = student.id;
                this.firstname = student.firstname;
                this.lastname = student.lastname;
            }
        },

        updateStudent(count){
            var student = {
                id: this.id,
                firstname: this.firstname,
                lastname: this.lastname,
            }
                this.studentList.push(student);
                this.studentList.splice(count, 1);
                this.clear();
        },
            
        clear(){
                this.firstname = '';
                this.lastname = '';
        },

        deleteStudent(count){
            this.studentList.splice(count, 1);
        },
    
    }
  }
  </script>