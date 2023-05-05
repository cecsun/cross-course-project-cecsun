import { fetchDataAll } from "./components/api.js";

let videosHtml = document.querySelector(".all-videos-images");

async function showAllVideos() {

    try {
        const videos = await fetchDataAll();
        
        videos.forEach(video => {
            let a = document.createElement("a");
            a.href = "videos/video.html?id=" + video.id;
            let img = document.createElement("img");
            img.src = video.image;
            a.appendChild(img);
            videosHtml.appendChild(a);
        });
    } catch (error) {
        videosHtml.innerHTML = displayError("An error occurred");
    }
}

showAllVideos();