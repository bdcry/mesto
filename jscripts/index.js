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

const createCard = (item) => {
  const newCard = template.content.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__title').textContent = item.name;
  newCard.querySelector('.element__photo').src = item.link;
  newCard.querySelector('.element__photo').alt = item.name;

  const buttonDeleteCard = newCard.querySelector('.element__delete');
  const buttonLike = newCard.querySelector('.element__heart');

  buttonDeleteCard.addEventListener('click', deleteCard);
  function likeCard() {
    buttonLike.classList.toggle('element__heart-active');
  }
  buttonLike.addEventListener('click', likeCard);

  function openPhoto(photo) {
    openPopup(popupImage);
    photo.querySelector('.popup__image-url').src = item.link;
    photo.querySelector('.popup__image-url').alt = item.name;
    photo.querySelector('.popup__image-name').textContent = item.name;
  }

  newCard
    .querySelector('.element__photo')
    .addEventListener('click', () => openPhoto(popupImage));

  return newCard;
};

const popupImage = document.querySelector('.popup_type_image');
const closeButtonImage = popupImage.querySelector('.popup__close-button');
const result = initialCards.map((item) => {
  return createCard(item);
});


function openPopup(popup) {
  popup.classList.add('popup_opened');
}
  
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupProfile() {
  openPopup(popupTypeEdit);
  nameInput.value = userName.textContent;
  jobInput.value = userjob.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value; // Получите значение полей из свойства value
  userjob.textContent = jobInput.value;
  closePopup(popupTypeEdit);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(
    createCard({ name: inputCardName.value, link: inputCardUrl.value })
  );
  inputCardName.value = '';
  inputCardUrl.value = ''; 
  closePopup(popupTypeCard);
}

function deleteCard(evt) {
  evt.target.closest('.element').remove();
}

closeButtonCard.addEventListener('click', () => closePopup(popupTypeCard)); // закрывает popup длбавления места
addButton.addEventListener('click', () => openPopup(popupTypeCard)); // открывает popup добавления места
editProfile.addEventListener('click', openPopupProfile);
closeProfileButton.addEventListener('click', () => closePopup(popupTypeEdit));
profileForm.addEventListener('submit', handleProfileFormSubmit);
addCardForm.addEventListener('submit', handleCardFormSubmit);
closeButtonImage.addEventListener('click', () => closePopup(popupImage));
elements.append(...result);