document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { name: "cheeseburger", imgSrc: "images/cheeseburger.png" },
    { name: "fries", imgSrc: "images/fries.png" },
    { name: "hotdog", imgSrc: "images/hotdog.png" },
    { name: "ice-cream", imgSrc: "images/ice-cream.png" },
    { name: "milkshake", imgSrc: "images/milkshake.png" },
    { name: "pizza", imgSrc: "images/pizza.png" },
  ].reduce((acc, val) => {
    return [
      ...acc, 
      Object.assign({id: `${val.name}_1`}, val), 
      Object.assign({id: `${val.name}_2`}, val)
    ];
  }, []);

  cards.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  var chosenCards = [];
  var totalWon = 0;

  function createBoard() {
    for (let c of cards) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", c.id);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    const card1 = document.querySelector(`img[data-id=${chosenCards[0].id}]`);
    const card2 = document.querySelector(`img[data-id=${chosenCards[1].id}]`);

    if (chosenCards[0].imgSrc === chosenCards[1].imgSrc) {
      alert("You've found a match");
      card1.setAttribute("src", "images/white.png");
      card2.setAttribute("src", "images/white.png");
      totalWon += 1;
    } else {
      card1.setAttribute("src", "images/blank.png");
      card2.setAttribute("src", "images/blank.png");
      alert("Sorry, try agin");
    }

    chosenCards = [];

    resultDisplay.textContent = totalWon;
    if (totalWon === cards.length / 2) {
      resultDisplay.textContent = "Congratulations! you found them all";
    }
  }

  function flipcard() {
    const cardId = this.getAttribute("data-id");
    const card = cards.find(c => c.id === cardId);
    chosenCards.push(card);
    this.setAttribute("src", card.imgSrc);
    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500); 
    }
  }

  createBoard();
});
