<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Students Page</h1>
        <div>
            <b-button class="btn btn-primary" v-b-modal.modal-1>Add Student</b-button>
            <b-modal id="modal-1" title="BootstrapVue" hide-footer>
                <label for="fname">Firstname</label>
                <input type="text" id="firstname" v-model="firstname"><br>
                <label for="lname">Lastname</label>
                <input type="text" id="lastname" v-model="lastname"><br>
                <label for="address">Address</label>
                <input type="text" id="address" v-model="address">

                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                    <button type="button" class="btn btn-secondary">Cancel</button>
                    <button type="button" id="btn_add" class="btn btn-primary" v-on:click="addStudent()">Add Student</button>
                </div>
            </b-modal>
        </div>
        <table class="table">
            <thead class="thead-dark">
                <th>#</th>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="student, count in studentList">
                    <td>{{count+1}}</td>
                    <td>{{student.id}}</td>
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td>{{student.studAddress}}</td>
                    <td>
                        <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)" style="margin:0px;">Edit</b-button><b-button variant="danger" style="margin-left:10px;" @click="deleteStudent(count)">Delete</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
            <label for="fname">Firstname</label>
            <input type="text" id="firstname" v-model="firstname"><br>
            <label for="lname">Lastname</label>
            <input type="text" id="lastname" v-model="lastname"><br>
            <label for="address">Address</label>
            <input type="text" id="address" v-model="address">

            <div id="modal-1___BV_modal_footer_" class="modal-footer">
                <button type="button" class="btn btn-secondary">Cancel</button>
                <button type="button" id="btn_add" class="btn btn-primary" v-on:click="updateStudent()">Update</button>
            </div>
        </b-modal>
    </div>
</template>
<script>
import Sidebar from './Sidebar';
import axios from 'axios';
export default
{
    name: 'StudentsPage',
    mounted() { console.log(this.fetchStudent()) },
    components: {
        Sidebar,
    },
    data(){
    return{
        studentList: []
    }
},
methods: {
    getFullDetails(student){
        return student.id + " " + student.firstName + " " + student.lastName + " " + student.studAddress;
    },
    addStudent(){
        let student = {
            id: Date.now(),
            firstName: this.firstname,
            lastName: this.lastname,
            studAddress: this.address,
        }
        this.studentList.push(student);
        this.updateStorage();
        this.clear();
    },
    deleteStudent(count){
        this.studentList.splice(count, 1);
        this.updateStorage();
    },
    editStudent(student, event){
        this.idet = student.id;
        this.firstname = student.firstName
        this.lastname = student.lastName;
        this.address = student.address;
    },
    updateStudent(){
        for(var i = 0; i < this.studentList.length; i++)
        {
            if(this.studentList[i].id === this.idet)
            {
                this.studentList[i].firstName = this.firstname;
                this.studentList[i].lastName = this.lastname;
                this.studentList[i].studAddress = this.address;
            }
        }
        this.clear();
        this.updateStorage();
    },
    deleteStudent(count)
    {
        this.studentList.splice(count, 1);
        this.updateStorage();
    },
    updateStorage(){
        localStorage.setItem("students", JSON.stringify(this.studentList));
    },
    clear(){
        this.firstname = '';
        this.lastname = '';
        this.address = '';
    },
    async fetchStudent(){
        const students= await this.$axios.$get('/getStudents')
        return students
    }
}
}
</script>
<style>
</style>