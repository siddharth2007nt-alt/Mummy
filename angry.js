document.addEventListener("DOMContentLoaded", function(){

let stepAb = 0;

const angryBirdData = [
  { img: "love6.jpg", text: "Selfie queen 👑" },
  { img: "love7.jpg", text: "ಅಯ್ಯೋ ಮಹಾರಾಣಿ ಅವ್ರು🫶" },
  { img: "love8.jpg", text: "ಪರಿಸರ ಪ್ರೇಮಿ 😝" },
  { img: "love9.jpg", text: "ಸಾಕ್ಷಾತ್ ಲಕ್ಷ್ಮಿ ದೇವಿ 👌💕" },
  { img: "love10.jpg", text: "Cutie 💖" }
];
<p>ಮಮ್ಮಿ ನಾ ನಿನ್ನ ಈಸ್ಟ್ ಮಾಡಿ ಖುಷಿ ಪಡಿಸಿನಿ ಅನ್ಸುತ್ತೆ 💐</p>
const abButton = document.getElementById("abBtn");

function showNextAb() {
  const photoBox = document.getElementById("photoBoxAb");
  const photo = document.getElementById("photoAb");
  const quote = document.getElementById("quoteAb");

  photoBox.style.display = "block";
  photo.src = angryBirdData[stepAb].img;
  quote.innerText = angryBirdData[stepAb].text;

  stepAb++;

  if (stepAb < angryBirdData.length) {
    abButton.innerText = "Next Surprise 💌";
  } 
  else {
    window.location.href = "home.html";
  }
}

abButton.addEventListener("click", showNextAb);

});