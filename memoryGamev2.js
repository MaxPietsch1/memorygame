// introduce my classes
// do more functions that do less stuff, then few functions that do much.
// Read babout Classes and try to do our models in classes. array in array is bad. We create only 1 dimension, board is the only array
// x and y row and column
// 1 big array board holds all cards. the cards know where they are(x and y)
// best practise pattern mvc and so on.
// Read about Object, how to acces several things in object, "object".something
// use several js files, js file with model stuff, one file with the view stuff, the controler stuff.

// Spreading and destructing?


class Board {
    cards = [];
    images = [
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
    isWon = false;

    shuffle() {
        const imagesCopy = [...this.images];
        for (let i = imagesCopy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesCopy[i], imagesCopy[j]] = [imagesCopy[j], imagesCopy[i]];
        }

        return imagesCopy;
    }

    constructor() {
        const shuffledImages = this.shuffle();
        shuffledImages.forEach((image, index) => {
            const card = new Card(Math.floor(index / 4), index % 4, image)
            this.cards.push(card);
        })
    }

    // create a method dor opening a card, remembering the last card, closing,
}

class Card {
    isOpen = false;
    isMatched = false;
    row;
    column;
    image;
    constructor(row, column, image) {
        this.row = row;
        this.column = column;
        this.image = image;
    }
}

const board = new Board();
const first = new Card(0, 0, "cat");