<template>
    <div class="container-fluid" style=" height:95%">
        <div class="row">
            <div class="col-auto" style="width: 15%;">
                <img src="..\assets\TT_logo.png" alt="" style="height: 120px; width: auto;">
            </div>
            <div class="col d-flex justify-content-end align-items-center me-5">
                <div class="nav nav-pills">
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center"
                        style="width: 20%; height:78px">
                        <a class="nav-link fs-1" style="line-height: 75%; color: #FDD060;" href="#">About Us</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center"
                        style="width: 20%; height:78px">
                        <a class="nav-link fs-1" style="line-height: 75%; color: #FDD060;" href="#">About Us</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center"
                        style="width: 20%; height:78px">
                        <a class="nav-link fs-1" style="line-height: 75%; color: #FDD060;">Connect Wallet</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 d-flex justify-content-center align-items-center"
                        style="width: 20%; height:78px">
                        <a class="nav-link fs-1" style="color: #FDD060;">Personal</a>
                    </div>
                    <div class="nav-item border border-dark ms-2 dropdown align-items-center">
                        <a class="nav-link dropdown-toggle fs-1" data-bs-toggle="dropdown" href="#" role="button"
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
        <div class="row justify-content-center align-items-center" style="height: 85%;">
            <a class="col-3" id="TA" href="https://www.tdtn.tw/" style="transform: skewX(-15deg); height: 80%;">
                <img src="..\assets\TA.png" alt="" style="width: 100%; height: 100%; object-fit: fill;">
            </a>
            <a class="col-3 ms-5" id="TG" href="https://www.tdtn.tw/game_lobby"
                style="transform: skewX(-15deg); height: 80%;">
                <img src="..\assets\TG.png" alt="" style="width: 100%; height: 100%; object-fit: fill;">
            </a>
            <a class="col-3 ms-5" id="TT" href="https://www.tdtn.tw/claim" style="transform: skewX(-15deg); height: 80%;">
                <img src="..\assets\TT.png" alt="" style="width: 100%; height: 100%; object-fit: fill;">
            </a>
        </div>

    </div>
    <footer class="d-flex justify-content-end align-items-center" style=" height:5%">
        <p class="" style="color: #fdd0608b;">Copyright © 2023 TradingTrain.
            All rights
            reserved.</p>
    </footer>
</template>
<script>
// var TA_Element = document.getElementById("TA");

document.addEventListener('mousemove', function (event) {
    var mouseX = event.clientX;
    // TA_Element.style.transform = "skewX(" + (mouseX - 950) / 6 + "deg)";
    console.log("Mouse Coordinates: " + mouseX );
});
</script>
<style scoped></style>