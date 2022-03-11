// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Alpha 2022"
// console.log(cohort.split(""))

// a) Your answer: I think that it will split the stirng into an array. Either by letter or the whole word.
// b) Verify and explain: I was right because normally you would use split to turn a string into an array. An array into a string with .join. One thing that you would have to pay attention to is if the quotation marks have a space in between. Those will give you two different answer.
// console.log(cohort.split("")) WITHOUT SPACE
// OutPut--->
//  [
//   'A', 'l', 'p', 'h',
//   'a', ' ', '2', '0',
//   '2', '2'
// ]

// console.log(cohort.split(" ")) WITH SPACE
// Output --->
// [ 'Alpha', '2022' ]
// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: So this is something that I would like to point... I think this is a dynamic code because you can add any name and you will still expect a string that says hello "name". But i would expect the answer to say "hello LEARN Student"
// b) Verify and explain: So my predictions were wrong but I would say half wrong. A function will always need a return. If you look at the example given there is no return so when i went to invoke the code I recieved an undefined. Once I added the return I knew right away why I was wrong.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: I believe that every value in the array will be multiplied by 2. So the expected outcome will be [8, 10. 12, 14, 16].
// b) Verify and explain: I will cut this line of code into pieces so that when I explain it. It makes sense to me. On the right side of the equal sign you can see an array of numbers. Then right next to the array you can see the .map. Essentially what the dot map does it iterates through any array that it's attached to and return a new array with the same length. Dot map takes three parameters but we know from looking at the parenthesis it will only modify the value of the array. Each value in that array will be multiplied by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: With this question. I don't have an absolute answer. I have to possibilites. Either when the variable is invoked there will be a new array with only odd numbers ([11, 13, 15]) or it won't show up at all. For the second guess, I only think that way because I'm wondering how it would store its data. We will find out shortly.
// b) Verify and explain: Just like the question before. I will start on the right hand side of the equal sign starting at the array. Inside the array we can see that there are some numbers inside. Right next to the array we are introduced to another high-order-function, .filter. Dot filter will iterate through the array and spit out a new array with a length smaller than the origin. You could think of it as using a strainer or dam, because we're filtering. Not all values will appear when the variable is invoked because we're looking for a certain conditon. In this case, .dot filter is picking only values that are NOT EVEN. Any odd number that it picks up from the original array will be inside the new array. [11, 13, 15]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: I am expecting the answer to be JavaScript!!!!!!!!!
// b) Verify and explain: In the code above we can see we have a myCodingSkills object. There are a few things that we can count on when we are trying to identify an object. One anything that is wrapped in curly brackets that have key value pairs are a dead giveaway. Looking at the invocation you can see that it is calling the object myCodingSkills but there are four pairs of key values. Which one is it looking for. Using dot notation it includes the key name language but the values are arrays. Which value inside the array are we trying to access? Well looking inside the bracket next to language we can see that we're lookinng for the value placed at 0 inside the array. Which would be JavaScript!! It's kinda like going down different paths. Or opening a big general box with subcatogories and more tedious oddly specific items.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Alpha",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Im not too sure about this one because when doing the lecture there wasn't enough visuals/examples for me to understand well enough. I did go over the notes provided through the syllabus but the coding looks weird to me. What I know is that this is a dynamic class that has some information. Maybe it will input the string George into line 64 where name is since everthing else is dead code. Cement code. I forgot the word.
// b) Verify and explain: Okay so when we did invoke it I was right. What's happening here we have a class and object. i don't want to describe any of them because I'm afraid that I would use class and object interchangebly. There is something that I comepletely missed when initially looking at the code. At line 63 the constructor method is taking an argument of name. The input of name is arbutrary because it could be anything that is a string. If I had saw and take notice of that I don't think I would have been so confused. The code on line 69 is create a new instance of class and we know because of the key word new but right next to the word we have the class Learn. We basically plugged in the string George and passed it as an argument.
