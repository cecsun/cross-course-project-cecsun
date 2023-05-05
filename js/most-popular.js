import { fetchDataAll } from "./components/api.js";

let mostPopularHtml = document.querySelector(".most-popular-images");

async function updateMostPopular() {

    try {
        const videos = await fetchDataAll();
        
        videos.forEach(video => {
            if ("7.0" < video.rating) {
                let a = document.createElement("a");
                a.href = "videos/video.html?id=" + video.id;
                let img = document.createElement("img");
                img.src = video.image;
                img.alt = video.title;
                a.appendChild(img);
                mostPopularHtml.appendChild(a);
            }
        });

    } catch (error) {
            mostPopularHtml.innerHTML = displayError("An error occurred");
        }
    
}

updateMostPopular();