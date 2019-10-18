function Book(name,author,year,pages)
{
    this.name=name;
    this.author=author;
    this.year=year;
    this.pages=pages;
}
var book1 = new Book("miller","mike",1998,1200);
var book2 = new Book("gurbun","john",2001,1600);
var book3 = new Book("moston","killer",2017,950);
console.log(book1);
console.log(book2);
console.log(book3);