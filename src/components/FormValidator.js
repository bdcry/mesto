export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;

    this._inputList = Array.from(
      this._form.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      this._config.submitButtonSelector
    );
  }

  _showInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._config.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  };

  _isValid = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError(inputElement);
    }
  };

  _toggleButtonState = () => {
    const isFormValid = this._form.checkValidity();
    this._submitButton.disabled = !isFormValid;
    this._submitButton.classList.toggle(
      this._config.inactiveButtonClass,
      !isFormValid
    );
  };

  _setEventListeners = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }
}
