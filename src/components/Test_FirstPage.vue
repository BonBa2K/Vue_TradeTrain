<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="page-content row justify-content-center align-items-center">
                    <div class="col-4 h-100 d-flex align-items-center justify-content-center">
                        <div class="card">
                            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center">
                                <img src="..\assets\BlackSmith.png" class="card-img-top" alt="">
                            </div>
                            <router-link
                                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                                to="">
                                <img src="..\assets\trade.png" alt="">
                                <div class="m-0 card_word">Trading<br> Academy</div>
                            </router-link>
                            <ul class="list-group p-0  list-group-flush justify-content-center">
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Course
                                    -</router-link>
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Forum
                                    -</router-link>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 h-100 d-flex align-items-center justify-content-center">
                        <div class="card">
                            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center">
                                <img src="..\assets\tdtn_logo.png" class="card-img-top" alt="">
                            </div>
                            <router-link
                                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                                to="/GameLounge">

                                <img src="..\assets\lobby.png" alt="">
                                <div class="m-0 card_word text-decoration-none" to="">Trading<br> Game</div>
                            </router-link>
                            <ul class="list-group p-0 list-group-flush justify-content-center">
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Light Mode
                                    -</router-link>
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Mission
                                    Mode -</router-link>
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Free Mode
                                    -</router-link>
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">-
                                    Competition -</router-link>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 h-100 d-flex align-items-center justify-content-center">
                        <div class="card">
                            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center">
                                <img src="..\assets\EX_1.png" class="card-img-top" alt="">
                            </div>
                            <router-link
                                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                                to="">
                                <img src="..\assets\NFT.png" alt="">
                                <div class="m-0 card_word text-decoration-none" to="">Trading<br> Tool</div>
                            </router-link>
                            <ul class="list-group p-0 list-group-flush justify-content-center">
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">-Trading
                                    Bot-</router-link>
                                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">-Copy
                                    Trade-</router-link>
                            </ul>
                        </div>
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
    margin-top: 125px;
}

.list-group-flush .list-group-item {
    border-width: 0;
}

.card {
    width: 100%;
    height: 80%;
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    transition: transform 0.4s ease;
}

.card_word {
    background: none;
    color: rgb(253, 208, 96);
    font-size: 15px;
    font-weight: 700;
}

.card-body {
    height: 25%;
}

.card-body img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
}

.list-group {
    height: 45%;
}

.card:hover {
    transform: scale(1.05);
}

.card-title:hover .card_word {
    color: white;
}

.card-title:hover {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    color: white;
}

.list-group a:hover {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    color: white;
}
</style>