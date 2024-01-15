<template>
    <div class="three_card row d-flex justify-content-center align-items-center">
        <div class="card ">
            <a class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100"
                href="" style="height: 25%;">
                <img src="..\assets\trade.png" alt="">
                <div class="m-0 card_word">Trading<br> Academy</div>
            </a>
            <ul class="list-group p-0  list-group-flush justify-content-center" style="height: 45%;">
                <a class="p-0 card_word list-group-item list-group-item-action" href="">- Course -</a>
                <a class="p-0 card_word list-group-item list-group-item-action" href="">- Forum -</a>
            </ul>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
@media screen and (orientation: landscape) {
    .three_card {
        height: 77vh;
    }

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
        height: 87vh;
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