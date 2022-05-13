import { Popup } from "./Popup.js";

export class PopupWithConfirm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._PopupForm = this._selectorPopup.querySelector(".popup__form");
    this._inputList = this._PopupForm.querySelectorAll(".popup__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._PopupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this._formSubmit();
    });
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
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
}
