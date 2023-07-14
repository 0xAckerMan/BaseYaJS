class Rectangle {
    width: number;
    height: number;

    constructor (w: number, h: number) {
        if( h > 0 && w > 0 ){
            this.width = w;
            this.height = h;
            }
    }
    print () {
        for (let i = 0; i < this.height; i++){
            let output = "";
            for (let j = 0; j < this.width; j++){
                output += "X";
            }
            console.log(output);
        }
    }

    rotate () {
        const tempheight = this.width;
        const tempwidht = this.height;
        this.height = tempheight;
        this.width = tempwidht;
    }

    double() {
        this.height *= 2;
        this.width *= 2;
    }

}


const r1 = new Rectangle(2, 3);
console.log('Normal:');
r1.print();

console.log('Double:');
r1.double();
r1.print();

console.log('Rotate:');
r1.rotate();
r1.print();
