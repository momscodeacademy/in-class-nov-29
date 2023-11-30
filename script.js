function getBooksByGenre(books, genre){

    let booksByGenre = [];

    for (let i=0; i < books.length; i++){
        let currBook = books[i];
        console.log(currBook);
        
        let currGenre = currBook.genre;
        if(currGenre == genre){
            booksByGenre.push(currBook);
        }
    }
    return booksByGenre;
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

getBooksByGenre(myBooks, "non-fiction");
getBooksByGenre(myBooks, "mystery");

