<template>
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
        crossorigin="anonymous">
        <title>Welcome</title>
        <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                <h4 class="text-white">Collapsed content</h4>
                <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="Home" style="margin-left: 20px; font-size:20px"><b>Grading System</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style="margin-left: 1000px">
                        <a class="nav-item nav-link active" href="dashboard">Dashboard <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link active" href="Lists" style="margin-left: 20px">Students</a>
                        <a class="nav-item nav-link active" href="Login" style="margin-left: 270px">Logout</a>
                    </div>
                </div>
            </nav>
        </div>
        
    <div>
        <h3 class="welcome">Welcome to Dashboard</h3>
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