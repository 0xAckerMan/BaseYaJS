//HOISTING
let test = 5;
console.log(test);

test = 4;
console.log(test)

// function scope (param: number): number{
//     test = param;
//     return test;
// }

const a = (param: number): number => {
    test = param
    return test
}

console.log(a(9));



// Asynchronous
async function fetching(url: string){
    try{
        const response = await fetch(url);
        const body = await response.json()
        const name = body[0].name
        console.log(name);
        body.map((user)=>{
            console.log(user.name)
        })

        //Hopp way
        body.forEach(obj => {
            const name = obj.name
            console.log(`Hopp way: ${name}`)
        }
    }
        catch (err) {
        console.log(err)
    }
}
fetching("https://jsonplaceholder.typicode.com/users");
