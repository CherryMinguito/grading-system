<template>
    <div class="container">
            <b-button v-b-modal.modal-1 class="my-5" variant="outline-primary"><svg style="width:25px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" /></svg>
                Add New Student
            </b-button>
            <h3>This is Students Pages</h3>
            <br>
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
                        <td>{{student.address}}</td>
                        <td>
                            <div style="width:25px">
                                <svg v-b-modal.modal-edit @click="deleteStudent(count)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-5 h-5"><path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" /></svg>
                            </div>
                        </td>
                        <td>
                            <div style="width:25px" class="ml-3">
                                    <svg @click="deleteStudent(count)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" class="w-5 h-5"><path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" /></svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <!-- Add new Student Modal -->
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

            <!-- Edit Student Modal -->
            <b-modal  class="modal" id="modal-edit" title="Edit Student" hide-footer >
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
                    <button type="button" id="btn_add" class="btn btn-success" v-on:click="updateStudent()">Update Student</button>
                </div>
            </b-modal>
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
            return student.studId + " " + student.firstName + " " + student.lastName + " " + student.address;
        },
        addStudent(){
            let student = {
                studId: this.studId,
                firstName: this.firstname,
                lastName: this.lastname,
                address: this.address,
            }
            this.studentList.push(student);
        },
        deleteStudent(count)
        {
            this.studentList.splice(count, 1);
        },
        updateStudent() {
            let student = {
                studId: this.studId,
                firstName: this.firstname,
                lastName: this.lastname,
                address: this.address,
            }
            this.studentList.push(student);
        },
    }
}
</script>