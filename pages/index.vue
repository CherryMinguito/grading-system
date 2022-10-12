<template>
    <div>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
        crossorigin="anonymous">
        <title>Login Page</title>
        <div class="box">
            <div class="inside">
                <h1 class="logo">LOGIN</h1><br><br>
                <form class="container" method="POST" action="dashboard">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div><br>
                    <button type="submit" class="btn btn-success">LOGIN</button>
                </form>
            </div>
        
    </div>
    </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style>
.box{
    width: 100%;
    height: 100%;
}
.inside{
    width: 350px;
    margin: auto;
    padding-top: 150px;
}
.inside .logo{
    margin-left: 30%;
    letter-spacing: 10px;
}
.inside .btn{
    margin-left: 15%;
    width: 70%;
}
</style>