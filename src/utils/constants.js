export const buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button"); //переменная открытия редактирования профиля
export const userName = document.querySelector(".profile__user-name"); //переменная имени профиля на странице
export const userjob = document.querySelector(".profile__user-job"); //переменная работы на странице
export const popupTypeEdit = document.querySelector(".popup_type_edit"); //переменная редактирования профиля
export const nameInput = document.querySelector(".popup__input_string_name"); //переменная для строки профиля в popup'е
export const jobInput = document.querySelector(".popup__input_string_job"); //переменная для строки профиля в popup'е
export const buttonProfileClose = popupTypeEdit.querySelector(".popup__close-button"); //переменная закрытия редактирования профиля
export const profileForm = popupTypeEdit.querySelector(".popup__form"); //переменная сохранения профиля

export const buttonAdd = document.querySelector(".profile__add-button"); //переменная кнопки добавления "Места"
export const popupTypeCard = document.querySelector(".popup_type_card"); //переменная для добавления места
export const cardNameInput = popupTypeCard.querySelector(".popup__input_card_name"); //переменная для строки профиля
export const cardUrlInput = popupTypeCard.querySelector(".popup__input_card_url"); //переменная для строки профиля
export const buttonCardClose = popupTypeCard.querySelector(".popup__close-button"); //переменная закрыть popup редактирования "Места"
export const cardFormAdd = popupTypeCard.querySelector(".popup__form"); //форма popup'а в редактировании профиля

export const popupImage = document.querySelector(".popup_type_image");
export const buttonImageClose = popupImage.querySelector(".popup__close-button");
export const buttonCardsSave = cardFormAdd.querySelector(".popup__save-button");
export const imgName = document.querySelector(".popup__image-name");
export const imgUrl = document.querySelector(".popup__image-url");
export const elements = document.querySelector(".elements");
export const cardTemplateSelector = ".template";

export const initialCards = [
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
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
