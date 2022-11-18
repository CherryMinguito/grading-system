<template>
    <div>
        
        <br><br>
    <div class="container">
        <div>
            <b-button v-b-modal.modal-1>Add New Student +</b-button>

            <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
                <label class="ml-5" for="firstname" >Firstname :</label>&nbsp;&nbsp;&nbsp;
                <input class="ml-3" type="text" id="firstname" v-model="firstname"><br>
                <label class="ml-5" for="lastname">Lastname   :</label>&emsp;&nbsp;
                <input class="ml-2" type="text" id="lastname" v-model="lastname"><br>
                <label class="ml-5" for="address" >Address :</label>&emsp;
                <input class="ml-4" type="text" id="address" v-model="address">
                
                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                    <button type="button" id="btn_add" class="btn btn-primary" v-on:click="addStudent()">Add Student</button>
                </div>
            </b-modal>
        </div>
        <h3>This is Students Pages</h3><br>
        <table class="table">
            <thead class="thead-dark">
                <th>#</th>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Date Enrolled</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="student, count in studentList" :key="student.id">
                    <td>{{count+1}}</td>
                    <td>{{student.id}}</td>
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td>{{student.studAddress}}</td>
                    <td>{{student.dateAdded}}</td>
                    <td><b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)" style="margin:0px;">Edit</b-button><b-button variant="danger" style="margin-left:10px;" @click="deleteStudent(count)">Delete</b-button></td>
                    <td></td>
                </tr>
            </tbody>
            
        </table>
        
        <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                            <label class="ml-5" for="firstname" >Firstname :</label>&nbsp;&nbsp;&nbsp;
                            <input value="Text" class="ml-3" type="text" id="firstname" v-model="firstname"><br>
                            <label class="ml-5" for="lastname">Lastname   :</label>&emsp;&nbsp;
                            <input class="ml-2" type="text" id="lastname" v-model="lastname"><br>
                            <label class="ml-5" for="address" >Address :</label>&emsp;
                            <input class="ml-4" type="text" id="address" v-model="address">    
                                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                                    <button type="button" id="btn_add" class="btn btn-success" @click="updateStudent()" >Update</button>
                                </div>
                            </b-modal>
                            <button @click="fetchStudents()">Test</button>
    </div>
    
    </div>
    
</template>
<script>
import axios from 'axios';
export default{
    name: 'StudentsPage',
mounted() { console.log(this.fetchStudents()) },
data(){
    return{
        studentList: [
            {
                id: "1190457",
                firstName: "Lyndon",
                lastName: "Dizon",
                studAddress: "Apas, Cebu City",
                dateAdded: "11/06/2022"
            }
        ]
    }
},
methods: {
    
    async addStudent(){

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let student = {
            id: Date.now(),
            firstName: await this.firstname,
            lastName: await this.lastname,
            studAddress: await this.address,
            dateAdded: today
        }
        this.studentList.push(student);
        this.updateStorage();
        this.clear();
    },
    editStudent(student, event)
    {
        this.idet = student.id;
        this.firstname = student.firstName
        this.lastname = student.lastName;
        this.address = student.studAddress;
    },
    updateStudent()
    {
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
    async fetchStudents(){
        const students = await this.$axios.$get('/getStudents' )
        return students
}
}
}
</script>
<style>
</style>