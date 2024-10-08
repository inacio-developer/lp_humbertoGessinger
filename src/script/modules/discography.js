import { discography } from "../../assets/data/discography";

class Discography {
  constructor(slide, records, btn, title, author, text) {
    this.slide = document.querySelector(`.${slide}`);
    this.records = this.slide.querySelectorAll(`.${records}`);
    this.btn = document.querySelectorAll(`.${btn}`);
    this.titleHTML = document.querySelector(`.${title}`);
    this.authorHTML = document.querySelector(`.${author}`);
    this.textHTML = document.querySelector(`.${text}`);
    this.count = 0;
    this.index = 0;
  }

  musicList(array) {
    const element = document.createElement("ul");
    element.classList.add("discography__list");
    array.forEach((music, i) => {
      const item = document.createElement("li");
      item.classList.add("discography__list__item");
      item.innerText = `${i}. ${music.name} - ${music.time}`;
      element.appendChild(item);
    });

    return element;
  }

  innerHTML() {
    const record = discography[this.index];
    this.titleHTML.innerText = `${record.year}: ${record.record}`;
    this.authorHTML.innerText = `${record.by}`;
    this.textHTML.innerHTML = this.musicList(record.musics).innerHTML;
  }

  setIndex(move) {
    if (this.index == this.records.length - 1 && move === "next") {
      this.index = 0;
    } else if (this.index === 0 && move == "preview")
      this.index = this.records.length - 1;
    else {
      move == "preview" ? this.index-- : this.index++;
    }

    this.innerHTML();
  }

  next() {
    this.setIndex("next");
    if (this.count !== -this.records[this.records.length - 1].offsetLeft) {
      const distance = this.records[0].offsetLeft - this.records[1].offsetLeft;
      this.count += distance;
    } else {
      this.count = 0;
    }

    this.slide.style = `transform: translate3d(${this.count}px, 0, 0)`;
  }

  preview() {
    this.setIndex("preview");

    if (this.count !== 0) {
      const distance = this.records[0].offsetLeft - this.records[1].offsetLeft;
      this.count -= distance;
    } else {
      this.count = -this.records[this.records.length - 1].offsetLeft;
    }
    this.slide.style = `transform: translate3d(${this.count}px, 0, 0)`;
  }

  addEvent() {
    this.btn[0].addEventListener("click", this.preview);
    this.btn[1].addEventListener("click", this.next);
  }

  bind() {
    this.preview = this.preview.bind(this);
    this.next = this.next.bind(this);
  }

  init() {
    if (
      this.slide &&
      this.btn &&
      this.titleHTML &&
      this.authorHTML &&
      this.textHTML
    ) {
      this.bind();
      this.innerHTML();
      this.addEvent();
    }
  }
}

export { Discography };
