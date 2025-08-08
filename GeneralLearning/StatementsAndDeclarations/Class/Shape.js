class Shape {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

class Rectangle extends Shape {
    #areas = [];
    constructor(length, width) {
        super(length, width);
    }
    get area() {
        return this.length * this.width;
    }
    set setArea(area) {
        console.log('areaaaaaaa', area)
        this.#areas.push(area);
    }
    get areas() {
        return this.#areas;
    }
}

let cubeComputedProperty = "cube";
class Box extends Rectangle {
    constructor(length, width, height) {
        super(length, width);
        this.height = height;
    }
    get [cubeComputedProperty]() {
        return this.area * this.height;
    }
}
let length = 5;
let width = 4;
let height = 6;
let rectObj = new Rectangle(length, width);
let area1 = rectObj.area;
rectObj.setArea = area1;
let area2 = rectObj.area;
rectObj.setArea = area2;
console.log('area1', area1);
console.log('area2', area2);
console.log('areas', rectObj.areas);
console.log('cure', new Box(length, width, height).cube);