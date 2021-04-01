"use strict";

class Cell {
    constructor(x, y) {
        this._x = x;
        this._y = y;
        if (Math.random() <0.2){
            this._state = "dead";
        } else {
            this._state = "alive";
        }
        
        this.htmlElement = document.createElement("div");
        this.htmlElement.className = "cell";
    }

    set state(state) {
        this._state = state;
    }

    get state() {
        return this._state;
    }

    update(cells) {

        const neighbours = cells.filter(cell =>
            (Math.abs(this._x - cell._x) <= 1 &&
                Math.abs(this._y - cell._y) <= 1) &&
            !(this._x == cell._x &&
                this._y == cell._y) &&
            cell._state == "alive");

        if (neighbours.length < 2 || neighbours.length > 3) {
            this.state = "dead";
        } else {
            this.state = "alive";
        }
    }

    render() {
        const container = document.getElementById("container");
        const element = this.htmlElement;
        if(this.state == "dead"){
            element.style.backgroundColor = 'red';  
        } else {
            element.style.backgroundColor = 'green';
        }
        
        container.insertAdjacentElement("beforeend", element);
    }
}

export default Cell;