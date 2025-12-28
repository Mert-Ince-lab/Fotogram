let currentIndex = 0;

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

let titles = [
    "Frozen Leave",
    "City in the Mountain",
    "Fallow Deer",
    "City ​​around a river",
    "Sunset",
    "Nature",
    "New York",
    "Forest",
    "Desk with lots of Work"
];

function updateDialogImage() {
    document.getElementById("dialogImage").src = images[currentIndex];
    document.getElementById("dialogTitle").innerText = titles[currentIndex];
}


function openDialog(index) {
    currentIndex = index;
    updateDialogImage();
    myDialog.showModal();
}


function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateDialogImage();
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateDialogImage();
}


function renderImages() {
    let imageContainer = document.getElementById('image-container');

    for (let index = 0; index < images.length; index++) {
        imageContainer.innerHTML +=
            `<img src="${images[index]}" onclick="openDialog(${index})">`;
    }
}

function init() {
    renderImages();
}

myDialog.addEventListener('click', (event) => {
    if (event.target === myDialog) {
        myDialog.close();
    }
});

init();
