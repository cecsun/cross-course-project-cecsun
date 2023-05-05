import { fetchDataAll } from "./components/api.js";

let justAddedHtml = document.querySelector(".just-added-page-images");

async function updateMostPopular() {
    
    try {
        const videos = await fetchDataAll();
        
        videos.forEach(video => {
            if ("2018" < video.released) {
                let a = document.createElement("a");
                a.href = "videos/video.html?id=" + video.id;
                let img = document.createElement("img");
                img.src = video.image;
                a.appendChild(img);
                justAddedHtml.appendChild(a);
            }
        });
    } catch (error) {
        justAddedHtml.innerHTML = displayError("An error occurred");
    }
    
}

updateMostPopular();