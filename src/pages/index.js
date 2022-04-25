import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import "../pages/index.css";

import {
  initialCards,
  validationConfig,
  elements,
  cardTemplateSelector,
  buttonOpenEditProfilePopup,
  userName,
  userjob,
  popupTypeEdit,
  nameInput,
  jobInput,
  buttonProfileClose,
  profileForm,
  buttonAdd,
  popupTypeCard,
  cardNameInput,
  cardUrlInput,
  buttonCardClose,
  cardFormAdd,
  popupImage,
  buttonImageClose,
  buttonCardsSave,
  imgName,
  imgUrl,
} from "../utils/constants.js";

const formValidProfile = new FormValidator(validationConfig, profileForm);
const formValidCard = new FormValidator(validationConfig, cardFormAdd);

// константа класса формы пользователя
const userData = new UserInfo({
  name: ".profile__user-name",
  info: ".profile__user-job",
});

function cardCreate(item) {
  const cardItem = new Card(item, cardTemplateSelector, handleCardClick);
  const cardElenent = cardItem.createCard();
  return cardElenent;
}

// константа класса реализации карточки в DOM
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(cardCreate(item));
    },
  },
  ".elements"
);

// константы под классов popup'а
const popupCardImg = new PopupWithImage(
  { selectorPopup: popupImage },
  imgUrl,
  imgName
);
const popupCardAdd = new PopupWithForm({
  selectorPopup: popupTypeCard,
  functionPopupForm: () => {
    const card = new Card(
      { name: cardNameInput.value, link: cardUrlInput.value },
      cardTemplateSelector,
      handleCardClick
    );
    elements.append(card.createCard());
  },
});
const popupProfileEdit = new PopupWithForm({
  selectorPopup: popupTypeEdit,
  functionPopupForm: () => {
    userData.setUserInfo({ name: nameInput.value, info: jobInput.value });
  },
});

// открывает popup создание новой карточки
function openPopupCard() {
  popupCardAdd.open();
  cardNameInput.value = "";
  cardUrlInput.value = "";
  formValidCard.resetValidation();
}

// открывает popup карточки
function handleCardClick(name, link) {
  popupCardImg.open(name, link);
}

// Профиль
function openPopupProfile() {
  popupProfileEdit.open();
  const newUserData = userData.getUserInfo();
  nameInput.value = newUserData.name;
  jobInput.value = newUserData.info;
  formValidProfile.resetValidation();
}

/* Запуск функций */
// Запуск метода валидации для каждой из форм
formValidProfile.enableValidation();
formValidCard.enableValidation();

// Реализация карточек
cardSection.setItems();

/* EventListeners */
// Popup добавления нового места
buttonAdd.addEventListener("click", () => openPopupCard()); // открывает popup добавления места
popupCardAdd.setEventListeners(); // закрывает popup'a добавления места

// Popup открытой карточки
popupCardImg.setEventListeners(); // закрывает popup'a открытой карточки

// Профиль
buttonOpenEditProfilePopup.addEventListener("click", () => openPopupProfile());
popupProfileEdit.setEventListeners(); // закрытие popup'a профиля
