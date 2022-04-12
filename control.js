export { loading, complete };
import { getJocke } from "./jockes.js";
import { quoteText, quoteAuthor, getQuote, quoteContainer } from "./quotes.js";
const jokesEl = document.querySelector(".jokes-heading");
const quotesEl = document.querySelector(".quotes-heading");
// loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}


document.addEventListener("click", function (e) {
  const clickX = e.clientX;
  const clickY = e.clientY;
  const screenX = document.body.clientWidth / 2;
  if ((screenX > clickX) & (clickY < 300)) {
    getQuote();
    quotesEl.classList.add("clicked");
    jokesEl.classList.remove("clicked");
  } else if ((screenX < clickX) & (clickY < 300)) {
    getJocke();
    jokesEl.classList.add("clicked");
    quotesEl.classList.remove("clicked");
  }
});
