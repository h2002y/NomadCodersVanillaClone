const wallpaper = ["Wallpaper2.jpeg","Wallpaper3.jpeg","Wallpaper4.jpeg"];

const chosenWallpaper = wallpaper[Math.floor(Math.random() * wallpaper.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenWallpaper}`;
document.body.appendChild(bgImage);