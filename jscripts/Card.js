export class Card {
  constructor(data, cardTemplate, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate.querySelector(".element");
    // this._template = document.querySelector(this._cardTemplate).content.querySelector('.element');
    // this._cardTemplate = cardTemplate.querySelector(".element");
    // this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  //_getElement() {
  //  this._templateView = document
  //  .querySelector(this._cardTemplate)
  //  .content
  //  .querySelector('.element')
  //  .cloneNode(true);

  //return this._templateView;
  //}

  _getElement() {
    this._templateView = this._cardTemplate.cloneNode(true);
    return this._templateView;
  }
  // я перепробовал кучу вариантов, но единственный, который работает - это этот. у меня не получается проводить поиск темплейта в _getElement, просто вылезает ошибка.
  // и изначально темплейт мой выглядил так, как вы видите сверху(даже в пр6 и раньше).
  _removeItem() {
    this._templateView.remove();
  }

  _getisLike() {
    this._cardLiked.classList.toggle("element__heart-active");
  }

  _addEventListeners() {
    this._cardRemove = this._templateView.querySelector(".element__delete");
    this._cardLiked = this._templateView.querySelector(".element__heart");

    this._cardRemove.addEventListener("click", () => this._removeItem());
    this._cardLiked.addEventListener("click", () => this._getisLike());

    this._cardImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  createCard() {
    this._getElement();

    this._cardTitle = this._templateView.querySelector(".element__title");
    this._cardImg = this._templateView.querySelector(".element__photo");

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;

    this._addEventListeners();

    return this._templateView;
  }
}
