const output = parseInt(process.argv[2]);

if(isNaN(output)){
    console.log("Not a number")
}else{
    console.log(`My number: ${output}`)
}
