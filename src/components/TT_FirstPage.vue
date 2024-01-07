<template>
    <div class="container-fluid" style=" height:95%">
        <div class="tdtn_nav row align-items-center">
            <div class="col-auto" style="width: 15%;">
                <img class="tdtn_logo" src="..\assets\tdtn_logo.png" alt="">
            </div>
            <div class="col d-flex justify-content-end align-items-center">
                <div class="nav nav-pills">
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center">
                        <a class="nav-link" style="line-height: 75%; color: #FDD060;" href="#">About Us</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center">
                        <a class="nav-link" style="line-height: 75%; color: #FDD060;" href="#">About Us</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center">
                        <a class="nav-link" style="line-height: 75%; color: #FDD060;">Connect<br>Wallet</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center">
                        <a class="nav-link" style="color: #FDD060;">Personal</a>
                    </div>
                    <div class="TT_nav nav-item border border-dark ms-2 dropdown align-items-center">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                            aria-expanded="false" style="color: #FDD060;">三</a>
                        <ul class="dropdown-menu">
                            <div><a class="dropdown-item" href="#">Action</a></div>
                            <div><a class="dropdown-item" href="#">Another action</a></div>
                            <div><a class="dropdown-item" href="#">Something else here</a></div>
                            <div>
                                <hr class="dropdown-divider">
                            </div>
                            <div><a class="dropdown-item" href="#">Separated link</a></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="three_card row d-flex justify-content-center align-items-center">
            <div class="card">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\BlackSmith.png" class="card-img-top" alt="">
                </div>
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 25%;">
                    <div class="card-title card_word">Trading<br> Academy</div>
                </div>
                <ul class="list-group p-0  list-group-flush justify-content-center" style="height: 45%;">
                    <li class="list-group-item p-0 card_word">- Course -</li>
                    <li class="list-group-item p-0 card_word">- Forum -</li>
                </ul>
            </div>
            <div class="card ms-lg-5 ms-md-3 ">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\tdtn_logo.png" class="card-img-top" alt="">
                </div>
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 25%;">
                    <div class="card-title card_word">Trading<br> Game</div>
                </div>
                <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                    <li class="list-group-item p-0 card_word">- Light Mode -</li>
                    <li class="list-group-item p-0 card_word">- Mission Mode -</li>
                    <li class="list-group-item p-0 card_word">- Free Mode -</li>
                    <li class="list-group-item p-0 card_word">- Competition -</li>
                </ul>
            </div>
            <div class="card ms-lg-5 ms-md-3 ">
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 30%;">
                    <img src="..\assets\EX_1.png" class="card-img-top" alt="">
                </div>
                <div class="card-body p-0 d-flex flex-column justify-content-center align-items-center"
                    style="height: 25%;">
                    <div class="card-title card_word">Trading<br> Tool</div>

                </div>
                <ul class="list-group p-0 list-group-flush justify-content-center" style="height: 45%;">
                    <li class="list-group-item p-0 card_word">An item</li>
                    <li class="list-group-item p-0 card_word">A second item</li>
                    <li class="list-group-item p-0 card_word">A third item</li>
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
// var TA_Element = document.getElementById("TA");

document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    // TA_Element.style.transform = "skewX(" + (mouseX - 950) / 6 + "deg)";
    console.log("Mouse Coordinates: " + mouseX);
});
</script>
<style scoped>
:root {
    --nav-link-font-size: calc(1.375rem + 0.5vw);
}

@media screen and (min-width:1400px) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem + 1.5vw)
    }

    .tdtn_nav {
        height: 15%;
    }

    .card {
        height: 75%;
        width: 28%;
        max-height: 330px;
        max-width: 330px;
    }

    .card_word {
        font-size: 35px;
    }

    .tdtn_logo {
        --tdtn-logo-height: 120px;
    }

    .three_card {
        height: 85%;
    }
}

@media screen and (max-width:1399px) and (min-width:1200px) {

    .nav-link {
        --nav-link-font-size: calc(1.375rem + 1.0vw)
    }

    .tdtn_nav {
        height: 15%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 120px;
    }

    .card {
        height: 75%;
        width: 28%;
    }

    .card_word {
        font-size: 35px;
    }

    .three_card {
        height: 85%;
    }
}

@media screen and (max-width:1199px) and (min-width:992px) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem + 0.5vw);
    }

    .tdtn_nav {
        height: 15%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 83px;
    }

    .card {
        height: 80%;
        width: 28%;
        max-height: 330px;
        max-width: 330px;
    }

    .card_word {
        font-size: 20px;
    }

    .three_card {
        height: 85%;
    }
}

@media screen and (max-width:991px) and (min-width:768px) and (orientation: landscape) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem - 0.5vw);
    }

    .tdtn_nav {
        height: 15%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 50px;
    }

    .card {
        height: 80%;
        width: 28%;
        max-height: 330px;
        max-width: 330px;
    }

    .card_word {
        font-size: 18px;
    }

    .three_card {
        height: 85%;
    }
}

@media screen and (max-width:991px) and (min-width:768px) and (orientation: portrait) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem - 0.5vw);
    }

    .tdtn_nav {
        height: 15%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 70px;
    }

    .card {
        height: 30%;
        width: 65%;
        max-height: 330px;
        max-width: 330px;
        margin-top: 0.5rem;
    }

    .card_word {
        font-size: 18px;
    }

    .three_card {
        flex-direction: column;
        height: 85%;
    }

}

@media screen and (max-width:767px) and (min-width:576px) and (orientation: landscape) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem - 1.5vw);
    }

    .tdtn_nav {
        height: 15%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 50px;
    }

    .card {
        height: 80%;
        width: 28%;
        max-height: 330px;
        max-width: 330px;
        margin-left: 10px;
    }

    .card_word {
        font-size: 18px;
    }

    .three_card {
        height: 85%;
    }
}

@media screen and (max-width:767px) and (min-width:576px) and (orientation: portrait) {
    .nav-link {
        --nav-link-font-size: calc(1.375rem - 1.5vw);
        padding: 7px;
    }

    .tdtn_nav {
        height: 5%;
    }

    .tdtn_logo {
        --tdtn-logo-height: 50px;
    }

    .card_word {
        font-size: 18px;
    }

    .card {
        height: 30%;
        max-height: 330px;
        max-width: 250px;
        margin-top: 0.5rem !important;
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

@media screen and (max-width:575px) and (orientation: landscape) {
    .tdtn_logo {
        --tdtn-logo-height: 30px;
    }

    .tdtn_nav {
        height: 5%;
    }

    .nav-link {
        --nav-link-font-size: 8px;
        padding: 3px;
    }

    .card_word {
        font-size: 13px;
    }

    .card {
        height: 30%;
        max-height: 330px;
        max-width: 250px;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 95%;
    }
}

@media screen and (max-width:575px) and (orientation: portrait) {
    .tdtn_logo {
        --tdtn-logo-height: 30px;
    }

    .tdtn_nav {
        height: 5%;
    }

    .nav-link {
        --nav-link-font-size: 6px;
        padding: 3px;
    }

    .card_word {
        font-size: 13px;
    }

    .card {
        height: 30%;
        max-height: 330px;
        max-width: 250px;
        margin-top: 0.5rem;
    }

    .three_card {
        flex-direction: column;
        height: 95%;
    }
}

.nav-link {
    font-size: var(--nav-link-font-size);
}

.tdtn_logo {
    height: var(--tdtn-logo-height);
    width: auto;
}

.card-body img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}

.card {
    transform: skew(-5deg);
}
</style>