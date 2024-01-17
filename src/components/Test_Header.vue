<template>
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tdtn_nav align-items-center" style="height: 110px;">
                        <router-link to="/" class="logo">
                            <img src="..\assets\tdtn_logo.png" alt="" style="width: 191px;">
                        </router-link>
                        <!-- <div class="search-input">
                            <form id="search" action="#">
                                <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword"
                                    onkeypress="handle">
                                <i class="fa fa-search"></i>
                            </form>
                        </div> -->
                        <ul class="nav">
                            <li>
                                <router-link to="/" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1">About Us</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/GameLounge" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1">Games</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1">Tools</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1">Academy</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1" style="line-height: 75%;">
                                        Connect<br>Wallet</div>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/" class="route_L text-decoration-none text-center">
                                    <div class="nav-link px-2 py-1">Personal</div>
                                </router-link>
                            </li>
                            <li class="">
                                <div class="close_nav">
                                    <a class="nav-link dropdown-toggle px-2 py-1" data-bs-toggle="dropdown" role="button"
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script></script>

<style scoped>
@media screen and (max-width: 520px) and (orientation: portrait) {
    .nav-link {
        font-size: 14px;
    }
}

@media screen and (min-width: 521px) and (orientation: portrait) {
    .nav-link {
        font-size: 13px;
    }
}

#search input {
    background-color: #27292a;
    height: 46px;
    border-radius: 23px;
    border: none;
    color: #666;
    font-size: 14px;
    padding: 0px 15px 0px 45px;
}

.nav-link {
    color: #FDD060;
}

.logo {
    flex-basis: 25%;
    margin-right: 5%;
}

.nav {
    display: inline-flex;
    flex-basis: 70%;
    justify-content: flex-end;
    vertical-align: middle;
    text-align: right;
    margin-top: 0px;
    margin-right: 0px;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    position: relative;
    z-index: 999;
}

.tdtn_nav {
    background-color: rgba(67, 61, 51, .7);
    min-height: 80px;
    background: transparent;
    display: flex;
    padding: 15px 0px;
    border-radius: 50px;
}

.nav-link:hover {
    color: #FDD060;
    background: linear-gradient(180deg, rgb(90, 82, 69), rgba(67, 61, 51));
}

.route_L :hover {
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