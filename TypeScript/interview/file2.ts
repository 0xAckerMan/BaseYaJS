// print a rectangle

function rectangle(w: number, h: number): void{
    for (let i = 0; i < h; i++){
        let output = "";
        for (let j = 0; j < w; j++){
            output += "#"
        }
        console.log(output);
    }
}

rectangle(6,4)
