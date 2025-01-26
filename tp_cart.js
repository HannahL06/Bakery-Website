/*	
	Golds Bakery Website
	Shopping Cart and Date Scripts
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


// 2. Display Date and Last Modified Date

// display date and amount of time since last modified
document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const lastModified = new Date(document.lastModified);
    const diffInTime = currentDate - lastModified;
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
    const results = (`Date: ${currentDate.toDateString()}. Last Modified: ${lastModified.toDateString()}.`);
    document.getElementById("date").textContent = results;
});
