const responseSet = [];
const testSet = [
  1,
  2,
  "Fizz",
  4,
  "Buzz",
  "Fizz",
  7,
  8,
  "Fizz",
  "Buzz",
  11,
  "Fizz",
  13,
  14,
  "FizzBuzz",
  16,
  17,
  "Fizz",
  19,
  "Buzz",
  "Fizz",
  22,
  23,
  "Fizz",
  "Buzz",
  26,
  "Fizz",
  28,
  29,
  "FizzBuzz",
  31,
  32,
  "Fizz",
  34,
  "Buzz",
  "Fizz",
];

// Impement fizzbuzz logic
function fizzbuzz(data) {
  let word = "";

  if (data !== "Buzz" && !(data % 3)) {
    word += "Fizz";
  }

  if (data !== "Fizz" && !(data % 5)) {
    word += "Buzz";
  }

  return word || data;
}

// Implement the wrapper so we can count from 0 to STOP.
function main() {
  for (let i = 1; i <= 36; i++) {
    const response = fizzbuzz(i);
    responseSet.push(response);
    console.log(response);
  }
}

main();

console.log(
  " is result good? : ",
  testSet.toString() === responseSet.toString()
);

console.log(
  "is idempotent function? : ",
  fizzbuzz(fizzbuzz(fizzbuzz(3))) === "Fizz"
);
