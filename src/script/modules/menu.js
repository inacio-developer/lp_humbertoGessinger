class Menu {
  constructor(menu) {
    this.menu = document.querySelector(menu);
  }

  addBackground() {
    scrollY > 200
      ? (this.menu.style.backgroundColor = "#2E2E2E")
      : (this.menu.style.backgroundColor = "transparent");
  }

  addEvents() {
    document.addEventListener("scroll", this.addBackground);
  }

  bind() {
    this.addBackground = this.addBackground.bind(this);
  }

  init() {
    if (this.menu) {
      this.bind();
      this.addEvents();
    }
  }
}

export { Menu };
