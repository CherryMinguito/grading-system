<template>
    <div>
        <b-container-fluid>
            <b-row>
                <b-col class="text-start">
                    <b-navbar toggleable="lg" type="dark" variant="dark">
                        <b-navbar-brand href="Home">Grading System</b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item href=""><NuxtLink to="/Home">Home</NuxtLink></b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-navbar-nav>
                            <b-nav-item href="#"><NuxtLink to="/dashboard">Dashboard</NuxtLink></b-nav-item>
                            <b-nav-item href=""><NuxtLink to="/lists">Students List</NuxtLink></b-nav-item>
                            <b-nav-item href=""><NuxtLink to="/loginpage">Logout</NuxtLink></b-nav-item>
                            </b-navbar-nav>
                        </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="m-5">
                    <b-button v-b-modal.modal-add variant="info">New Student</b-button>
                </b-col>

                <b-modal class="modal" id="modal-add" title="New Student" hide-footer>
                    <b-container>
                        <b-row class="mx-1 pb-3">
                            <b-col>
                                <b-form-input v-model="fname" id="fname" placeholder="First Name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mx-1 pb-3">
                            <b-col>
                                <b-form-input v-model="mname" id="mname" placeholder="Middle Name"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="mx-1 pb-3">
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
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th colspan="2">Action</th>
                        </thead>
                        <tbody>
                            <tr v-for="student, count in studentList" :key="student.id">
                                <td>{{student.id}}</td>
                                <td>{{student.firstName}}</td>
                                <td>{{student.middleName}}</td>
                                <td>{{student.lastName}}</td>
                                <td>{{student.address}}</td>
                                <td class="text-end">
                                    <b-button v-b-modal.modal-edit variant="info" @click="editStudent(student)">Edit</b-button>

                                    <b-modal class="modal" id="modal-edit" title="Edit Student" hide-footer>
                                        <b-container>
                                            <b-row class="mx-1 pb-3">
                                                <input type="hidden" id="idet"/>
                                                <b-col>
                                                    <b-form-input v-model="fname" id="fnamedit" placeholder="First Name"></b-form-input>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mx-1 pb-3">
                                                <input type="hidden" id="idet"/>
                                                <b-col>
                                                    <b-form-input v-model="mname" id="mnamedit" placeholder="Middle Name"></b-form-input>
                                                </b-col>
                                            </b-row>
                                            <b-row class="mx-1 pb-3">
                                                <input type="hidden" id="idet"/>
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
                                            <button type="button" id="btn_add" class="btn btn-success" @click="updateStudent()">Update</button>
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
        name: 'Lists',
        created() {
            //this.getStudents();
        },
        async mounted() {
          var list = await this.fetchStudents();
          this.studentList = list.student;
        },
        data(){
            return{
                fname: '',
                mname: '',
                lname: '',
                address: '',
                boxOne: '',
                boxTwo: '',
                studentList: [{
                  id: 1,
                  firstName: 'John Lloyd',
                  middleName: 'Diongzon',
                  lastName: 'Cornejo',
                  address: 'Mandaue City'}
                ]
            }
        },
        methods: {
            getStudents(){
                if (process.browser){
                    var list = this.fetchStudents();
                }

                this.studentList = (list !== null)? list : [];
            },
            addStudent(){
                let student = {};
                var newID;
                console.log(newID);
                if(this.studentList.length === 0)
                {
                    newID = 1;
                    student = {
                        id: 1,
                        firstName: this.fname,
                        middleName: this.mname,
                        lastName: this.lname,
                        address: this.address,
                    }
                }
                else
                {
                    newID = parseInt(localStorage.getItem("latestID")) + 1;
                    student = {
                        id: newID,
                        firstName: this.fname,
                        middleName: this.mname,
                        lastName: this.lname,
                        address: this.address
                    }
                }
                this.studentList.push(student);
                this.updateStorage(newID);
                localStorage.setItem("latestID", newID);
                this.clear();
                this.showMsgBoxTwo();
            },
            editStudent(student)
            {
                this.idet = student.id;
                this.fname = student.firstName
                this.mname = student.middleName;
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
                        this.studentList[i].middleName = this.mname;
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
                // catch the error 
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
                // catch the error
                })
            },
            updateStorage(){
                localStorage.setItem("students", JSON.stringify(this.studentList));
            },
            clear(){
                this.fname = '';
                this.mname = '';
                this.lname = '';
                this.address = '';
                this.fnamedit = '';
                this.lnamedit = '';
                this.addressedit = '';
            },
            async fetchStudents(){
                const students = await this.$axios.$get('http://localhost:3001/getStudents');
                return students;
           }
        }
    }
</script>