<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="page-content row justify-content-center align-items-center">
                    <div class="overflow-auto me-4">
                        <router-link class="card w-100 mb-2 mx-0 align-items-center text-decoration-none" to="">
                            <div class="m-0 d-flex flex-column card-body p-0 justify-content-center w-75">
                                <p class="m-0 fs-5">Light Mode: New Comers</p>
                                <p class="m-0 fw-light" href="">For those who have no experienced on Trading<br>Reward:
                                    {xxxx}
                                </p>
                            </div>
                        </router-link>
                        <router-link class="card w-100 mb-2 mx-0 align-items-center text-decoration-none" to="">
                            <div class="m-0 d-flex flex-column card-body p-0 justify-content-center w-75">
                                <p class="m-0 fs-5">Mission Mode: Experienced Traders </p>
                                <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward:
                                    {xxxx}
                                </p>
                            </div>
                        </router-link>
                        <router-link class="card w-100 mb-2 mx-0 align-items-center text-decoration-none" to="">
                            <div class="m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center w-75">
                                <p class="m-0 fs-5">Free Mode: Professional Traders</p>
                                <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward:
                                    {xxxx}
                                </p>
                            </div>
                        </router-link>
                        <router-link class="card w-100 mb-2 mx-0 align-items-center text-decoration-none" to="">
                            <div class="m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center w-75">
                                <p class="m-0 fs-5">Competition</p>
                                <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward:
                                    {xxxx}
                                </p>
                            </div>
                        </router-link>
                    </div>
                    <div class="player_card">
                        <div class="card-body m-0 p-0 d-flex flex-row justify-content-center align-items-start w-100">
                            <div class="row w-100 mt-3 d-flex justify-content-evenly">
                                <router-link to="/"
                                    class="nav-item w-auto px-0 d-flex justify-content-center align-items-center text-decoration-none">
                                    <div class="my-2 mx-4">Personal Profile</div>
                                </router-link>
                                <router-link to="/"
                                    class="nav-item w-auto px-0 d-flex justify-content-center align-items-center text-decoration-none">
                                    <div class="my-2 mx-4" style="">Leaderboard</div>
                                </router-link>
                            </div>
                        </div>
                        <img src="..\assets\BlackSmith.png" alt="Image Alt Text" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.page-content {
    height: calc(100vh - 200px);
    margin-top: 125px
}

.overflow-auto {
    width: 55%;
    height: 80%;
}

.card {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    transition: transform 0.4s ease;
    color: rgb(253, 208, 96);
    height: 35%
}

.card:hover {
    background: linear-gradient(180deg, #af9262, #957c54);
}

.player_card {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    transition: transform 0.4s ease;
    color: rgb(253, 208, 96);
    width: 35%;
    height: 80%;
}

.nav-item {
    color: rgb(253, 208, 96);
    font-size: 20px;
    height: 46px
}

.nav-item:hover {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    color: white;
}


p {
    background: none;
    color: rgb(253, 208, 96);
    font-size: 15px;
    font-weight: 700;
}
</style>