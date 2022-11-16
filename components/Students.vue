<!-- Please remove this file from your project -->
<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Students Page</h1>

      <div>
        <b-button v-b-modal.modal-1>Add Student</b-button>
        <b-modal id="modal-1" title="Add Student">
            <form method="POST" >
            <div class="form-row align-items-center">
                <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">First Name:</label>
                <input type="text" v-model="studentList.firstname" name="fname" class="form-control mb-2" id="fname" placeholder="First name:">
                First Name: {{studentList.firstname}}
                </div>
                <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">Last Name:</label>
                <input type="text" v-model="studentList.lastname"  name="lname" class="form-control mb-2" id="lname" placeholder="Last name:">
                Last Name: {{studentList.lastname}}
                </div>
                <div class="col">
                    <div class="float-right">
                        <button type="button" v-on:click="submitForm()" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </div>
            </div>
            </form>
        </b-modal>

        <b-modal id="modal-2" title="Edit Student">
            <form method="POST" >
            <div class="form-row align-items-center">
                <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">First Name:</label>
                <input type="text" v-model="studentList.firstname" name="fname" class="form-control mb-2" id="fname" placeholder="First name:">
                <h2>{{studentList.id}}</h2>
                First Name: {{studentList.firstname}}
                </div>
                <div class="col-auto">
                <label class="sr-only" for="inlineFormInput">Last Name:</label>
                <input type="text" v-model="studentList.lastname"  name="lname" class="form-control mb-2" id="lname" placeholder="Last name:">
                Last Name: {{studentList.lastname}}
                </div>
                <div class="col-auto">
                <button type="button" v-on:click="updateStud(index)" class="btn btn-primary mb-2">Update</button>
                </div>
            </div>
            </form>
        </b-modal>
    </div>

         <!-- <li v-for="student,count in studentList" :key="student.id">
              {{getfullname(student)}} 
        </li>  -->
        <br />

        <div class="h-100 d-flex align-items-center justify-content-center">
            <table class="table table-dark w-50 ">
            <thead class="thead-light">
                <th class="th-lg">ID</th>
                <th class="th-lg">Firstname</th>
                <th class="th-lg"> Lastname</th>
                <th class="th-lg">Actions</th>
            </thead>
            <tbody>
                <tr v-for="student, index in studentList" :key="student.id">
                    <td>{{student.id}}</td>
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td> 
                         <button type="button" v-b-modal.modal-2 v-on:click="editStud(student)" class="btn btn-secondary mb-2">Edit</button>
                         <button type="button" v-on:click="deleteStudent(index)" class="btn btn-danger mb-2">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table> 
        </div>

        
    </div>
  </template>
  
  <script>
  import { clear } from 'console';
import { send } from 'q';
  import Sidebar from './Sidebar';
  export default {
    name: 'StudentsPage',
    components: {
      Sidebar,
    },
    data() {
        return {
            studentList: [],

            newName: {
                firstname:'',
                lastname:'',
                id:'',
            },
            send:'',
           
        }
    },
    methods: {
        getfullname(student){
            return student.firstname + " " + student.lastname;
        },
        submitForm(){
            let student = {
            id: this.studentList.length + 1,
            firstName: this.studentList.firstname,
            lastName: this.studentList.lastname,
        }
        this.studentList.push(student);
        this.clear();
        },
        deleteStudent(index){
            this.studentList.splice(index, 1);
        },
        editStud(student, event){
            this.id = student.id;
            this.firstname = student.firstName;
            this.lastname = student.lastName;
        },
        updateStud(index){
             let student = {
             id: this.id,
            firstName: this.studentList.firstname,
            lastName: this.studentList.lastname,
         }
         this.studentList.push(student);
         this.studentList.splice(index, 1);
         this.clear();
        // this.studentList.splice(this.studentList.indexOf(student),1, {
        //     'firstName': this.studentList.firstname,
        //     'lastname' : this.studentList.lastname,
        //     'id' : this.studentList.id,
        // })
        }, 
        clear(){
            this.studentList.firstname='';
            this.studentList.lastname='';
        },
        sendID(){
            this.send = this.student;
        }
    }
}
  
  </script>