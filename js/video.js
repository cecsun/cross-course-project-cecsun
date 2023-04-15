console.log ( 'Hello World!' );
const all = "https://api.noroff.dev/api/v1/square-eyes";

async function fetchData(url) {
    const payload = await fetch(url);
    const data = await payload.json();
    return data;
}

async function fecthDataAll() {
    const data = await fetchData(all);
    console.log({data});

}

async function fetchDataByID(id) {
    const data = await fetchData(all + "/" + id);
    return data;
}

const batmanID = "972df6d3-b4e8-44c1-9dec-cadd3b35102e"
const hobbsID = "352ba432-5b5d-4ccc-9aba-f2704c500cf3"
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

updateVideoHtml(batmanID)