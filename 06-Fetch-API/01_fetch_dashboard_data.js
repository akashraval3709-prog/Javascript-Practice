async function getDashboardData() {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/dashboard");

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}: Unable to fetch dashboard data.`);
        }

        const data = await response.json();

        console.log("Dashboard Data:");
        console.table(data);

    } catch (error) {
        console.error("Failed to fetch dashboard data.");
        console.error("Reason:", error.message);
    } finally {
        console.log("Request completed.");
    }
}

getDashboardData();
