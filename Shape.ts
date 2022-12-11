export class Shape{
    name: string=""
    color: string="black";
    constructor(name:string,
                color:string,){
        this.name=name;
        this.color=color;
    }
    getName():string{
        return this.name;
    }
    setName(name:string){
        this.name=name;
    }
    getColor():string{
        return this.color;
    }
    setColor(color:string){
        this.color=color;
    }
    toString():string {
        return "A shape whith color of "
            + this.getName()
            + " and "
            + this.getColor();
    }
}