<template>
    <div class="row d-flex justify-content-center align-items-center" style="margin:15px auto">
        <div class="overflow-auto h-100 me-4" style="width:55%">
            <div class="card w-100 mb-2 mx-0 justify-content-center align-items-center" style="height: 35%">
                <a class="card-title m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-75"
                    href="">
                    <p class="m-0 fs-4 fw-bold">Light Mode: New Comers</p>
                    <p class="m-0 fw-light" href="">For those who have no experienced on Trading<br>Reward: {xxxx}</p>
                </a>
            </div>
            <div class="card w-100 mb-2 mx-0 justify-content-center align-items-center" style="height: 35%">
                <a class="card-title m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-75"
                    href="">
                    <p class="m-0 fs-4 fw-bold">Mission Mode: Experienced Traders </p>
                    <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward: {xxxx}</p>
                </a>
            </div>
            <div class="card w-100 mb-2 mx-0 justify-content-center align-items-center" style="height: 35%">
                <a class="card-title m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-75"
                    href="">
                    <p class="m-0 fs-4 fw-bold">Free Mode: Professional Traders</p>
                    <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward: {xxxx} </p>
                </a>
            </div>
            <div class="card w-100 mb-2 mx-0 justify-content-center align-items-center" style="height: 35%">
                <a class="card-title m-0 d-flex flex-column card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-75"
                    href="">
                    <p class="m-0 fs-4 fw-bold">Competition</p>
                    <p class="m-0 fw-light" href="">For those who want to learn stuff step by step<br>Reward: {xxxx} </p>
                </a>
            </div>
        </div>
        <div class="card h-100" style="width: 35%">
            <div class="card-title card-body m-0 p-0 d-flex flex-row justify-content-center align-items-start w-100">
                <div class="row w-100 mt-3 d-flex justify-content-evenly">
                    <router-link to="/"
                        class="nav-item w-auto px-0 d-flex justify-content-center align-items-center text-decoration-none"
                        style="height:46px">
                        <div class="my-2 mx-4 nav-link" style="">Personal Profile</div>
                    </router-link>
                    <router-link to="/"
                        class="nav-item w-auto px-0 d-flex justify-content-center align-items-center text-decoration-none"
                        style="height:46px">
                        <div class="my-2 mx-4 nav-link" style="">Leaderboard</div>
                    </router-link>
                </div>
            </div>
            <img src="..\assets\BlackSmith.png" alt="Image Alt Text" class="img-fluid">

        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.row {
    height: calc(100% - 100px);
}

.card {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    transition: transform 0.4s ease;
    color: rgb(253, 208, 96);
}

.nav-item {
    color: rgb(253, 208, 96);
    font-size: 20px;
}

.nav-item:hover {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    color: white;
}
</style>