async function getJoke() {
    // Set a loading state while fetching the joke
    const jokeElement = document.getElementById('joke');
    jokeElement.innerHTML = "Loading...";

    try {
        // Fetch a random joke from the JokeAPI
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        const data = await response.json();

        // Check if it's a single or two-part joke
        let jokeText;
        if (data.type === 'single') {
            jokeText = data.joke;
        } else {
            jokeText = `${data.setup} <br> <br> ${data.delivery}`;
        }

        // Display the new joke
        jokeElement.innerHTML = jokeText;
    } catch (error) {
        jokeElement.innerHTML = "Failed to fetch a joke. Please try again.";
    }
}