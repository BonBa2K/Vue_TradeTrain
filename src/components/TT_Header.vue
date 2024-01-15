<template>
    <div class="tdtn_nav row align-items-center">
        <router-link to="/" class="col-auto h-100 d-flex justify-content-start align-items-center">
            <img class="tdtn_logo h-75" src="..\assets\tdtn_logo.png" alt="">
        </router-link>
        <div class="col d-flex justify-content-end align-items-center">
            <nav class="nav nav-pills">
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2">About Us</div>
                </router-link>
                <router-link to="/GameLounge"
                    class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2">Games</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2">Tools</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2">Academy</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2" style="line-height: 75%;">Connect<br>Wallet</div>
                </router-link>
                <router-link to="/" class="nav-item d-flex justify-content-center align-items-center text-decoration-none">
                    <div class="nav-link p-2">Personal</div>
                </router-link>
                <div class="close_nav dropdown align-items-center">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">三</a>
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
@media screen and (orientation: landscape) {
    .nav-link {
        font-size: 3vh;
    }

    .tdtn_nav {
        height: 15vh;
    }
}

@media screen and (orientation: portrait) {
    .nav-link {
        font-size: 2vw;
    }

    .tdtn_nav {
        height: 5vh;
    }
}

.nav-link {
    color: #FDD060;
}

.tdtn_nav {
    background-color: rgba(67, 61, 51, .7);
}

.close_nav {
    background-color: rgba(67, 61, 51, 0.879);

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