import { Menu } from "./modules/menu";
import { MenuMobile } from "./modules/menuMobile";
import { Schedule } from "./modules/schedules";
import { Discography } from "./modules/discography";

const menu = new Menu("header");
const menuMobile = new MenuMobile("menu__mobile__btn", "links", "links__item");
const schedule = new Schedule("schedule__list", "schedule__subtitle__date");
const discography = new Discography(
  "discography__slides",
  "discography__slide__item",
  "discography__slide__arrow__icon",
  "discography__list__title",
  "discography__list__author",
  "discography__list"
);

menu.init();
menuMobile.init();
schedule.init();
discography.init();
