"use strict";

import Cell from "./Cell.js";

class Game {
    constructor() {
        this._cells = [];
        for (let i = 1; i <= 20; i++) {
            for (let j = 1; j <= 20; j++) {
                const c = new Cell(i,j);
                this._cells.push(c);
            }
        }
    }
    
    update(){
        this._cells.forEach(c=>c.update(this._cells));
    }

    render(){
        this._cells.forEach(c=>c.render());
    }
}

export default Game;