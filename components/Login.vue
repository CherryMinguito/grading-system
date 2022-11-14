<template>
    <div class="container d-flex flex-column min-vh-100  justify-content-center align-items-center">
        <div class="row border border-primary rounded-sm p-4 shadow-lg mt-3 ">
            <div class="col-12 text-center">
                <h1>Welcome</h1>
            </div>
            <div class="col-12">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-check">
                    </div>

                    <div class="col-12 d-flex justify-content-center align-items-center ">
                        <NuxtLink to="/Home">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginNuxt'
}
</script>