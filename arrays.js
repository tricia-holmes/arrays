// Array of strings;

var family = ["Justin", "Thomas", "Tinkerbell", "Mom", "Dad", "Jonathan"];

// Array of numbers;

var yearsTogether = [2019, 2020, 2021, 2022];

// Array of booleans;

var booleans = [true, false, true, false];

// The pop method will remove "2022" from the array and return that value to us;

yearsTogether.pop();

// The shift method will remove the first "true" from the booleans array and return the element that was removed from the code;

booleans.shift (false);

// The push method will add "Chris" to the end of the family array;

family.push("Chris");


/* Index position is the first element in an array. Instead of the first element in an array being considered number "1", it actually is number "0" 
The reason being is that starting with "0" requires less processing by the computer and thus more efficient
In the examples, I will demonstrate examples of index positions.;  */

console.log(family [0]);        // This will print the index position which is "Justin";
console.log (yearsTogether[2]); // This will print "2021";
console.log (booleans [1]);     // This will print "true";


