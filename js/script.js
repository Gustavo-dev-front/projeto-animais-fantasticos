import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnimation from "./modules/scroll-animation.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import Dropdown from "./modules/dropdown.js";
import menuMobileShow from "./modules/menuMobile.js";
import checkOpen from "./modules/checkOpen.js";
import fetchAnimais from "./modules/fetchAnimais.js";

const scrollSuave = new ScrollSuave('header nav a[href^="#"]:not([href="#"])');
scrollSuave.init();

const accordion = new Accordion("#faq dl dt");
accordion.init();

const tabNav = new TabNav("[data-component='lista-animais'] img", '[data-component = "descricao-animais"]');
tabNav.init();

const modal = new Modal(
  '[data-component="modal-container"]',
  '[data-modal-button="open"]',
  '[data-modal-button="close"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnimation = new ScrollAnimation("[data-anime='scroll']");
scrollAnimation.init();

const dropdown = new Dropdown("[data-dropdown-menu]", ["click", "touchstart"]);
dropdown.init();

menuMobileShow();
checkOpen();
fetchAnimais();
