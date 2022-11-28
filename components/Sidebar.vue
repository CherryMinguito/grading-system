<template>
    <div>
        <b-container>
            <b-row>

            </b-row>
        </b-container>
        <title>Welcome</title>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                <h4 class="text-white">Collapsed content</h4>
                <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
        </button>
                <a class="navbar-brand" href="#">DASHBOARD</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>li>
                <div></div><div></div>
                <router-link to="/students">STUDENTS</router-link>
                <router-link to="/">LOGOUT</router-link><br>
            </nav>
        </div>
        
    </div>
</template>

<script>
    export default{

    }
</script>
<style>
.btn{
    margin-left: 1100px;
}
.welcome{
    margin-left: 45%;
    margin-top: 10%;

}
</style>