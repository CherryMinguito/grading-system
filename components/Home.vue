
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
  <ul>
    {{newStud}}
    <br>
    {{editStud}}
    <li v-for="(item, id) in students" :key="item.id">{{item.id}} {{item.Fullname}}
    <button @click="updateStud()">Update</button>
    <button v-on:click="students.pop({id:item.id, Fullname: newStud})">Delete</button>
    </li>
  </ul>
</div>
        </div>
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



</style>




<script>
//studInput.reset();
import Sidebar from "./sideBar.vue";

export default {
  //name: 'NuxtLink',
  //extends: Vue.component('RouterLink'),

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
  
    updateStud(){


      for(var i = 0; i < this.students.length; i++)
                {
                  this.students[i].Fullname = this.editStud;
                }

    },

    deleteStud(){


    }

  },
  
  name: 'HomePage',
  components: {
    Sidebar,
  }

}
</script>
