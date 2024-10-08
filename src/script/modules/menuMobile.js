class MenuMobile {
  constructor(btn, menu, links) {
    this.btn = document.querySelector(`.${btn}`);
    this.menu = document.querySelector(`.${menu}`);
    this.links = this.menu.querySelectorAll(`.${links}`);
  }

  condition() {
    const isTrue =
      this.menu.classList.contains("menu__mobile__active") &&
      this.btn.classList.contains("menu__mobile__on");

    if (isTrue) this.toogle();
  }

  toggle() {
    this.menu.classList.toggle("menu__mobile__active");
    this.btn.classList.toggle("menu__mobile__on");
  }

  addEvent() {
    this.btn.addEventListener("click", this.toggle);

    this.links.forEach((link) =>
      link.addEventListener("click", this.condition)
    );
  }

  bind() {
    this.toggle = this.toggle.bind(this);
  }

  init() {
    if ((this.btn, this.menu, this.links)) {
      this.bind();
      this.addEvent();
    }
  }
}

export { MenuMobile };
