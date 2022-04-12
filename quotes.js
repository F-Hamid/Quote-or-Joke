export { loading, complete, quoteText, quoteAuthor, getQuote, quoteContainer };
import { loading, complete } from "./control.js";
const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");
const quoteAuthor = document.querySelector(".author");
const loader = document.getElementById("loader");

// http://api.forismatic.com/api/1.0/

//  Getting Quotes

async function getQuote() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomQuote = Math.floor(Math.random() * data.length);
    const quote = data[randomQuote];

    // injection quote

    if (quote.text.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    if (quote.author === null) {
      quote.author = "Unknown";
    } else {
      quoteAuthor.innerText = quote.author;
    }
    quoteText.innerText = quote.text;

    // Stop loader
    complete();
  } catch (e) {
    console.log("Ooops somthing goes wrong !!, try again", e);
    getQuote();
  }
  // document.querySelector("#new-quote").addEventListener("click", getQuote);
}
getQuote();
