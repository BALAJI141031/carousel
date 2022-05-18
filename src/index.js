import "./styles.css";
const imagesArray = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG3T-bvfubELeOkIW_p0RBHjxQQ1ltVFs-Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kBTIypQXEUtqknrxmeP4XMjlnzwViRvn1Q&usqp=CAU"
];
let carouselDiv = document.querySelector(".carousel-div");

const imgEl = document.createElement("img");

let imgIndex = 0;
const indicatorsDiv = document.createElement("div");
indicatorsDiv.classList.add("btns-div");
const changeImg = () => {
  imgIndex++;
  if (imgIndex === imagesArray.length) imgIndex = 0;
  imgEl.src = imagesArray[imgIndex];
  carouselDiv.appendChild(imgEl);
};

setInterval(changeImg, 2000);
