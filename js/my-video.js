import { fetchDataByID } from "./components/api.js";

async function updateVideoHtml(id) {
    const data = await fetchDataByID(id);
    console.log(data);
    let videoDescription = document.querySelector(".video-description");
    videoDescription.append(data.description)
    let videoTitle = document.querySelector(".video-title");
    videoTitle.append(data.title)
    let videoGenre = document.querySelector(".video-genre");
    videoGenre.append(data.genre)
    let videoPrice = document.querySelector(".video-price");
    videoPrice.append(data.price + "Kr")
    let videoReleased = document.querySelector(".video-released");
    videoReleased.append(data.released)
    let videoImage = document.querySelector(".video-image");
    videoImage.src = data.image;
}

function getIdParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    return id;
}

const id = getIdParam();
updateVideoHtml(id)