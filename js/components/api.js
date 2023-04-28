const all = "https://api.noroff.dev/api/v1/square-eyes";

async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

export async function fetchDataAll() {
    const data = await fetchData(all);
    return data;
}

export async function fetchDataByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}

