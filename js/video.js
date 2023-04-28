import { fetchDataByID } from "./components/api.js";

let myVideo = document.querySelector(".video");

async function updateVideoHtml(id) {

    try {
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
    } catch (error) {
        console.log("An error occurred");
        // videoDescription.innerHTML 
        while(myVideo.firstChild) {
            myVideo.removeChild(myVideo.lastChild);
        }
        
        myVideo.innerHTML = displayError("An error occurred");
    }
}

function getIdParam() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    return id;
}

const id = getIdParam();
updateVideoHtml(id)