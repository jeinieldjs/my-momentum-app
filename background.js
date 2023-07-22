const changeBackground = () => {
    let index = Math.floor(Math.random() * 5);



const backgroundChoices = [
    'https://images.hdqwalls.com/wallpapers/night-sky-road-sky-mountains-landscape-outdoors-5k-i5.jpg',
    'https://images.hdqwalls.com/download/hot-air-balloon-photography-c6-1920x1080.jpg',
    'https://images.hdqwalls.com/wallpapers/shooting-star-milkway-galaxy-night-sky-4k-mk.jpg',
    'https://images.hdqwalls.com/wallpapers/tropical-landscape-island-5k-jd.jpg',
    'https://images.hdqwalls.com/wallpapers/monaco-fog-summer-sunrise-ah.jpg'
 ]

let currentBackground = backgroundChoices[index];

document.body.style.backgroundImage = `url(${currentBackground})`;
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';

}

changeBackground();