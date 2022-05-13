export class Section {
  constructor({ items, renderer }, container) {
    this._items = items;
    this._renderer = renderer;

    this._container = document.querySelector(container);
  }

  setItems() {
    this._items.then((cards) => {
      cards.forEach((card) => {
        this._renderer(card);
      });
    });
  }

  addItemServer(element) {
    this._container.append(element);
  }

  addItemUser(element) {
    this._container.prepend(element);
  }
}
