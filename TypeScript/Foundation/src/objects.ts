let myCar = {
    name: "Maybach",
    make: "Benz SUV",
    year: "2022"
}
printCar(myCar)

function printCar( car: {
    name: string,
    make: string,
    year: string,
    chargeVoltage?: number
}){
    let str = `${car.name} ${car.make} (${car.year})`
    car.chargeVoltage

    if(typeof car.chargeVoltage !== "undefined")
        str += `// ${car.chargeVoltage}v`

    console.log(str)
}
