<template>
    <div class="tdtn_nav row align-items-center">
        <router-link to="/" class="col-auto h-100 d-flex justify-content-start align-items-center">
            <img class="tdtn_logo h-75" src="..\assets\tdtn_logo.png" alt="">
        </router-link>
        <div class="col d-flex justify-content-end align-items-center">
            <nav class="nav nav-pills">
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1">About Us</div>
                </router-link>
                <router-link to="/GameLounge"
                    class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1">Games</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1">Tools</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1">Academy</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1" style="line-height: 75%;">Connect<br>Wallet</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link px-2 py-1">Personal</div>
                </router-link>
                <div class="close_nav d-flex dropdown align-items-center">
                    <a class="nav-link dropdown-toggle py-0" data-bs-toggle="dropdown" role="button"
                        aria-expanded="false">三</a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <div><a class="dropdown-item" href="">Action</a></div>
                        <div><a class="dropdown-item" href="">Another action</a></div>
                        <div><a class="dropdown-item" href="">Something else here</a></div>
                        <div>
                            <hr class="dropdown-divider">
                        </div>
                        <div><a class="dropdown-item" href="">Separated link</a></div>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script></script>

<style scoped>
@media screen and (max-width: 520px) and (orientation: portrait) {
    .nav-link {
        font-size: min(1vh, 7px);
    }
}

@media screen and (min-width: 521px) and (orientation: portrait) {
    .nav-link {
        font-size: 13px;
    }
}

.nav-link {
    color: #FDD060;
}

.tdtn_nav {
    height: 35px;
    background-color: rgba(67, 61, 51, .7);
}

.nav-link:hover {
    color: #FDD060;
    background: linear-gradient(180deg, rgb(90, 82, 69), rgba(67, 61, 51));
}

.nav-item :hover {
    background: linear-gradient(180deg, rgb(90, 82, 69), rgba(67, 61, 51));
    color: white;
}

.dropdown-item {
    color: rgb(253, 208, 96);
}

.dropdown-menu {
    background-color: rgba(67, 61, 51, 0.879);
}
</style>