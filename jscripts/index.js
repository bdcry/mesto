enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
});

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
    imgUrl.src = item.link;
    imgUrl.alt = item.name;
    imgName.textContent = item.name;
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
  document.addEventListener('keydown', pressEscape);
  document.addEventListener('mousedown', clickOverlay);
}
  
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', pressEscape);
  document.removeEventListener('mousedown', clickOverlay);
}

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
  toggleButtonState(addCardForm, saveButtonCards, 'popup__save-button_disabled');
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