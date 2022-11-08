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
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Address</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="student in studentList">
                    <td>{{student.firstName}}</td>
                    <td>{{student.lastName}}</td>
                    <td>{{student.studAddress}}</td>
                    <td>
                        <button class="btn btn-warning" v-on:click="edit()">Edit</button>
                        <button class="btn btn-danger" v-on:click="del(student)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Sidebar from './Sidebar';
export default
{
    name: 'StudentsPage',
    data()
    {
    return{
        studentList: []
    }
},
methods: {
    getFullDetails(student){
        return student.firstName + " " + student.lastName + " " + student.studAddress;
    },
    addStudent(){
        let student = {
            firstName: this.firstname,
            lastName: this.lastname,
            studAddress: this.address,
        }
        this.studentList.push(student);
    },
    del : function(index){
        this.studentList.splice(index, 1);
    }
}
}
</script>
<style>
</style>