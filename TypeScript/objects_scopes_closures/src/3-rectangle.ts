import { constrainedMemory } from "process";

class Rectangle {
    width: number;
    height:number;

    constructor (w: number, h: number){
        if(h > 0 && w > 0) {
            this.width = w;
            this.height = h;
         }
    }
    print () {
        for (let i = 0; i < this.height; i++){
            let output = "";
            for (let j = 0; j < this.width; j++){
                output += "X"
            }
            console.log(output);
        }
    }
}

const r1 = new Rectangle(2, 3);
r1.print();

const r2 = new Rectangle(10, 5);
r2.print();
