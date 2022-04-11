import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button"); //переменная открытия редактирования профиля
const userName = document.querySelector(".profile__user-name"); //переменная имени профиля на странице
const userjob = document.querySelector(".profile__user-job"); //переменная работы на странице
const popupTypeEdit = document.querySelector(".popup_type_edit"); //переменная редактирования профиля
const nameInput = document.querySelector(".popup__input_string_name"); //переменная для строки профиля в popup'е
const jobInput = document.querySelector(".popup__input_string_job"); //переменная для строки профиля в popup'е
const buttonProfileClose = popupTypeEdit.querySelector(".popup__close-button"); //переменная закрытия редактирования профиля
const profileForm = popupTypeEdit.querySelector(".popup__form"); //переменная сохранения профиля

const buttonAdd = document.querySelector(".profile__add-button"); //переменная кнопки добавления "Места"
const popupTypeCard = document.querySelector(".popup_type_card"); //переменная для добавления места
const cardNameInput = popupTypeCard.querySelector(".popup__input_card_name"); //переменная для строки профиля
const cardUrlInput = popupTypeCard.querySelector(".popup__input_card_url"); //переменная для строки профиля
const buttonCardClose = popupTypeCard.querySelector(".popup__close-button"); //переменная закрыть popup редактирования "Места"
const cardFormAdd = popupTypeCard.querySelector(".popup__form"); //форма popup'а в редактировании профиля

const popupImage = document.querySelector(".popup_type_image");
const buttonImageClose = popupImage.querySelector(".popup__close-button");
const buttonCardsSave = cardFormAdd.querySelector(".popup__save-button");
const imgName = document.querySelector(".popup__image-name");
const imgUrl = document.querySelector(".popup__image-url");
const elements = document.querySelector(".elements");
const cardTemplateSelector = ".template";

const initialCards = [
  {
    name: "Москва",
    link: "https://images.unsplash.com/photo-1645702305179-5c8512328f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80",
  },
  {
    name: "Сочи",
    link: "https://images.unsplash.com/photo-1645655086047-7f9e08368386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Пафос",
    link: "https://images.unsplash.com/photo-1634751467164-e8998d565c43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://images.unsplash.com/photo-1645625436473-f48f07b704ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formValidProfile = new FormValidator(validationConfig, profileForm);
const formValidCard = new FormValidator(validationConfig, cardFormAdd);

// создание карточки
function createNewCard(e) {
  e.preventDefault();
  const card = new Card(
    { name: cardNameInput.value, link: cardUrlInput.value },
    cardTemplateSelector,
    handleCardClick
  );
  elements.append(card.createCard());
  closePopup(popupTypeCard);
}

function displayCards(cards) {
  cards.forEach((item) => {
    const card = new Card(item, cardTemplateSelector, handleCardClick);
    elements.append(card.createCard());
  });
}

// открывает popup создания новой карточки
function openPopupCard() {
  openPopup(popupTypeCard);
  cardNameInput.value = "";
  cardUrlInput.value = "";
  formValidCard.resetValidation();
}

function handleCardClick(name, link) {
  imgUrl.src = link;
  imgUrl.alt = name;
  imgName.textContent = name;
  openPopup(popupImage);
}

function openPopupProfile() {
  openPopup(popupTypeEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userjob.textContent;
  formValidProfile.resetValidation();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userjob.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", pressEscape);
  document.addEventListener("mousedown", clickOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", pressEscape);
  document.removeEventListener("mousedown", clickOverlay);
}
function pressEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}
function clickOverlay(evt) {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.target === openedPopup) {
    closePopup(openedPopup);
  }
}

formValidProfile.enableValidation();
formValidCard.enableValidation();
displayCards(initialCards);
cardFormAdd.addEventListener("submit", createNewCard);
buttonAdd.addEventListener("click", openPopupCard);
buttonCardClose.addEventListener("click", () => closePopup(popupTypeCard));
buttonImageClose.addEventListener("click", () => closePopup(popupImage));
buttonOpenEditProfilePopup.addEventListener("click", openPopupProfile);
buttonProfileClose.addEventListener("click", () => closePopup(popupTypeEdit));
profileForm.addEventListener("submit", handleProfileFormSubmit);
