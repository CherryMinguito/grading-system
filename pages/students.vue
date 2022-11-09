<template>
    <div>
        <b-container-fluid>
            <b-row>
                <b-col class="text-start">
                    <b-navbar toggleable type="dark" variant="dark">
                        <b-navbar-toggle target="navbar-toggle-collapse">
                            <template #default="{ expanded }">
                                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                                <b-icon v-else icon="chevron-bar-down"></b-icon>
                            </template>
                        </b-navbar-toggle>
                        
                        <b-collapse id="navbar-toggle-collapse" is-nav>
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item> <router-link to="/home">Home</router-link> </b-nav-item>
                            </b-navbar-nav>
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item> <router-link to="/students">Students</router-link> </b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>
                        
                        <b-navbar-brand href="#">Enrollment</b-navbar-brand>
                        <b-navbar-brand><router-link to="/">Logout</router-link></b-navbar-brand>
                    </b-navbar>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="m-5">
                    <b-button v-b-modal.modal-add variant="info">New Student</b-button>
                </b-col>

                <b-modal class="modal" id="modal-add" title="New Student" hide-footer>
                    <b-container>
                        <b-row class="p-3">
                            <b-col>
                                <b-form-input v-model="fname" id="fname" placeholder="First Name"></b-form-input>
                            </b-col>
                            <b-col>
                                <b-form-input v-model="lname" id="lname" placeholder="Last Name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mx-1 pb-3">
                            <b-col>
                                <b-form-input v-model="address" id="address" placeholder="Address"></b-form-input>
                            </b-col>
                        </b-row>
                    </b-container>                    
                    <div id="modal-1___BV_modal_footer_" class="modal-footer">
                        <button type="button" class="btn btn-danger">Cancel</button>
                        <button type="button" id="btn_add" class="btn btn-success" @click="addStudent">Add</button>
                    </div>
                </b-modal>
            </b-row>
            <b-row>
                <b-col>
                    <h3 class="text-center">Student List</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="text-center mx-5">
                    <table class="table table-stripe">
                        <thead>
                            <th>ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Address</th>
                            <th colspan="2">Action</th><!-- 
                            <th>Date Enrolled</th> -->
                        </thead>
                        <tbody>
                            <tr v-for="student, count in studentList" :key="student.id">
                                <td>{{student.id}}</td>
                                <td>{{student.lastName}}</td>
                                <td>{{student.firstName}}</td>
                                <td>{{student.address}}</td>
                                <td class="text-end">
                                    <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button>

                                    <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                                        <b-container>
                                            <b-row class="p-3">
                                                <input type="hidden" id="idet"/>
                                                <b-col>
                                                    <b-form-input v-model="fname" id="fnamedit" placeholder="First Name"></b-form-input>
                                                </b-col>
                                                <b-col>
                                                    <b-form-input v-model="lname" id="lnamedit" placeholder="Last Name"></b-form-input>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mx-1 pb-3">
                                                <b-col>
                                                    <b-form-input v-model="address" id="addressedit" placeholder="Address"></b-form-input>
                                                </b-col>
                                            </b-row>
                                        </b-container>                    
                                        <div id="modal-1___BV_modal_footer_" class="modal-footer">
                                            <button type="button" class="btn btn-danger">Cancel</button>
                                            <button type="button" id="btn_add" class="btn btn-success" @click="updateStudent()" >Update</button>
                                        </div>
                                    </b-modal>
                                </td>
                                <td>
                                    <b-button @click="deleteStudent(count)" variant="danger">Delete</b-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </b-col>
            </b-row>
        </b-container-fluid>
    </div>
</template>
<script>
    export default{
        name: 'StudentsPage',
        created() {
            this.getStudents();
        },
        data(){
            return{
                fname: '',
                lname: '',
                address: '',
                boxOne: '',
                boxTwo: '',
                studentList: []
            }
        },
        methods: {
            getStudents(){
                if (process.browser){
                    var list = JSON.parse(localStorage.getItem("students"));
                }

                this.studentList = (list !== null)? list : [];
            },
            addStudent(){
                /* var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = mm + '/' + dd + '/' + yyyy; */
                let student = {};

                if(this.studentList === null)
                {
                    student = {
                        id: 1,
                        firstName: this.fname,
                        lastName: this.lname,
                        address: this.address
                    }
                }
                else
                {
                    student = {
                        id: this.studentList[this.studentList.length - 1].id + 1,
                        firstName: this.fname,
                        lastName: this.lname,
                        address: this.address
                    }
                }

                this.studentList.push(student);
                this.updateStorage();
                this.clear();
                this.showMsgBoxTwo();
            },
            editStudent(student, event)
            {
                this.idet = student.id;
                this.fname = student.firstName
                this.lname = student.lastName;
                this.address = student.address;
            },
            updateStudent()
            {
                for(var i = 0; i < this.studentList.length; i++)
                {
                    if(this.studentList[i].id === this.idet)
                    {
                        this.studentList[i].firstName = this.fname;
                        this.studentList[i].lastName = this.lname;
                        this.studentList[i].address = this.address;
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
                this.$bvModal.msgBoxOk('Operation successful.', {
                    title: 'Status',
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
                this.address = '';
                this.fnamedit = '';
                this.lnamedit = '';
                this.addressedit = '';
            }
        }
    }
</script>