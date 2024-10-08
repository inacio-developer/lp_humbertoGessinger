import { events } from "../../assets/data/events";

class Schedule {
  constructor(list, nextDate) {
    this.list = document.querySelector(`.${list}`);
    this.nextDate = document.querySelector(`.${nextDate}`);
  }

  insert() {
    events.forEach((eventInfo) => {
      this.list.appendChild(this.html(eventInfo));
    });
  }

  insertCount() {
    this.nextDate.innerText = this.createMsg();
  }

  createMsg() {
    const data = this.countDate();
    const object = data.time;

    const setence = {
      year: object.year == 1 ? "ano" : object.year > 1 ? "anos" : "",
      month: object.month == 1 ? "mês" : object.month > 1 ? "meses" : "",
      day: object.day == 1 ? "dia" : object.day > 1 ? "dias" : "",
    };

    const msg = `${object.year ? object.year + " " + setence.year + ", " : ""}${
      object.month ? object.month + " " + setence.month + " e " : ""
    }${object.day ? object.day + " " + setence.day + " em " : ""}${
      data.event.city
    }, ${data.event.state} `;

    return msg;
  }

  nearestEvent() {
    let futureTimeStamp = new Date().getTime();

    let nearestEvent;

    events.forEach((eventInfo) => {
      const eventDate =
        eventInfo.year + "-" + eventInfo.month + "-" + eventInfo.day;
      const date = new Date(eventDate).getTime();

      if (futureTimeStamp > date || !nearestEvent) {
        nearestEvent = eventInfo;
        futureTimeStamp = date;
      }
    });

    return [nearestEvent, futureTimeStamp];
  }

  simulateDate() {
    const dateInit = new Date("2021-09-03");
    const dateAtt = new Date();

    const day = dateAtt.getDay() - dateInit.getDate();
    const month = dateAtt.getMonth() - dateInit.getDate();
    const year =
      "202" + (dateAtt.getFullYear() - dateInit.getFullYear()).toString();

    return new Date(parseInt(year), month, day);
  }

  countDate() {
    const [nearestEvent, futureTimeStamp] = this.nearestEvent();
    const dateAtt = new Date(this.simulateDate());
    const dateFuture = new Date(futureTimeStamp);

    let diffYear = dateFuture.getFullYear() - dateAtt.getFullYear();
    let diffMonth = dateFuture.getMonth() - dateAtt.getMonth();
    let diffDay = dateFuture.getDate() - dateAtt.getDate();

    if (diffMonth < 0) {
      diffYear--;
      diffMonth += 12;
    }

    if (diffDay < 0) {
      const lastMonth = new Date(
        dateFuture.getFullYear(),
        dateFuture.getMonth(),
        0
      ).getDate();
      diffMonth--;
      diffDay += lastMonth;
    }

    return {
      event: nearestEvent,
      time: {
        year: diffYear,
        month: diffMonth,
        day: diffDay,
      },
    };
  }

  month(time) {
    const date = new Date(time);
    const month = date.getMonth();
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];

    return months[month];
  }

  day(time) {
    const date = new Date(time);
    const day = date.getDay();
    const days = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];

    return days[day];
  }

  html({ day, month, year, city, state, eventName, venue, country }) {
    const date = year + "-" + month + "-" + day;
    const element = document.createElement("li");
    const code = `<a class="schedule__item__link" href="#">
            <time class="schedule__item__date" datetime="2024-24-08"
              >${day} de ${this.month(date).substring(0, 3)}.
              <span class="schedule__item__date__day">${this.day(
                date
              ).substring(0, 3)}.
              </span></time
            >
            <p class="schedule__item__local"> ${
              venue ? `<p class="schedule__item__local">${venue}</p>` : ""
            }</p>
            ${
              eventName
                ? `<p class="schedule__item__local">${eventName}</p>`
                : ""
            }
            <p class="schedule__item__city">${city}, ${state} - ${country}</p>
            <div class="schedule__item__hover">
              <span class="schedule__item__hover__text">
                Comprar
              </span>
            </div>
          </a>`;

    element.classList.add("schedule__item");
    element.innerHTML = code;

    return element;
  }

  init() {
    this.insert();
    this.insertCount();
  }
}

export { Schedule };
