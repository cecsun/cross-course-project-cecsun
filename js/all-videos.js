
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

let videosHtml = document.querySelector(".all-videos-images");

async function showAllVideos() {

    try {
        const videos = await fetchDataAll();
        
        videos.forEach(video => {
            console.log(video);
            let a = document.createElement("a");
            a.href = "videos/video.html?id=" + video.id;
            let img = document.createElement("img");
            img.src = video.image;
            a.appendChild(img);
            videosHtml.appendChild(a);
        });
    } catch (error) {
        console.log("An error occurred");
        videosHtml.innerHTML = displayError("An error occurred");
    }
}

showAllVideos();