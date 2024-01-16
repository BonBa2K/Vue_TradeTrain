<template>
    <div class="three_card row d-flex justify-content-center align-items-center">
        <div class="card ">
            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center" style="height: 30%;">
                <img src="..\assets\BlackSmith.png" class="card-img-top" alt="">
            </div>
            <router-link
                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                to="" style="height: 25%;">
                <img src="..\assets\trade.png" alt="">
                <div class="m-0 card_word">Trading<br> Academy</div>
            </router-link>
            <ul class="list-group p-0  list-group-flush justify-content-center" style="height: 45%;">
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Course -</router-link>
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Forum -</router-link>
            </ul>
        </div>
        <div class="card">
            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center" style="height: 30%;">
                <img src="..\assets\tdtn_logo.png" class="card-img-top" alt="">
            </div>
            <router-link
                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                to="/GameLounge" style="height: 25%;">

                <img src="..\assets\lobby.png" alt="">
                <div class="m-0 card_word text-decoration-none" to="">Trading<br> Game</div>
            </router-link>
            <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Light Mode -</router-link>
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Mission Mode
                    -</router-link>
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Free Mode -</router-link>
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">- Competition
                    -</router-link>
            </ul>
        </div>
        <div class="card">
            <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center" style="height: 30%;">
                <img src="..\assets\EX_1.png" class="card-img-top" alt="">
            </div>
            <router-link
                class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                to="" style="height: 25%;">
                <img src="..\assets\NFT.png" alt="">
                <div class="m-0 card_word text-decoration-none" to="">Trading<br> Tool</div>
            </router-link>
            <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">-Trading Bot-</router-link>
                <router-link class="p-0 card_word list-group-item list-group-item-action" to="">-Copy Trade-</router-link>
            </ul>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
@media screen and (orientation: landscape) {

    .card {
        height: 39.5vw;
        width: 30vw;
        max-height: 70vh;
    }

    .card_word {
        font-size: 3vh;
    }
}

@media screen and (orientation: portrait) {
    .three_card {
        flex-direction: column;
    }

    .card {
        height: 26vh;
        width: 32.5vh;
        max-width: 90vw;
        margin-top: 2vh;
    }

    .card_word {
        font-size: 2vh;
    }
}

.three_card {
    height: calc(100% - 70px);
}

.list-group-flush .list-group-item {
    border-width: 0;
}

.card {
    background: linear-gradient(180deg, #957c53, #6e5b3d);
    margin-left: 2vw;
    transition: transform 0.4s ease;
}

.card_word {
    background: none;
    color: rgb(253, 208, 96);
}

.card-body img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
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