"use strict";

import Game from "./Game.js";

const game = new Game();

function init() {
    let timer;
    const stepButton = document.getElementById("step");
    stepButton.addEventListener("click", function () {
        game.update();
        game.render();
    });
    const runButton = document.getElementById("run");
    runButton.addEventListener("click", function () {
        const timer = setInterval(function () {
            game.update();
            game.render();

        }, 1000);
    });
    const stopButton = document.getElementById("stop");
    stopButton.addEventListener("click", function (timer) {
        console.log("STOP!");
        clearInterval(timer);
    });
}

init();
game.render();