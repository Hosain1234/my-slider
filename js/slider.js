const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg'
];
let imageIndex = 0;
let url = document.getElementById('slider-img');
setInterval(() => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imageURL = images[imageIndex];
    url.setAttribute('src', imageURL);
    imageIndex++;
}, 1000)


