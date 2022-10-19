<template>
    <div class="container">
        <form method="POST" action="dashboard">
            <input type="text" placeholder="Username">
            <input type="text" placeholder="Password">
            <br>
            <button type="submit" class="btn btn-primary">LOGIN</button>
        </form>
    </div>
</template>
<script>
export default {
 
}
</script>
<style>
    .container{
        box-shadow: 5px 8px 8px #888888;
        background-color: rgb(243, 240, 235);
        border-radius: 10px;
        margin-top: 15%;
        padding: 10px;
        height: 30vh;
        width: 50vh;
    }
    form{
        margin-left: 50px;
    }
    form input{
        margin-top: 30px;
        height: 40px;
        width: 270px;
    }
    form button{
        margin-top: 30px;
        margin-left: 85px;
        align-items: center;
        width: 100px;
    }
</style>
