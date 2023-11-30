function getBooksByGenre(books, genre){
    //return list of books (titles) in genre
    
    let bookList = [];
    
    for (i=0; i<books.length; i++){
        let currBookObject = books[i];
        // console.log(currBookObject);

        if (currBookObject.genre == genre){
            // console.log("genre match!");
            bookList.push(currBookObject.title)
        }
    }

    return (genre + ": " + bookList);    
};

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

let bookList1 = getBooksByGenre(myBooks, "non-fiction");
console.log(bookList1);
let bookList2 = getBooksByGenre(myBooks, "mystery");
console.log(bookList2);