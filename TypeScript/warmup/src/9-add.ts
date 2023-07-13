// Script that adds 2 integers

function add(a: number, b: number): void {
  const sum = a + b;
  console.log(sum);
}

const arg1 = parseInt(process.argv[2]);
const arg2 = parseInt(process.argv[3]);

if (isNaN(arg1) || isNaN(arg2)) {
  console.log("Invalid input. Please provide two integers.");
} else {
  add(arg1, arg2);
}


