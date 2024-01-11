<template>
    <div class="container-fluid" style=" height:95%">
        <div class="tdtn_nav row align-items-center">
            <a class="col-auto h-100 d-flex justify-content-start align-items-center" style="width: 15%;" href="">
                <img class="tdtn_logo h-75" src="..\assets\tdtn_logo.png" alt="">
            </a>
            <div class="col d-flex justify-content-end align-items-center">
                <div class="nav nav-pills">
                    <a class="nav-item d-flex justify-content-center align-items-center text-decoration-none" href="">
                        <div class="nav-link">About Us</div>
                    </a>
                    <a class="nav-item d-flex justify-content-center align-items-center text-decoration-none" href="">
                        <div class="nav-link">About Us</div>
                    </a>
                    <a class="nav-item d-flex justify-content-center align-items-center text-decoration-none" href="">
                        <div class="nav-link" style="line-height: 75%;">Connect<br>Wallet</div>
                    </a>
                    <a class="nav-item d-flex justify-content-center align-items-center text-decoration-none" href="">
                        <div class="nav-link">Personal</div>
                    </a>
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
                </div>
            </div>
        </div>
        <div class="three_card row d-flex justify-content-center align-items-center">
            <div class="card ">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\BlackSmith.png" class="card-img-top" alt="">
                </div>
                <a class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100" href="" style="height: 25%;">
                    <img src="..\assets\trade.png" alt="">
                    <div class="m-0 card_word">Trading<br> Academy</div>
                </a>
                <ul class="list-group p-0  list-group-flush justify-content-center" style="height: 45%;">
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Course -</a>
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Forum -</a>
                </ul>
            </div>
            <div class="card">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\tdtn_logo.png" class="card-img-top" alt="">
                </div>
                <a class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100" href="" style="height: 25%;">

                    <img src="..\assets\lobby.png" alt="">
                    <div class="m-0 card_word text-decoration-none" href="">Trading<br> Game</div>
                </a>
                <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Light Mode -</a>
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Mission Mode -</a>
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Free Mode -</a>
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">- Competition -</a>
                </ul>
            </div>
            <div class="card">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\EX_1.png" class="card-img-top" alt="">
                </div>
                <a class="card-title m-0 card-body p-0 d-flex flex-row justify-content-center align-items-center text-decoration-none w-100" href="" style="height: 25%;">
                    <img src="..\assets\NFT.png" alt="">
                    <div class="m-0 card_word text-decoration-none" href="">Trading<br> Tool</div>
                </a>
                <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">-Trading Bot-</a>
                    <a class="p-0 card_word list-group-item list-group-item-action" href="">-Copy Trade-</a>
                </ul>
            </div>
        </div>

    </div>
    <footer class="d-flex justify-content-end align-items-center" style=" height:5%">
        <div class="" style="color: #fdd0608b;">Copyright © 2023 TradingTrain.
            All rights
            reserved.</div>
    </footer>
</template>
<script>
        // const C_Array = Array.from(document.getElementsByClassName("three_card")[0]);
        // console.log(card_3);
        // console.log(C_Array);
        // C_Array.forEach(element => {
            
        //     element.addEventListener(
        //         "mouseenter",
        //         (event) => {
        //             // highlight the mouseenter target
        //             event.target.style.scale = "1.1";
        //         }
        //     );
        //     element.addEventListener(
        //         "mouseleave",
        //         (event) => {
        //             // highlight the mouseover target
        //             event.target.style.color = "1.0";
        //         }
        //     );
        // });
    
</script>
<style scoped>
:root {
    --card-height:39.5vw;
    --card-width:30vw;
    --card-max-height:70vh;
    --card-max-width:30vw;
    --nav-card-font-size:3vh;
}

