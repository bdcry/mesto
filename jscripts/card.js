export class Card {
    constructor(data, cardTemplate, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplate = cardTemplate; // создание разметки карточки
        this._handleCardClick = handleCardClick; // название функции записи данных в карточку
    };

    _getTemplate() {
        const cardItem = this._cardTemplate.content.querySelector('.element').cloneNode(true); // нашли и клонировали шаблон карточки
        return cardItem;
    };

    generateCard() {
        this._card = this._getTemplate();
        this._cardImage = this._card.querySelector('.element__photo');

        // записываем данные
        this._cardImage.alt = this._name;
        this._cardImage.src = this._link;
        this._card.querySelector('.element__title').textContent = this._name;

        this._setEventListeners();
        return this._card;
    };

    _setEventListeners() { // слушатель клика
        this._cardImage.addEventListener('click', () => { // запись данных по карточке
            this._handleCardClick(this._name, this._link);
        });

        this._card.querySelector('.element__heart').addEventListener('click', function(e) { // поставить лайк
            e.target.classList.toggle('element__heart-active');
        });

        this._card.querySelector('.element__delete').addEventListener('click', () => { // удалить карточку
            this._card.remove();
        });

    };
};