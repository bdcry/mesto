export class Card {
    constructor(data, _cardTemplate, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardTemplate = _cardTemplate.querySelector('.element');
      this._handleCardClick = handleCardClick;
    }
  
    _createView() {
      this._templateView = this._cardTemplate.cloneNode(true)
    }
  
    _removeItem() {
      this._templateView.remove()
    }
  
    _isLike(e) {
      this._cardLikedActive = 'element__heart-active'
  
      e.target.classList.toggle(this._cardLikedActive)
    }
  
    _addEventListeners() {
      this._cardRemove = this._templateView.querySelector('.element__delete')
      this._cardLiked = this._templateView.querySelector('.element__heart')
      
      this._cardRemove.addEventListener('click', () => this._removeItem())
      this._cardLiked.addEventListener('click', (e) => this._isLike(e))
  
      this._cardImg.addEventListener('click', () => this._handleCardClick(this._name, this._link))
    }
  
    createCard() {
      this._createView()
  
      this._cardTitle = this._templateView.querySelector('.element__title')
      this._cardImg = this._templateView.querySelector('.element__photo')
  
      this._cardTitle.textContent = this._name
      this._cardImg.src = this._link
      this._cardImg.alt = this._name
  
      this._addEventListeners()
      
      return this._templateView
    }
  }
