<template>
    <div class="container p-3 mx-auto">
        <div>
            <b-nav pills>
                <b-nav-item active>
                    <NuxtLink to="/Home">
                        <div class="text-white">
                            Home
                        </div>    
                    </NuxtLink>
                </b-nav-item>
                
                <b-nav-item>
                    <NuxtLink to="/Students">
                            Students
                    </NuxtLink>    
                </b-nav-item>
                
                <b-nav-item>
                    <NuxtLink to="/Dashboard">
                            Dashboard
                    </NuxtLink>
                </b-nav-item>

                <b-nav-item>
                    <NuxtLink to="/">
                            Logout
                    </NuxtLink>
                </b-nav-item>
            </b-nav>
            </div>
        </div>
</template>
