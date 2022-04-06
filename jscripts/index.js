import { Card } from './card.js';
import { FormValidator } from './FormValidator.js';

const formValidator = {};
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

const popupImage = document.querySelector('.popup_type_image');
const closeButtonImage = popupImage.querySelector('.popup__close-button');
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


const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

function createCard(item) {
  const card = new Card(item, template, handleCardClick);
  return card.generateCard();
};

// Создания карточки через класс 
const newCard = (cardInfo) => {
  const card = new Card(cardInfo, template, handleCardClick);
  const cardItem = card.creatCard();
  elements.prepend(cardItem);
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', pressEscape);
  document.addEventListener('mousedown', clickOverlay);
};
  
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
  document.removeEventListener('mousedown', clickOverlay);
};

function pressEscape (evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};

function clickOverlay (evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  };
};

function openPopupProfile() {
  openPopup(popupTypeEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userjob.textContent;
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; // Получите значение полей из свойства value
  userjob.textContent = jobInput.value;
  closePopup(popupTypeEdit);
};

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const element = createCard({ name: inputCardName.value, link: inputCardUrl.value });
  prependCard(element);
  inputCardName.value = '';
  inputCardUrl.value = '';
  closePopup(popupTypeCard);
}

// функция добавления карточки в DOM
const prependCard = (cardElement) => {
  elements.prepend(cardElement);
};

// функция клика по карточке
function handleCardClick(name, link) {
  imgUrl.src = link;
  imgUrl.alt = name;
  imgName.textContent = name;
  openPopup(popupImage);
};

// проход по масcиву карточек
initialCards.forEach((item) => {
  const card = createCard(item);
  prependCard(card);
});

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    formValidator[ formElement.name ] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

addButton.addEventListener('click', () => openPopup(popupTypeCard)); // открывает popup добавления места
editProfile.addEventListener('click', openPopupProfile);
closeProfileButton.addEventListener('click', () => closePopup(popupTypeEdit));
closeButtonImage.addEventListener('click', () => closePopup(popupImage));
closeButtonCard.addEventListener('click', () => closePopup(popupTypeCard)); // закрывает popup длбавления места
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleCardFormSubmit);