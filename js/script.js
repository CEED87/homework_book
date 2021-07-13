/*1. Объявить класс под названием “Book”.
2. Класс “Book”. У каждой книги есть “название”, “автор”, “id”, “количество страниц”.
3. Класс “TravelBook”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”,
 “тип обложки”. Должен быть метод который выводит информацию о “названии”, “авторе”,
  “количестве страниц”. Должен быть метод удаления книги из списка.
3. Класс “Comics”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”, “номер выпуска”.
 Должен быть метод который выводит информацию о “названии”, “авторе”, “количестве страниц”. Должен быть метод 
 удаления книги из списка.
4. Внешний интерфейс должен быть следующим:
Слева все поля вводакоторые отвечают за добавление новой книги от класса TravelBook;
Справа все поля ввода отвечающие за добавление новой книги от класса Comics;
Не важно какой тип книги мы добавляем, все они должны добавляться в один и тот же список книг.
На кнопку удалить (повесить функционал удаления книги).
На кнопку подробнее (вывести данные в модальном окне о “названии”, “авторе”, “количестве страниц”).
 */

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
    constructor(covType, name, author, pages, id) {
        super(name, author, pages, id);
        this._covType = covType;
    }
    get info() {
        return `Название: ${this._name}, автор: ${this._author}, количество страниц: ${this._pages}.`;
    }

    deleteBook(bbb) {
       if (bbb.id === this._id) {
           delete bbb;
       };

    }

}

class Comics extends Book {
    constructor(numSt, name, author, pages, id) {
        super(name, author, pages, id);
        this._numSt = numSt;
    }
    get info() {
        return `Название: ${this._name}, автор: ${this._author}, количество страниц: ${this._pages}.`;
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
    let nameObject = new nameClass(arr[3], arr[0], arr[1], arr[2], Book.counter);
    Book.arr.push(nameObject)
    ul.innerHTML += `<ul>
                         <li>${nameObject._name}</li>
                         <li>${nameObject._author}</li>
                         <li><button class="delete">удалить</button> <button id="${Book.counter}" class="info">подробнее</button></li>
                     </ul>`.trim();
    nameForm.reset();
    info();
}

function info() {
    let btnInfo = document.querySelectorAll('.info');
    btnInfo.forEach(btn => {
        btn.addEventListener('click', () => {
            Book.arr.forEach(el => {
                if (+btn.id === el._id) {
                    alert(el.info);
                    el.deleteBook(el)
                }
            });
        });
    });
}