/*1. Объявить класс под названием “Book”.
2. Класс “Book”. У каждой книги есть “название”, “автор”, “id”, “количество страниц”.
3. Класс “TravelBook”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”,
 “тип обложки”. Должен быть метод который выводит информацию о “названии”, “авторе”,
  “количестве страниц”. Должен быть метод удаления книги из списка.
3. Класс “Comics”. У каждой новой книги есть: “название”, “автор”, “id”, “количество страниц”, “номер выпуска”. Должен быть метод который выводит информацию о “названии”, “авторе”, “количестве страниц”. Должен быть метод удаления книги из списка.
4. Внешний интерфейс должен быть следующим:
Слева все поля вводакоторые отвечают за добавление новой книги от класса TravelBook;
Справа все поля ввода отвечающие за добавление новой книги от класса Comics;
Не важно какой тип книги мы добавляем, все они должны добавляться в один и тот же список книг.
На кнопку удалить (повесить функционал удаления книги).
На кнопку подробнее (вывести данные в модальном окне о “названии”, “авторе”, “количестве страниц”).
 */

class Book {
    constructor(name, author, id, countPages) {
        this._name = name;
        this._author = author;
        this._id = id;
        this._countPages = countPages;
        this._obj = {};
    }
}

class TravelBook extends Book {
    constructor(name, author, id, countPages, covType) {
        super(name, author, id, countPages);
        this._covType = covType;
    }
    get info() {
        return `Название: ${this._name}, автор: ${this._author}, количество страниц: ${this._countPages}.`;
    }
    deleteBook(key) {
        delete this._obj[key];
    }
}

class Comics extends TravelBook {
    constructor(name, author, id, countPages, num) {
        super(name, author, id, countPages);
        this.num = num;
    }

}

const travelBook = new TravelBook('название', 'автор', 'id', 'количество страниц','тип обложки');
const comics = new Comics('название2', 'автор2', 'id2', 'количество страниц2', 3);

// console.log(comics.num)