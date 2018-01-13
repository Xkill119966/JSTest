// function PDF() {
//   this.read = () => {}
// }
//
// function Reader() {
//   this.book = new PDF();
//   this.read = this.book.read();
// }

function PDF() {
  this.read = () => {}
}

function Epub() {
  this.read = () => {}
}

function Reader(book) {
  this.book = book;
  this.read = this.book.read();
}

var pdf = new PDF();
var PDFReader = new Reader(pdf);

var epub = new Epub();
var EpubReader = new Reader(epub);
