export class Api {
  constructor({ url, headers }) {
    // передаем url API и заголовок
    this._url = url;
    this._headers = headers;
  }

  getAllData() {
    return Promise.all([this.getInitialCards(), this.getUser()]);
  }

  getUser() {
    // загружаем имя пользователя
    return fetch(`${this._url}users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  setUserInfo(name, about) {
    // запрос на изменение данных пользователя метод PATCH
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  createCard(card) {
    // создать карточку метод POST
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(id) {
    // удалить карточку метод DELETE
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(id) {
    // удалить лайк метод DELETE
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addLike(id) {
    // добавить лайк метод PUT
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  setUserAvatar(avatar) {
    // запрос на изменение аватара пользователя, метод PATCH
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  };
}
