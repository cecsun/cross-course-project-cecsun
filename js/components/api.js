// The base URL for the API
const all = "https://api.noroff.dev/api/v1/square-eyes";

// A helper function to fetch data from the API
async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

// Fetches all data from the API
export async function fetchDataAll() {
    const data = await fetchData(all);
    return data;
}

// Fetches data from the API by ID
export async function fetchDataByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}