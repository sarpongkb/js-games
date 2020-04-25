document.addEventListener("DOMContentLoaded", () => {
  //card options
  const cards = [
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "cheeseburger", img: "images/cheeseburger.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "fries", img: "images/fries.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "hotdog", img: "images/hotdog.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "ice-cream", img: "images/ice-cream.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "milkshake", img: "images/milkshake.png" },
    { name: "pizza", img: "images/pizza.png" },
    { name: "pizza", img: "images/pizza.png" },
  ];

  cards.sort(() => 0.5 - Math.random);

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var chosenCards = [];
  var chosenCardIds = [];
  const wonCards = [];

  function createBoard() {
    for (let i = 0; i < cards.length; ++i) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const docCards = document.querySelectorAll("img");
    const id1 = chosenCardIds[0];
    const id2 = chosenCardIds[1];

    if (chosenCards[0] === chosenCards[1]) {
      alert("You've found a match");
      docCards[id1].setAttribute("src", "images/white.png");
      docCards[id2].setAttribute("src", "images/white.png");
      wonCards.push(chosenCards);
    } else {
      docCards[id1].setAttribute("src", "images/blank.png");
      docCards[id2].setAttribute("src", "images/blank.png");
      alert("Sorry, try agin");
    }

    chosenCards = [];
    chosenCardIds = [];

    resultDisplay.textContent = wonCards.length;
    if (wonCards.length === cards.length / 2) {
      resultDisplay.textContent = "Congratulations! you found them all";
    }
  }

  function flipcard() {
    const cardId = this.getAttribute("data-id");
    chosenCardIds.push(cardId);
    chosenCards.push(cards[cardId].name);
    this.setAttribute("src", cards[cardId].img);
    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
