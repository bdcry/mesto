export class Card {
  constructor(
    data,
    cardTemplateSelector,
    handleCardClick,
    openPopupDeleteCard,
    handelLikeClick,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._elementCardCountLikes = data.likes;
    this._elementCardId = data._id;
    this._elementCardUserId = data.owner._id;
    this._userId = userId;
    this._openPopupDeleteCard = openPopupDeleteCard;
    this._handelLikeClick = handelLikeClick;
  }

  _getElement() {
    const template = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return template;
  }

  deleteCard() {
    this._templateView.remove();
    this._templateView = null;
  }

  toggleLike() {
    const toggleLike = this._elementCardCountLikes.find(
      (user) => user._id === this._userId
    );
    return toggleLike;
  }

  setLikes(countLikes) {
    this._cardLiked = this._templateView.querySelector(".element__heart");
    this._elementCardCountLikes = countLikes;
    this._countLikes = this._templateView.querySelector(".element__heart-count");
    this._countLikes.textContent = this._elementCardCountLikes.length;

    this._cardLikedActive = "element__heart-active";
    if (this.toggleLike()) {
      this._cardLiked.classList.add(this._cardLikedActive);
    } else {
      this._cardLiked.classList.remove(this._cardLikedActive);
    }
  }

  _addEventListeners() {
    this._cardLiked.addEventListener("click", () =>
      this._handelLikeClick(this._elementCardId)
    );
    this._cardRemove.addEventListener("click", () =>
      this._openPopupDeleteCard(this._elementCardId)
    );
    this._cardImg.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  createCard() {
    this._templateView = this._getElement();
    this.setLikes(this._elementCardCountLikes);

    this._cardRemove = this._templateView.querySelector(".element__delete");
    this._cardTitle = this._templateView.querySelector(".element__title");
    this._cardImg = this._templateView.querySelector(".element__photo");

    this._cardTitle.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;

    if (this._elementCardUserId === this._userId) {
      this._cardRemove.classList.add("element__delete_visible");
    }

    this._addEventListeners();

    return this._templateView;
  }
}
