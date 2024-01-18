document.addEventListener("click", function(event) {
    //check if button was clicked
    if (!event.target.matches("#button")) return;

    console.log("Button was clicked!");
});


