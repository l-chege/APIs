document.addEventListener("click", function(event) {
    //check if button was clicked
    if (!event.target.matches("#button")) return;

    fetch("<https://official-joke-api.appspot.com/random_joke>")   //fetch the api to request the joke endpoint
    .then((response) => response.json())
    .then((data) => renderJoke(data));
});

function renderJoke(data) {                                      //render the joke and pass it to the new function (html)
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
}


