<!-- Please remove this file from your project -->
<template>

    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
        <Sidebar />
        <div class="text-center">
            <li class="list-group-item" v-for="student in StudentsList" :key="student.id">
                <h1>
                    {{ getFullName(student)}} 
                    <button v-b-modal.modal-del @click="sendID(student)" class="btn btn-danger">Delete</button>
                    <button v-b-modal.modal-upd @click="sendID(student)" class="btn btn-warning">Update</button>
                    <input type="hidden" id="idtodel" v-model="idtodel"  value="3" class="form-control">
                </h1>           
            </li>
        </div>

        <b-modal  id="modal-del" title="BootstrapVue">
                 <div class="row">
                       <h3>Are you sure you want to delete data?</h3>
                       <h3>{{idtodel.id}}</h3>
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <h1></h1>
                        <b-button @click="deleteStudent(idtodel)" class="btn btn-success">Yes</b-button>
                    </div>
        </b-modal>

        <b-modal  id="modal-upd" title="BootstrapVue">
            <div class="row">
                <h3>{{idtodel.id}}</h3>
                        <div class="col">
                            <input type="text" id="fname" v-model="queueStudent.firstname" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueStudent.lastname" class="form-control" placeholder="Last name">
                        </div>
                        <input type="hidden" id="lname" v-model="queueStudent.id" value="0" class="form-control">
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <button @click="updateStudent(idtodel)" class="btn btn-success">Submit</button>
                    </div>
        </b-modal>
        
        <div class="text-center m-3">
            <b-button v-b-modal.modal-1>Add Students</b-button>
        </div>
        
        <div>
            <b-modal id="modal-1" title="BootstrapVue">
                 <div class="row">
                        <div class="col">
                            <input type="text" id="fname" v-model="queueStudent.firstname" class="form-control" placeholder="First name">
                        </div>
                        <div class="col">
                            <input type="text" id="lname" v-model="queueStudent.lastname" class="form-control" placeholder="Last name">
                        </div>
                        <input type="hidden" id="lname" v-model="queueStudent.id" value="0" class="form-control">
                    </div>
                    
                    <div class="mt-2 mx-auto">
                        <button @click="saveStudent" class="btn btn-success">Submit</button>
                    </div>
            </b-modal>
        </div>
    </div>
</template>
  
<script>
import Sidebar from './Sidebar.vue'
export default {
    name: 'StudentsPage',
    components: {
        Sidebar,
    },
    data() {
        return {
            StudentsList: [
                {
                    firstName: "Vincent",
                    lastName: "Vicente",
                    id: 1,

                },
                {
                    firstName: "Jhonrex",
                    lastName: "Ortiz",
                    id: 2,

                }
            ],
            queueStudent:[
                {
                    firstName: '',
                    lastName: '',
                    id: 0,
                }
            ],
            idtodel:'',
            
        }
    },
    methods: {
        getFullName(student) {
            return student.id + " " +student.firstName + " " + student.lastName;
        },
        saveStudent(){
           //this.queueStudent.push({...this.StudentsList})
           this.StudentsList.push({firstName:this.queueStudent.firstname, lastName:this.queueStudent.lastname, id:this.StudentsList.length+1})

            // this.queueStudent=''
        //    clearFields()
            
        },
        testDisplay(data){
            return data;
        },
        deleteStudent(idtodel){
                
                // const index = idtodel-1;
                // const index= this.StudentsList.indexOf(idtodel)
                // console.log(index);
                this.StudentsList.splice(this.StudentsList.indexOf(idtodel), 1); // 2nd parameter means remove one item only
                // if (index > -1) { // only splice array when item is found
                //     this.StudentsList.splice(index, 1); // 2nd parameter means remove one item only
                //     }

                // }
                console.log(this.StudentsList)
                this.idtodel=""
                // this.$bvModal.hide(modal-del)
                // hideModal()
        },
        sendID(student){
            this.idtodel=student;
        },
        hideModal() {
        this.$refs['modal-del'].hide()
         },
        clearFields(){
            this.queueStudent=''
        },
        updateStudent(student){
            this.StudentsList.splice(this.StudentsList.indexOf(student), 1, {
            'firstName': this.queueStudent.firstname,
            'lastName': this.queueStudent.lastname,
            'id':student.id,
          })
           
            // const actions = {
            //     updateCheckedEngagements(state, updatedEngagements = []) {
            //         // Create list of ids, to simplify index matching
            //         const ids = updatedEngagements.map(engagement => student.id)
            //         state.engagements = state.engagements.map(engagement => {
            //         // Check if updated engagement matches currently iterated one
            //         const matchedIndex = ids.indexOf(student.id)
            //         // If index matches, we shall replace current item with updated values
            //         if (matchedIndex !== -1) {
            //             return {
            //             ...updatedEngagements[matchedIndex]
            //             }
            //         }
            //         // Return previous value by default
            //         return engagement
            //         })
            //     }
            //     }

            // this.$set(this.StudentsList, student, {firstname:this.queueStudent.firstname, lastName:this.queueStudent.lastname})
            // const val = {
            //     firstname:this.queueStudent.firstname, 
            //     lastName:this.queueStudent.lastname
            // }
            // this.StudentsList.set(student,val)
            // const student ={
            //     firstname: this.queueStudent.firstName,
            //     lastname:this.queueStudent.lastName

            //     this.
            // }

            // console.log(val)
        }
        
    }
}
</script>