// =========================
// Part 1: Variables & Conditionals
// =========================
let userName = "Guest";
const isLoggedIn = false;
let userAge = 20;

if (isLoggedIn && userAge >= 18) {
    console.log("Welcome back, " + userName);
} else if (!isLoggedIn) {
    console.log("Please log in to continue.");
} else {
    console.log("You must be 18 or older.");
}

// =========================
// Part 2: Custom Functions
// =========================

// Function 1: Greet user
function greetUser(name) {
    let greeting = "Hello, " + name + "!";
    console.log(greeting);
    return greeting;
}

// Function 2: Calculate sum of numbers
function calculateSum(numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

// Example calls
greetUser("Joshua");
console.log("Sum:", calculateSum([5, 10, 15]));

// =========================
// Part 3: Loops
// =========================

// Loop 1: For loop (counting)
for (let i = 1; i <= 5; i++) {
    console.log("For loop count: " + i);
}

// Loop 2: While loop (decrementing)
let count = 3;
while (count > 0) {
    console.log("While loop countdown: " + count);
    count--;
}

// =========================
// Part 4: DOM Interactions
// =========================

// Interaction 1: Change hero section text
document.querySelector(".hero h1").textContent = "JavaScript is now controlling this text!";

// Interaction 2: Add a new card to the Services grid
let newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "New Service Added via JS";
document.querySelector(".grid-container").appendChild(newCard);

// Interaction 3: Toggle navbar background color when clicked
document.querySelector(".navbar").addEventListener("click", function () {
    this.classList.toggle("active-navbar");
});
