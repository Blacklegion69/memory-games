const gridItem = document.querySelector("#grid");
const clickedCountResult = document.querySelector("#clickedCountResult");
const winCountResult = document.querySelector("#winCountResult");
const final = document.querySelector("#final");
final.style.display = "none";
const cardArray = [
  {
    name: "banana",
    src: "./images/banana.png",
  },
  {
    name: "berry",
    src: "./images/berry.png",
  },
  {
    name: "carrot",
    src: "./images/carrot.png",
  },
  {
    name: "graps",
    src: "./images/graps.png",
  },
  {
    name: "pineapple",
    src: "./images/pineapple.png",
  },
  {
    name: "watermelon",
    src: "./images/watermelon.png",
  },
  {
    name: "olives",
    src: "./images/olives.png",
  },
  {
    name: "mashroom",
    src: "./images/mashroom.png",
  },
  {
    name: "gerlic",
    src: "./images/gerlic.png",
  },
  {
    name: "chili",
    src: "./images/chili.png",
  },
  {
    name: "banana",
    src: "./images/banana.png",
  },
  {
    name: "berry",
    src: "./images/berry.png",
  },
  {
    name: "carrot",
    src: "./images/carrot.png",
  },
  {
    name: "graps",
    src: "./images/graps.png",
  },
  {
    name: "pineapple",
    src: "./images/pineapple.png",
  },
  {
    name: "watermelon",
    src: "./images/watermelon.png",
  },
  {
    name: "olives",
    src: "./images/olives.png",
  },
  {
    name: "mashroom",
    src: "./images/mashroom.png",
  },
  {
    name: "gerlic",
    src: "./images/gerlic.png",
  },
  {
    name: "chili",
    src: "./images/chili.png",
  },
];
cardArray.sort(() => 0.5 - Math.random());

let clickedCard = [];
let clickedCardIds = [];
let clicked = 0;
let winCount = [];
let clickedStats = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("data-id", i);
    img.setAttribute("src", "./images/default.png");
    img.classList.add("imgControl");
    img.addEventListener("click", flipCard);
    gridItem.appendChild(img);
  }
}
createBoard();

function checkCard() {
  const img = document.querySelectorAll("img");
  if (clickedCard[0] == clickedCard[1]) {
    img[clickedCardIds[0]].setAttribute("src", "./images/win.png");
    img[clickedCardIds[1]].setAttribute("src", "./images/win.png");
    img[clickedCardIds[0]].removeEventListener("click", flipCard);
    img[clickedCardIds[1]].removeEventListener("click", flipCard);
    winCount.push(clickedCard);
    winCountResult.innerHTML = winCount.length;
  } else {
    img[clickedCardIds[0]].setAttribute("src", "./images/default.png");
    img[clickedCardIds[1]].setAttribute("src", "./images/default.png");
    img[clickedCardIds[0]].classList.remove("imgAnimation");
    img[clickedCardIds[1]].classList.remove("imgAnimation");
  }

  if (winCount.length === cardArray.length / 2) {
    img.forEach((value, id) => {
      value.setAttribute("src", cardArray[id].src);
      final.style.display = "block";
      final.innerHTML = clickedStats.map((value) => {
        return `
        <h1>${value}</h1>
        <h1>👇</h1>
        `;
      });
    });
  }

  clickedCardIds = [];
  clickedCard = [];
}

function flipCard() {
  clicked++;
  clickedCountResult.innerHTML = clicked;
  const cardId = this.getAttribute("data-id");
  const img = document.querySelectorAll("img");

  clickedStats.push(cardArray[cardId].name);

  img[cardId].classList.add("imgAnimation");

  img[cardId].setAttribute("src", cardArray[cardId].src);
  clickedCard.push(cardArray[cardId].name);
  clickedCardIds.push(cardId);
  if (clickedCard.length === 2) {
    setTimeout(checkCard, 500);
  }
}
