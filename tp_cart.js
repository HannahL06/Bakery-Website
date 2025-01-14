/*	
	Golds Bakery Website
	Shopping Cart, Name Overlay, and Dates
	Hannah Lichtman
	1/1/2025
*/

// 1. Calculate Shopping Cart Total

// declare cost of menu items
let items = ["bagels", "bread", "specBread", "challah", "cupcake", "cake"];
let itemPrices = [2, 5, 7, 6.50, 2.50, 22];

window.addEventListener("load", createChecks);

// declare starting values
function createChecks() {
   for (let i = 0; i < items.length; i++) {
    let item = items[i];
    document.getElementById(item).value = 0;
    document.getElementById(item).addEventListener("input", getTotal);
    }
}

// get total cost of selected items
function getTotal() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let cost = itemPrices[i];
        let quantity = Number(document.getElementById(item).value);
        total += quantity * cost;
    }
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

// 2. Create Overlay Name Node

// create name button
const button = document.getElementById("button");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
overlay.innerText = "Author: Hannah Lichtman";
document.body.appendChild(overlay);

// display the overlay
button.addEventListener("click", function() {
    overlay.style.display = "flex";
    button.style.display = "none";
});

// close the overlay
overlay.addEventListener("click", function() {
    overlay.style.display = "none";
    button.style.display = "inline-block";
});

// 3. Display Date, Last Modified Date, and the Difference

// display date and amount of time since last modified
document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const lastModified = new Date(document.lastModified);
    const diffInTime = currentDate - lastModified;
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const results = (`Date: ${currentDate.toDateString()}. Last Modified: ${lastModified.toDateString()} , ${diffInDays} days ago.`);
    document.getElementById("date").textContent = results;
});
