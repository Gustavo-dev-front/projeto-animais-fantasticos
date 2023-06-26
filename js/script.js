import ScrollSuave from "./modules/scroll-suave.js";
import initScrollDisplay from "./modules/scroll-display.js";
import Accordion from "./modules/accordion.js";
import initAnimaisTexts from "./modules/animaisTexts.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import menuMobileShow from "./modules/menuMobile.js";
import checkOpen from "./modules/checkOpen.js";
import fetchAnimais from "./modules/fetchAnimais.js";

const scrollSuave = new ScrollSuave('header nav a[href^="#"]:not([href="#"])');
scrollSuave.init();

const accordion = new Accordion("#faq dl dt");
accordion.init();

initScrollDisplay();
initAnimaisTexts();
initModal();
initTooltip();
initDropdown();
menuMobileShow();
checkOpen();
fetchAnimais();
