// Exercise #1
// Use map to convert an array of number from inches to feet

// 1 foot = 12 inches
let heightsInInches = [66, 64, 60, 52, 72, 80, 51]
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]


let heightsInFeet = heightsInInches.map(function(inches) {
    return inches / 12;
});

let arrowHeightsInFeet = heightsInInches.map(inches => inches /12);

console.log(heightsInFeet)
console.log(arrowHeightsInFeet)



// Exercise #2
// Use the array of shop items provided and present the the information in the following format

// =======================================
// Name: 	 Air Max 97
// Price: 	 130
// About: 	 The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes.
// Category: shoes
// =======================================
// Name: 	 Adidas NMD R1
// Price: 	 128
// About: 	 New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.
// Category: shoes
// =======================================
// Name: 	 Gucci Oversize T-shirt with Interlocking G
// Price: 	 580
// About: 	 The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.
// Category: shirts
// =======================================
// Name: 	 Nike Sportswear Club
// Price: 	 18.97
// About: 	 The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.
// Category: shirts
// =======================================
// Name: 	 Spanx Flare Jeans, Vintage Indigo
// Price: 	 148
// About: 	 These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.
// Category: pants
// =======================================
// Name: 	 Bonobos Premium Stretch Jeans
// Price: 	 69
// About: 	 Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.
// Category: pants

let shopItems = [
    {
        id: 1,
        name: "Air Max 97",
        price: 130.0,
        desc: "The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
        category: "shoes",
    },
    {
        id: 2,
        name: "Adidas NMD R1",
        price: 128,
        desc: "New-wave classics, with a timeless vintage design: men’s NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
        category: "shoes",
    },
    {
        id: 3,
        name: "Gucci Oversize T-shirt with Interlocking G",
        price: 580,
        desc: "The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
        category: "shirts",
    },
    {
        id: 4,
        name: "Nike Sportswear Club",
        price: 18.97,
        desc: "The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
        category: "shirts",
    },
    {
        id: 5,
        name: "Spanx Flare Jeans, Vintage Indigo",
        price: 148,
        desc: "These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
        category: "pants",
    },
    {
        id: 6,
        name: "Bonobos Premium Stretch Jeans",
        price: 69,
        desc: "Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
        category: "pants",
    },
];




// Using a for loop

for (let i = 0; i < shopItems.length; i++){
    const item = shopItems[i];
    console.log(`=======================================
Name:     ${item.name} 
Price:    ${item.price}
About:    ${item.desc}
Category: ${item.category}
=======================================`);
}
// Testing if saving to var and passing to console.log worked the same. 
for (let i = 0; i < shopItems.length; i++){
    const item = shopItems[i];
    const itemInfo = `=======================================
    Name:     ${item.name} 
    Price:    ${item.price}
    About:    ${item.desc}
    Category: ${item.category}
    =======================================`
    console.log(itemInfo);
}
//using forEach method 

shopItems.forEach(item => {
    const itemInfo= `=======================================
Name:      ${item.name}
Price:     ${item.price.toFixed(2)}
About:     ${item.desc}
Category:  ${item.category}
=======================================`;
    console.log(itemInfo);
});




// Exercise #3
// String Reversal Function:
// Write a function called reverseString that takes a string (str) as an argument and returns the reverse of that string.

let testString1 = "Hello World" // "dlroW olleH"
let testString2 = "test test 123" // "321 tset tset"

// For loop
function reverseString(string) {
let reversed = '';
for (let i = string.length -1; i >=0; i--){
reversed += string[i];
}
return reversed 
}
let stringReversed2 = reverseString(testString2)
console.log(reverseString(testString1))
console.log(stringReversed2)

// Built in Functions
function reverseString2(string){
return string.split('').reverse().join('');
}
console.log(reverseString2(testString1))

// Auto log 

function reverseString3(string){
const reversed2 = string.split('').reverse().join('');
console.log(reversed2)
return reversed2;
}
reverseString3(testString2)





// Exercise #4
// Duplicate Element Remover Function:
// Write a function called removeDuplicates that takes an array (arr) as an argument and returns a new array with duplicate elements removed

let testArr1 = ['Chicago', 'New York', 'Miami', 'New York','Chicago', 'Miami', 'Chicago', 'New York', 'Chicago'] // ['Chicago', 'New York', 'Miami']

let testArr2 = [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 2, 3, 4] // [1, 2, 3, 4]


// Using a for loop
function removeDuplicates(arr){
let nondups = []
for (let i = 0; i < arr.length; i++){
if(!nondups.includes(arr[i])){
nondups.push(arr[i]);
}}
return nondups
}

let removedDuplicates1 = removeDuplicates(testArr1)
let removedDuplicates2 = removeDuplicates(testArr2)
console.log(removedDuplicates1, removedDuplicates2)

// Using `Set`  
function removeDuplicates2(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates2(testArr1))
console.log(removeDuplicates2(testArr2))