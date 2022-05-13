import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ selectorPopup, functionPopupForm: handleFormSubmit }) {
    super({ selectorPopup });
    this._handleFormSubmit = handleFormSubmit;
    this._PopupForm = this._selectorPopup.querySelector(".popup__form");
    this._popupButtonForm = this._selectorPopup.querySelector(".popup__save-button");
    this._inputList = this._PopupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _formSubmit() {
    this._handleFormSubmit(this._getInputValues());
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._PopupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formSubmit();
    });
  }

  close() {
    super.close();
    this._PopupForm.reset();
  }

  renderLoading(isLoading) { 
    if (isLoading) { 
      this._popupButtonForm.textContent = "Сохранение..."; 
    } else { 
      this._popupButtonForm.textContent = "Сохранить"; 
    } 
  } 
}