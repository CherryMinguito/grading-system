
  <template>
  <div>
  <Sidebar/>
        <div class="container">
          <h1>This is a Home Page</h1>
          <div>
  <!-- Using modifiers -->
  <b-button v-b-modal.my-modal>Click Me!</b-button>

  <!-- The modal -->
  <b-modal id="my-modal">Add Student:
    <br>
    <input v-on:keyup.enter="students.push({id:students.length + 1, Fullname: newStud})"
     v-model="newStud" placeholder="Full Name: " />
    <button v-on:click="students.push({id:students.length + 1, Fullname: newStud})"
            class="btn btn-secondary">
            Add Students</button>
    

  </b-modal>
  <br>
  <br>
  <b-form-input v-model="editStud" id="idet" placeholder="Full Name"></b-form-input>
  <br>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Full Name</th>
      <th>Actions</th>
    

    </tr>
  </thead>
  <tbody>
    
    <br>
    
    <tr v-for="(item, id) in students" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.Fullname}}</td>
      <td class="actionbtns">
        <button class="addbtn" @click="editStude(item)">Assign</button>
        <button class="edtbtn" @click="updateStud()">Update</button>
        <button class="delbtn" @click ="deleteStud(item)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
        </div>

        <button class="fetchbtn" @click="fetchStud()">Fetch</button>
  </div>
</template>

<style>
div.container{
  height: 100px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.addbtn{
  background-color: #4CAF50; /* Green background */
    border: none; /* Remove border */
    color: white; /* White text */
    padding: 5px 5px; /* Some padding */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Make the button inline */
    font-size: 16px; /* Set font size */
    margin: 4px 2px; /* Add some margin */
    cursor: pointer; /* Add a pointer cursor on hover */
    transition: background-color 0.3s ease;
}
.edtbtn
{
  background-color: #bada08; /* Green background */
    border: none; /* Remove border */
    color: white; /* White text */
    padding: 5px 5px; /* Some padding */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Make the button inline */
    font-size: 16px; /* Set font size */
    margin: 4px 2px; /* Add some margin */
    cursor: pointer; /* Add a pointer cursor on hover */
    transition: background-color 0.3s ease;
}
.delbtn{
  background-color: #f5540a; /* Green background */
    border: none; /* Remove border */
    color: white; /* White text */
    padding: 5px 5px; /* Some padding */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Make the button inline */
    font-size: 16px; /* Set font size */
    margin: 4px 2px; /* Add some margin */
    cursor: pointer; /* Add a pointer cursor on hover */
    transition: background-color 0.3s ease;
}
.fetchbtn{
  background-color: #4CAF50; /* Green background */
    border: none; /* Remove border */
    color: white; /* White text */
    padding: 5px 5px; /* Some padding */
    text-align: center; /* Center text */
    text-decoration: none; /* Remove underline */
    display: inline-block; /* Make the button inline */
    font-size: 16px; /* Set font size */
    margin-left: 450px;
    cursor: pointer; /* Add a pointer cursor on hover */
    transition: background-color 0.3s ease;
}
.actionbtns, .fetchbtn
{
  display: flex;
  justify-content: center;
  align-items: center;
}

button:hover{
  background-color: #030703;
}
table{
  width:100%;
}



</style>




<script>
//studInput.reset();
import Sidebar from "./sideBar.vue";
import axios from 'axios';

export default {
  //name: 'NuxtLink',
  //extends: Vue.component('RouterLink'),
  mounted() { console.log(this.fetchStud()) },


  async created() {
    var list = await this.fetchStud();
    this.students = list.students;
    },


  data() {
    return {
     // updateStud: '',
      editStud:'',
      newStud: '',
      students: [
      {id: 1, Fullname: 'Osmand Hadjiamer S. Decampong'}
      ]
      
    }
  },

  methods:{

    editStude(item, event){

      this.idet = item.id;
    },

    updateStud(){
      
      for(var i = 0; i < this.students.length; i++)
                {
                  if(this.students[i].id === this.idet)
                  {
                  this.students[i].Fullname = this.editStud;
                  }
                }

    },

    deleteStud(item , event){

      this.idet = item.id;

      for(var i = 0; i < this.students.length; i++)
                {
                  if(this.students[i].id === this.idet)
                  {
                  this.students.splice(i,1);
                  }
                }
      

    },
  

    async fetchStud(){
            const students= await this.$axios.$get('/getStudents')

         
            return students;
        } ,
        
  
  },

  
  
  name: 'HomePage',
  components: {
    Sidebar,
  }

}
</script>
