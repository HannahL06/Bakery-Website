/*
	Golds Bakery Website
	Shopping Cart, Name Overlay, and Dates Scripts
	Hannah Lichtman
	1/1/2025
*/


// Create the order form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("cakeOrder");
    const button = document.getElementById("subButton");

    button.addEventListener("click", function(event) {
        event.preventDefault();
        cakeForm();
    });
});

// Create the order fields
function cakeForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const occasion = document.getElementById("occasion").value;
    const flavor = document.getElementById("flavor").value;
    const shape= document.getElementById("shape").value;
    const message = document.getElementById("message").value;
    if (name && email && occasion && flavor && shape && message) {
        const display = "Done! We can't wait to make your cake.";
        document.getElementById("display").innerHTML = display;
        document.getElementById("cakeOrder").reset();
    } else {
        alert("Please fill out all fields.");
    }
}