import { Api } from "../components/Api.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import "../pages/index.css";

/* const */
import {
  validationConfig,
  cardTemplateSelector,
  buttonOpenEditProfilePopup,
  nameInput,
  jobInput,
  profileForm,
  buttonAdd,
  cardNameInput,
  cardUrlInput,
  cardFormAdd,
  imgName,
  imgUrl,
} from "../utils/constants.js";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-40/cards",
  headers: {
    authorization: "370f7f15-595f-448e-a03a-a4a289412e90",
    "Content-Type": "application/json",
  },
});

api
  .getTasks()
  .then((data) => {
    cardShow(data);
  })
  .catch((err) => console.log(err));

function cardShow(data) {
  const cardSection = new Section(
    {
      items: data,
      renderer: (item) => {
        cardSection.addItem(cardCreate(item));
      },
    },
    ".elements"
  );
  cardSection.setItems();
}

// Константы классов валидиции для форм
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

// константы под классов popup'а
const popupCardImg = new PopupWithImage(
  { selectorPopup: ".popup_type_image" },
  imgUrl,
  imgName
);

const popupCardAdd = new PopupWithForm(
  {
    selectorPopup: ".popup_type_card",
    functionPopupForm: (data) => {
      cardSection.addItem(
        cardCreate({ name: data["card-name"], link: data["card-url"] })
      );
    },
  },
  api
);

const popupProfileEdit = new PopupWithForm(
  {
    selectorPopup: ".popup_type_edit",
    unctionPopupForm: (data) => {
      userData.setUserInfo({ name: data["user-name"], info: data["user-job"] });
    },
  },
  api
);

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

// Реализания карточек
// cardSection.setItems()

/* EventListeners */
// Popup добавления нового места
buttonAdd.addEventListener("click", () => openPopupCard()); // открывает popup добавления места
popupCardAdd.setEventListeners(); // закрывает popup'a добавления места

// Popup открытой карточки
popupCardImg.setEventListeners(); // закрывает popup'a открытой карточки

// Профиль
buttonOpenEditProfilePopup.addEventListener("click", () => openPopupProfile());
popupProfileEdit.setEventListeners(); // закрытие popup'a профиля
