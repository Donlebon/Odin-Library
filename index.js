let title = document.querySelector(".title-input")
let author = document.querySelector(".author-input")
let pages = document.querySelector(".page-input")
let addButton = document.querySelector(".add-button")
let newBookTitle = document.querySelector(".bookTitle")
let newAuthor = document.querySelector(".author")
let numberPages = document.querySelector(".numberPages")

let allCards = document.querySelector(".allcards")


let myLibrary = [];
let i = 0;

class Book {
        constructor(title, author, page) {
            this.title = title;
            this.author = author;
            this.pages = page;
            this.number = i;
        }
    }

addButton.addEventListener("click", function(){
    let newBook = new Book(title.value, author.value, pages.value, i)
    myLibrary.push(newBook)
    let newBookAdded = addBookToLibrary(myLibrary)
    allCards.innerHTML = newBookAdded
    let read = document.querySelectorAll(".read")
    let removedBook = document.querySelectorAll(".remove")
    readorNot(read)
    removeBook(removedBook)
})

function addBookToLibrary(myLibrary) {
    let allBooks = myLibrary.map(item => {
        if(item.title === ""){
            item.title = "N/A"
        }
        if(item.author === ""){
            item.author = "N/A"
        }
        if(item.pages === ""){
            item.pages = "N/A"
        }
        return `<div class = "card-container">
            <div class = "card">
                <img src="photobook-icon.svg" alt="Book Image" class = "photobook">
                <h1 class = "bookTitle">${item.title}</h1>
                <p class = "author">${item.author} </p>
                <p class = "numberPages">${item.pages}</p>
                <div class = "card-footer">
                    <img src="unread.png" alt="checkmark" class = "read">
                    <img src="remove-book-icon.svg" alt="remove-icon" class = "remove ${item.number}">
                </div>
            </div>
        </div>`
    }).join('')
    i++;
    return allBooks
}

function readorNot(read){
    for(let i = 0; i < read.length; i++){
        read[i].addEventListener("click", function(e){
            if(read[i].src.includes("unread")){
                read[i].src = "checkmark-book-icon.svg"
            } else if(read[i].src.includes("checkmark")){
                read[i].src = "unread.png"
            }
        })
    }
}

function removeBook(removedBook){
    for(let i = 0; i < removedBook.length; i++){
        removedBook[i].addEventListener("click", function(e){
            let deletedBook = e.composedPath()[0].classList[1]
            let test = myLibrary.findIndex(item =>
                item.number === deletedBook
            )
            myLibrary.splice(test, 1)
            resetBooks()
        })
    }
}

function resetBooks(){
    let newBookAdded = addBookToLibrary(myLibrary)
    allCards.innerHTML = newBookAdded
    let read = document.querySelectorAll(".read")
    let removedBook = document.querySelectorAll(".remove")
    readorNot(read)
    removeBook(removedBook)
}

function reOrganize(myLibrary) {
    let allBooks = myLibrary.map(item => {
        if(item.title === ""){
            item.title = "N/A"
        }
        if(item.author === ""){
            item.author = "N/A"
        }
        if(item.pages === ""){
            item.pages = "N/A"
        }
        return `<div class = "card-container">
            <div class = "card">
                <img src="photobook-icon.svg" alt="Book Image" class = "photobook">
                <h1 class = "bookTitle">${item.title}</h1>
                <p class = "author">${item.author} </p>
                <p class = "numberPages">${item.pages}</p>
                <div class = "card-footer">
                    <img src="unread.png" alt="checkmark" class = "read">
                    <img src="remove-book-icon.svg" alt="remove-icon" class = "remove ${item.number}">
                </div>
            </div>
        </div>`
    }).join('')
    return allBooks
}