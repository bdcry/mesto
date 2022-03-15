const editProfile = document.querySelector('.profile__edit-button'); //переменная открытия редактирования профиля
const userName = document.querySelector('.profile__user-name'); //переменная имени профиля на странице
const userjob = document.querySelector('.profile__user-job'); //переменная работы на странице
const popupTypeEdit = document.querySelector('.popup_type_edit'); //переменная редактирования профиля
const nameInput = document.querySelector('.popup__input_string_name'); //переменная для строки профиля в popup'е
const jobInput = document.querySelector('.popup__input_string_job'); //переменная для строки профиля в popup'е
const closeProfileButton = popupTypeEdit.querySelector('.popup__close-button'); //переменная закрытия редактирования профиля
const profileForm = popupTypeEdit.querySelector('.popup__form'); //переменная сохранения профиля

const addButton = document.querySelector('.profile__add-button'); //переменная кнопки добавления "Места" 
const popupTypeCard = document.querySelector('.popup_type_card'); //переменная для добавления места
const inputCardName = popupTypeCard.querySelector('.popup__input_card_name'); //переменная для строки профиля
const inputCardUrl = popupTypeCard.querySelector('.popup__input_card_url'); //переменная для строки профиля
const closeButtonCard = popupTypeCard.querySelector('.popup__close-button'); //переменная закрыть popup редактирования "Места"
const addCardForm = popupTypeCard.querySelector('.popup__form'); //форма popup'а в редактировании профиля

const saveButtonCards = addCardForm.querySelector('.popup__save-button');
const imgName = document.querySelector('.popup__image-name');
const imgUrl = document.querySelector('.popup__image-url');
const elements = document.querySelector('.elements');
const template = document.querySelector('.template'); //переменная блока карточки

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://images.unsplash.com/photo-1645625436473-f48f07b704ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  
    },
    {
      name: 'Москва',
      link: 'https://images.unsplash.com/photo-1645702305179-5c8512328f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80'
  
    },
    {
      name: 'Сочи',
      link: 'https://images.unsplash.com/photo-1645655086047-7f9e08368386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  
    },
    {
      name: 'Пафос',
      link: 'https://images.unsplash.com/photo-1634751467164-e8998d565c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80'
  
    },
  ];