<template>
    <div class="container">
            <b-button v-b-modal.modal-1 class="my-5" variant="outline-primary">Add New Student +</b-button>
            <b-modal class="modal" id="modal-1" title="Add New Student" hide-footer>
                <b-input-group>
                    <template #prepend>
                        <b-input-group-text >Student ID</b-input-group-text>
                    </template>
                    <b-form-input id="studId" v-model="studId"></b-form-input>
                </b-input-group>
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
                    <th>Stud ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    <tr v-for="student, count in studentList" :key="student.id">
                        <td>{{student.studId}}</td>
                        <td>{{student.firstName}}</td>
                        <td>{{student.lastName}}</td>
                        <td>{{student.studAddress}}</td>
                        <td>
                            <div style="width:25px">
                                <svg v-b-modal.modal-edit @click="editStudent(student)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-5 h-5"><path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" /></svg>
                            </div>
                            <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                            <b-input-group>
                                <template #prepend>
                                    <b-input-group-text >Student ID</b-input-group-text>
                                </template>
                                <b-form-input id="studId" v-model="studId"></b-form-input>
                            </b-input-group>
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
                                <button type="button" id="btn_add" class="btn btn-success" v-on:click="updateStudent(count)">Update Student</button>
                            </div>
                            </b-modal>
                        </td>
                        <td>
                            <div style="width:25px" class="ml-3">
                                    <svg @click="deleteStudent(count)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" class="w-5 h-5"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" /></svg>
                            </div>
                        </td>
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
            return student.studId + " " + student.firstName + " " + student.lastName + " " + student.studAddress;
        },
        addStudent(){
            let student = {
                studId: this.studId,
                firstName: this.firstname,
                lastName: this.lastname,
                studAddress: this.address,
            }
            this.studentList.push(student);
        },
        deleteStudent(count)
        {
            this.studentList.splice(count, 1);
        },
        editStudent(student, event)
        {
            this.studId = student.studId;
            this.firstname = student.firstName
            this.lastname = student.lastName;
            this.address = student.address;
        },
        updateStudent(count)
        {
            let student = {
                studId: this.studId,
                firstName: this.firstname,
                lastName: this.lastname,
                studAddress: this.address,
            }
            this.studentList.push(student);
            this.studentList.splice(count, 1);
        },
    }
}
</script>