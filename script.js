function getBooksByGenre(books, genre){
//for loop to go throuh each book and if statement to see if it is of a specific genre
    let booksByGenre = [];

    for (i = 0; i < books.length; i++){
        let currBook = books[i];
        let currGenre = currBook.genre
        if(currGenre == genre){
            console.log("hey")       
         }
    }


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

//should return a list with The Big Leap and 10X is Easier than 2x. Print out the results to the console