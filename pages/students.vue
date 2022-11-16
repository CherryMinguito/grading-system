<template>
  <div>
      <Sidebar/>
      <Students/>
  </div>
</template>

<script>
import Students from '../components/Students.vue';
import Sidebar from '../components/Sidebar.vue';
export default {
    name: "StudentPage",
    components: { Students , Sidebar }
}
</script>