
console.log ( 'Hello World!' );
const all = "https://api.noroff.dev/api/v1/square-eyes";

async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

async function fetchDataAll() {
    const data = await fetchData(all);
    return data;
}

async function fetchDataByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}


async function updateMostPopular() {
    const videos = await fetchDataAll();
    let justAddedHtml = document.querySelector(".just-added");
    let addedCounter = 0;
    
    videos.forEach(video => {
        if ("2018" < video.released && addedCounter < 4) {
            let a = document.createElement("a");
            a.href = "videos/video.html?id=" + video.id;
            let img = document.createElement("img");
            img.src = video.image;
            a.appendChild(img);
            justAddedHtml.appendChild(a);
            addedCounter++;
        }
    });

    
}

updateMostPopular();