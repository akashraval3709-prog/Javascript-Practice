async function getMovies() {
    try {
        const response = await fetch("https://ghibliapi.dev/films");

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        const data = await response.json();

        console.log("Movie Name:", data[0].title);

    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Request completed.");
    }
}

getMovies();