@media screen and (min-width:1400px) and (orientation: landscape) {
    .nav-link {
        --nav-card-font-size:3vh;
    }
    .card_word {
        --nav-card-font-size:3vh;
    }
    .tdtn_nav {
        height: 15vh;
    }
    .card{
        --card-height:39.5vw;
        --card-width:30vw;
        --card-max-height:70vh;
        --card-max-width:30vw;
    }
    .three_card {
        height: 85%;
    }
}
@media screen and (max-width:1399px) and (min-width:992px) and (orientation: landscape) {
    .nav-link {
        --nav-card-font-size:3vh;
    }
    .card_word {
        --nav-card-font-size:3vh;
    }
    .tdtn_nav {
        height: 15vh;
    }
    .card{
        --card-height:39.5vw;
        --card-width:30vw;
        --card-max-height:70vh;
        --card-max-width:30vw;
    }
    .three_card {
        height: 85%;
    }
}
@media screen and (max-width:991px) and (min-width:768px) and (orientation: landscape) {
    .nav-link {
        --nav-card-font-size:3vh;
    }
    .card_word {
        --nav-card-font-size:3vh;
    }
    .tdtn_nav {
        height: 15vh;
    }
    .card{
        --card-height:39.5vw;
        --card-width:30vw;
        --card-max-height:70vh;
        --card-max-width:30vw;
    }



    .three_card {
        height: 85%;
    }
}
@media screen and (max-width:767px) and (min-width:576px) and (orientation: landscape) {
    .nav-link {
        --nav-card-font-size:3vh;
    }
    .card_word {
        --nav-card-font-size:3vh;
    }
    .tdtn_nav {
        height: 15vh;
    }

    .card{
        --card-height:39.5vw;
        --card-width:30vw;
        --card-max-height:70vh;
        --card-max-width:30vw;
    }

    .three_card {
        height: 85%;
    }
}
@media screen and (max-width:575px) and (orientation: landscape) {
    .nav-link {
        --nav-card-font-size:3vh;
    }
    .card_word {
        --nav-card-font-size:3vh;
    }

    .tdtn_nav {
        height: 15vh;
    }

    .card{
        --card-height:39.5vw;
        --card-width:30vw;
        --card-max-height:70vh;
        --card-max-width:30vw;
    }



    .three_card {
        height: 85%;
    }
}

@media screen and (min-width:1400px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:2vw;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }

    .tdtn_nav {
        height: 15vh;
    }
    .tdtn_logo {
        max-height:180px;
    }
    .card {
        --card-height:26vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 85%;
    }
}
@media screen and (max-width:1399px) and (min-width:992px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:3vw;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }
    .tdtn_nav {
        height: 15vh;
    }
    .tdtn_logo {
        max-height: 150px;
    }
    .card {
        --card-height:26vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }
    .three_card {
        flex-direction: column;
        height: 85%;
    }
}
@media screen and (max-width:991px) and (min-width:768px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:3vw;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }
    .tdtn_nav {
        height: 10vh;
    }
    .tdtn_logo{
        max-height:98px;
    }
    .card {
        --card-height:25vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 85%;
    }

}
@media screen and (max-width:767px) and (min-width:576px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:3vw;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }
    .tdtn_nav {
        height: 7vh;
    }

    .card {
        --card-height:26vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }

    .card-body img {
        width: fit-content;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
    }

    .three_card {
        flex-direction: column;
        height: 95%;
    }
}
@media screen and (max-width:575px) and (min-width:368px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:2vw;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }

    .tdtn_nav {
        height: 6vh;
    }
    .tdtn_logo{
        max-height: 25px;
    }

    .card {
        --card-height:26vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 95%;
    }
}
@media screen and (max-width:367px) and (orientation: portrait) {
    .nav-link {
        --nav-card-font-size:1vh;
    }
    .card_word {
        --nav-card-font-size:2vh;
    }


    .tdtn_nav {
        height: 5vh;
    }
    .tdtn_logo{
        max-height: 25px;
    }
    .card {
        --card-height:26vh;
        --card-width:32.5vh;
        --card-max-height:70vh;
        --card-max-width:90vw;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 95%;
    }
}

.card_word {
    font-size: var(--nav-card-font-size);
    background: none;
    color: rgb(253, 208, 96);
}
.nav-link {
    font-size: var(--nav-card-font-size);
    color: #FDD060;
}

.tdtn_nav {
    background-color: rgba(67, 61, 51, .7);
}
.close_nav {
    background-color: rgba(67, 61, 51, 0.879);

}
.list-group-flush .list-group-item {
    border-width: 0;
}

.card-body img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
}

.card {
        background: linear-gradient(180deg,#957c53,#6e5b3d);
        height: var(--card-height);
        width: var(--card-width);
        max-height: var(--card-max-height);
        max-width: var(--card-max-width);
        margin-left: 1vw;
}

.nav-link:hover {
    color: #FDD060;
    background: linear-gradient(180deg,rgb(90, 82, 69),rgba(67, 61, 51));

}
.card:hover {
    transform: scale(1.05);
}
.card-title:hover {
    background: linear-gradient(180deg,#957c53,#6e5b3d);
    color: white;
}
.list-group a:hover{
    background: linear-gradient(180deg,#957c53,#6e5b3d);
    color: white;
}
.nav-item :hover{
    background: linear-gradient(180deg,rgb(90, 82, 69),rgba(67, 61, 51));
    color: white;
}
.dropdown-item{
    color: rgb(253, 208, 96);
}
.dropdown-menu{
    background-color: rgba(67, 61, 51, 0.879);
}
</style>