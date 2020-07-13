class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	};

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  };
    
  printFavoriteBooks() {
    console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
    for (let bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  };

}; // end of bookshelf


function loadBooks(myBookself) {
	fakeAjax(BOOK_API, function createShelf(bookNames) {
    for (let bookName of bookNames) {
      myBookself.addFavoriteBook(bookName);
    }

    myBookself.printFavoriteBooks();
  });
}

var BOOK_API = "https://some.url/api";

const myBookself = new Bookshelf();

loadBooks(myBookself);
// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
