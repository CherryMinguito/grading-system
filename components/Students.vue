<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <Sidebar/>
      <h1>This is Students Page</h1>
        <div>
            <form action="">
                <b-button class="btn btn-primary" v-b-modal.modal-1>Add Student</b-button>
                <b-modal id="modal-1" title="Add Student" >
                    <label for="fname">Firstname</label>
                    <input type="text"><br>
                    <label for="lname">Lastname</label>
                    <input type="text">
                </b-modal>
            </form>
        </div>
    </div>
    
</template>
<script>
import Sidebar from './Sidebar';
export default {
    name: 'DashboardPage',
    components:{
        Sidebar,
    },
}
</script>
<style>
h1{
    display: flex;
}
</style>