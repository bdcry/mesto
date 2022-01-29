const popupElement = document.querySelector('.popup'); //переменная всего popup
const editProfile = document.querySelector('.profile-edit'); //переменная открытия редактирования профиля
const closeButton = document.querySelector('.popup__close-button'); //переменная закрытия редактирования профиля

const userName = document.querySelector('.profile__user-name'); //переменная имени профиля на странице
const userjob = document.querySelector('.profile__user-job'); //переменная работы на странице

let nameInput = document.querySelector('.popup__input_name'); //Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_job'); //Воспользуйтесь инструментом .querySelector()

let formElement = document.querySelector('.popup__form'); //Находим форму в DOM


function openPopup() {
  popupElement.classList.add('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userjob.textContent;
}

function closePopup() {
  popupElement.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
  evt.preventDefault();

  userName.textContent = nameInput.value; //Получите значение полей из свойства value
  userjob.textContent = jobInput.value;

  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); //Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»

editProfile.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);