export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getElement() {
    const template = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  _removeItem() {
    this._templateView.remove();
  }

  _toggleLike() {
    this._cardLiked.classList.toggle("element__heart-active");
  }

  _addEventListeners() {
    this._cardRemove = this._templateView.querySelector(".element__delete");
    this._cardLiked = this._templateView.querySelector(".element__heart");

    this._cardRemove.addEventListener("click", () => this._removeItem());
    this._cardLiked.addEventListener("click", () => this._toggleLike());

    this._cardImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  createCard() {
    this._templateView = this._getElement();

    this._cardTitle = this._templateView.querySelector(".element__title");
    this._cardImg = this._templateView.querySelector(".element__photo");

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;

    this._addEventListeners();

    return this._templateView;
  }
}
