<template>
    <div class="container">
            <b-button v-b-modal.modal-1 class="my-5" variant="outline-primary">Add New Student +</b-button>
            <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
                <b-input-group>
                    <template #prepend>
                        <b-input-group-text >First Name</b-input-group-text>
                    </template>
                    <b-form-input id="firstname" v-model="firstname"></b-form-input>
                </b-input-group>
                <b-input-group>
                    <template #prepend>
                        <b-input-group-text >Last Name</b-input-group-text>
                    </template>
                    <b-form-input id="lastname" v-model="lastname"></b-form-input>
                </b-input-group>
                <b-input-group>
                    <template #prepend>
                        <b-input-group-text >Address&nbsp;&nbsp;&nbsp;&nbsp;</b-input-group-text>
                    </template>
                    <b-form-input id="address" v-model="address"></b-form-input>
                </b-input-group>
                <div id="modal-1___BV_modal_footer_" class="modal-footer">
                    <button type="button" id="btn_add" class="btn btn-primary" v-on:click="addStudent()">Add Student</button>
                </div>
            </b-modal>
            <h3>This is Students Pages</h3><br>
            <table class="table">
                <thead class="thead-dark">
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    <tr v-for="student, count in studentList" :key="student.id">
                        <td>{{count+1}}</td>
                        <td>{{student.firstName}}</td>
                        <td>{{student.lastName}}</td>
                        <td>{{student.studAddress}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
export default{
    name: 'Students',
data(){
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
                id: this.studentList.length + 1,
                firstName: this.firstname,
                lastName: this.lastname,
                studAddress: this.address,
            }
            this.studentList.push(student);
        }
    }
}
</script>