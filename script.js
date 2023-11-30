function getBooksByGenre(books, genre){
   
    let result = [];

    for(let i = 0; i < books.length; i++){
        if(books[i].genre === genre){
            result.push(books[i]);
        }
    }

    return result;
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


let result = getBooksByGenre(myBooks, "non-fiction");
console.log(result);
let result2 = getBooksByGenre(myBooks, "mystery");
console.log(result2);