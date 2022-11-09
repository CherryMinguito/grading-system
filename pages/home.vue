<template>
    <div>
        {{ex()}}
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
                <b-col class="mt-5">
                    <h3 class="text-center">Students</h3>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="mx-5">
                    <ul v-for="student, count in studentList" :key="student.id">
                        <li>
                            {{getFullDetails(student)}}
                        </li>
                    </ul>
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
            getFullDetails(student){
                return student.firstName + " " + student.lastName + " @ " + student.address;
            },
            ex(){
                localStorage.setItem("students", JSON.stringify(this.studentList));
            }
        }
    }
</script>