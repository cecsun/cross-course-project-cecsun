import { fetchDataAll } from "./components/api.js";

let justAddedHtml = document.querySelector(".just-added");

async function updateMostPopular() {

    try {
        const videos = await fetchDataAll();
            
        let addedCounter = 0;
        // justAddedHtml.innerHTML = '';
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
    } catch (error) {
        console.log("An error occurred");
        justAddedHtml.innerHTML = displayError("An error occurred");
    }
}

updateMostPopular();