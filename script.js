document.addEventListener("click", function(event) {
    //check if button was clicked
    if (!event.target.matches("#button")) return;

    fetch("<https://official-joke-api.appspot.com/random_joke>")   //fetch the api to request the joke endpoint
    .then((response) => response.json())
    .then((data) => renderJoke(data))
    .catch(() => renderError()); 
});

function renderJoke(data) {                                      //render the joke and pass it to the new function (html)
    //get text elements
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    const error = document.getElementById("error");              //clear out error message if user tries again and request succeeds
    
    //hide error and render jokes
    error.innerHTML = "";
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
    
}

function renderError() {                                       //render the error message if the api is not working to add a message to HTML element
    const error = document.getElementById("error");
    error.innerHTML = "Error: Something went wrong. Please try again later!";
}


