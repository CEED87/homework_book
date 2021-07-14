
class Book {
    constructor(name, author, pages, id) {
        this._name = name;
        this._author = author;
        this._id = id;
        this._pages = pages;
        this._id = ++Book.counter;
    }
    static arr = [];
    static counter = 0;
}

class TravelBook extends Book {
    constructor(name, author, pages, id, covType) {
        super(name, author, pages, id);
        this._covType = covType;
    }
    get info() {
        return `Название: ${this._name}, автор: ${this._author}, количество страниц: ${this._pages}.`;
    }
    deleteBook(arg) {
        Book.arr.splice(arg, 1);
     }
}

class Comics extends Book {
    constructor(name, author, pages, id, numSt) {
        super(name, author, pages, id);
        this._numSt = numSt;
    }
    get info() {
        return `Название: ${this._name}, автор: ${this._author}, количество страниц: ${this._pages}.`;
    }
    deleteBook(arg) {
        Book.arr.splice(arg, 1);
     }
}

const formTravel = document.querySelector('#books-travel');
const formComics = document.querySelector('#books-comics');
const btnAddBook = document.querySelectorAll('input[type="submit"]');
let ul = document.querySelector('#list-books');

btnAddBook[0].addEventListener('click', (e) => {
    e.preventDefault();
    addBook(formTravel, TravelBook);

});
btnAddBook[1].addEventListener('click', (e) => {
    e.preventDefault();
    addBook(formComics, Comics);
});

function addBook(nameForm, nameClass) {
    let input = nameForm.querySelectorAll('input[type="text"]');
    let arr = [];
    input.forEach(el => {
        arr.push(el.value);
    });
    let nameObject = new nameClass(arr[0], arr[1], arr[2], Book.counter, arr[3]);
    Book.arr.push(nameObject);
    ul.innerHTML += `<ul>
                         <li>${nameObject._name}</li>
                         <li>${nameObject._author}</li>
                         <li><button id="${Book.counter + 'del'}" class="delete">удалить</button> <button id="${Book.counter}" class="info">подробнее</button></li>
                     </ul>`.trim();
    nameForm.reset();
    info();
    deleEl();
}

function info() {
    let btnInfo = document.querySelectorAll('.info');
    btnInfo.forEach(btn => {
        btn.addEventListener('click', () => {
            Book.arr.forEach(el => {
                if (Number(btn.id) === el._id) {
                    alert(el.info);     
                }
            });
        });
    });
}

function deleEl() {
    let btnDelete = document.querySelectorAll('.delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.remove();
             Book.arr.map((el, i) => {
                 if (btn.id === el._id + 'del') {
                     return el.deleteBook(i);
                 }
            });
        });
    });
}
