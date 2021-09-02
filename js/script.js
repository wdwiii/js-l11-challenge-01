"use strict";
/*
Reveal a Random Image
1. Randomly Select the Index of an Image
2. Display the Image
3. Add a Click Event
*/
const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  getRandomImage(images);
};

// Function Notes
// - generate random number between 0 and object length
// - assign variable for images[random number]

const getRandomImage = function (images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  displayImage(randomImage);
  console.log(randomImage);
};

// Function Notes
// - change text content of .author to the author property of the random image
// - change src of img to the download_url property of the random image
// - remove the hide class from imgDiv

const displayImage = function (randomImage) {
  const author = randomImage.author;
  const imageAddress = randomImage.download_url;

  authorSpan.textContent = author;
  img.src = imageAddress;
  imgDiv.classList.remove("hide");
};

//Function Notes
//- call get image function when button is clicked
button.addEventListener("click", function () {
  getImage();
});
