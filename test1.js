'use strict';
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    plus(Point){
        this.x += Point.x;
        this.y += Point.y;
        return this;
    }
}

console.log(new Point(1, 2).plus(new Point(2, 1)));
