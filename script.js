function getBooksByGenre(books, genre){
    let sortedBooks = books.filter(books == genre);
    return sortedBooks;

}


let myBooks = [
    {
        title: "10x is Easier than 2x",
        author: "Benjamin Hardy",
        genre: "non-fiction"
    },
    {
        title: "Murder on the Orient Express",
        author: "Agatha Christie",
        genre: "mystery"
    },
    {   
        title: "Harry Potter",   
        author: "J. K. Rowling",
        genre: "fantasy"
    },
    {
        title: "The Big Leap",
        author: "Gay Hendricks",
        genre: "non-fiction"
    }
    
];

// getBooksByGenre(myBooks, "non-fiction");
let result = getBooksByGenre(myBooks, "non-fiction");
console.log(result);


getBooksByGenre(myBooks, "mystery");