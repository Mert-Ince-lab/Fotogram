

function openDialog(src) {
    document.getElementById("dialogImage") .src = src;
    myDialog.showModal()
}

let myDialog = document.getElementById("myDialog");

let images = [
    "./leaves-4702127_1280.jpg",
    "./city-9169729_1280.jpg",
    "./fallow-deer-9903609_1280.jpg",
    "./river-6175173_1280.jpg",
    "./sunset-7133867_1280.jpg",
    "./nature-6766923_1280.jpg",
    "./NYC-3875817_1280.jpg",
    "./forest-2942477_1280.jpg",
    "./desk-3139127_1280.jpg",
];

function renderImages() {
    let imageContainer = document.getElementById('image-container');

    for (let index = 0; index < images.length; index++) {
        imageContainer.innerHTML += `<img src="${images[index]}" onclick="openDialog(myDialog)">`;
    }
}

function init() {
    renderImages();
}