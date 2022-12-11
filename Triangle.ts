import {Shape} from "./Shape";

export class Triangle extends Shape{
    side1: number=1.0;
    side2: number=1.0;
    side3: number=1.0;

    constructor(side1: number,
                side2: number,
                side3: number,
                name: string,
                color: string,){
        super(name, color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getSide1():number{
        return this.side1;
    }
    setSide1(side1:number):void{
        this.side1 = side1;
    }
    getSide2():number{
        return this.side2;
    }
    setSide2(side2:number):void{
        this.side2 = side2;
    }
    getSide3():number{
        return this.side3;
    }
    setSide3(side3:number):void{
        this.side3 = side3;
    }
    getPerimeter():number{
        return this.side1 + this.side2 + this.side3;
    }
    getArea():number{
        return Math.sqrt(1/2*(this.side1 + this.side2 + this.side3)*(1/2*(this.side1 + this.side2 + this.side3)-this.side1)*(1/2*(this.side1 + this.side2 + this.side3)-this.side2)*(1/2*(this.side1 + this.side2 + this.side3)-this.side3))
    }
    toString(): string {
        return "A Triangle side1: "
        + this.getSide1()
        +" and side2: "
        + this.getSide2()
        +" and side3: "
        + this.getSide3()
        +" which is a subclass of "
        +super.toString();
    }
}