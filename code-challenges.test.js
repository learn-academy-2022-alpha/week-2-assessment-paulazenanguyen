// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("divisbleBy3", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("returns a string based on input", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(divisbleBy3(num1)).toEqual("15 is divisible by three")
    expect(divisbleBy3(num2)).toEqual("0 is divisible by three")
    expect(divisbleBy3(num3)).toEqual("-7 is not divisible by three")
  })
})
//RED LIGHT   ReferenceError: divisbleBy3 is not defined


// b) Create the function that makes the test pass.
const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

//create a function that will take in a number and return a string
//declare a function called divisbleBy3
const divisbleBy3 = (number) => {
  //create a conditional that evaluates the argumemt
  //if true then return ${number} is divisible by three
  //if false then return ${number} is not divisible by three
  if(number % 3 === 0){
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("firstCap", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array returns a new array with new strings", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
     //Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(firstCap(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(firstCap(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
 //Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//
//
// // b) Create the function that makes the test pass.
//Create a function that takes in an array of words and returns an array with all the words capitalized.
//declare a function firstCap
const firstCap = (array) => {
//create a local variable that maps through the array
  let stringCap = array.map(value => {
    //goes through each first index and capitalized it. then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
  //return the variable back
  return stringCap
}
//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("vFinder", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a string and returns a number based on input", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(vFinder(vowelTester1)).toEqual(1)
    expect(vFinder(vowelTester2)).toEqual(0)
    expect(vFinder(vowelTester3)).toEqual(2)
  })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2


// b) Create the function that makes the test pass.
//create a function that takes in a string and returns a number
//declare the function vowelFinder
const vFinder = (string) => {
  //iterate through the string
for(let i = 0; i < string.length; i++){
  //create a conditional that will see if the value of idex is equal to vowels (a, e. i , o , u)
  if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
    //use the built in method of indexof so that the index is returned 
     return string.indexOf(string[i])
    }
  }
}
