const images = [
  "cat",
  "daog",
  "Horse",
  "pferd",
  "cat",
  "daog",
  "Horse",
  "pferd",
  "bird",
  "kebab",
  "pizza",
  "burger",
  "bird",
  "kebab",
  "pizza",
  "burger",
];

// FUNCTIONS
function createBoard(images) {
  const shuffledImages = shuffle(images);
  const board = [];
  for (let i = 0; i < 4; i++) {
    const row = {
      rowNumber: i,
      cards: [],
    };
    for (let t = 0; t < 4; t++) {
      const card = {
        cardNumber: t,
        image: shuffledImages[i * 4 + t],
        isOpened: false,
        isMatched: false,
      };
      row.cards.push(card);
    }
    board.push(row);
  }
  return board;
}
let board;
let openedCards = [];

// when cards are matched, keep em that way.

function openCard(rowNumber, cardNumber) {
  const currentCard = board[rowNumber].cards[cardNumber];
  if (currentCard === openedCards || currentCard.isMatched) {
    return;
  }
  currentCard.isOpened = true;
  openedCards.push(currentCard);
  if (openedCards.length === 2) {
    // } else() {
    if (isMatched(currentCard)) {
      currentCard.isMatched = true;
      openedCards.isMatched = true;
      console.log("both are matched " + currentCard.image);
    } else {
      currentCard.isOpened = false;
      openedCards.isOpened = false;
      console.log("both are false");
    }
  }
  endGame();
}

function isMatched(card) {
  return openedCards.image === card.image;
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// You won or not?
function endGame() {
  let isWon = true;
  board.forEach((row) => {
    row.cards.forEach((card) => {
      if (card.isMatched === false) {
        isWon = false;
      }
    });
  });
  if (isWon) {
    console.log("you won the whole fing game");
  } else {
    console.log("No win");
  }
}

function startGame() {
  board = createBoard(images);
  renderBoard();
}
startGame();

function renderBoard() {
  const boardElement = document.querySelector(".board");
  board.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");
    row.cards.forEach((card) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      if (card.isMatched) {
        cardElement.classList.add("green");
      } else {
        cardElement.classList.add("hide-image");
      }
      const imageElement = document.createElement("div");
      imageElement.classList.add("image");
      imageElement.innerText = card.image;
      cardElement.appendChild(imageElement);
      cardElement.addEventListener("click", (e) => {
        if (openedCards.length === 2) {
          openCards = [];
          boardElement.innerHTML = "";
          renderBoard();
        }
        openCard(row.rowNumber, card.cardNumber);
        e.target.classList.toggle("hide-image");
        // if prevcard is null, opencard is saying when we match something, both didnt match, prevopend = null, matching is finnsih, we want to rerender, matching is ready when preopend = null again, call renderBoard(), check this after opencard,
      });
      rowElement.appendChild(cardElement);
    });
    boardElement.appendChild(rowElement);
  });
}