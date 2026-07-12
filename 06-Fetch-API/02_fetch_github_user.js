async function fetchGithubUser() {
    try {
        const response = await fetch("https://api.github.com/users/akash");

        if (!response.ok) {
            throw new Error(`GitHub User Not Found (HTTP ${response.status})`);
        }

        const data = await response.json();

        console.log("GitHub User Details:");
        console.table(data);

    } catch (error) {
        console.error("Failed to fetch GitHub user.");
        console.error("Reason:", error.message);
    } finally {
        console.log("GitHub API request completed.");
    }
}

fetchGithubUser();
