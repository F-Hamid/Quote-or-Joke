import { loading, complete } from "./control.js";
import { quoteText, quoteAuthor } from "./quotes.js";
export { getJocke };

// get jokoes
//
async function getJocke() {
  loading();
  const apiUrl = "https://v2.jokeapi.dev/joke/Any";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // injection quote
    const total = data.delivery + data.setup;
    console.log(total.length);
    // joke
    if (data.type === "single") {
      if (data.joke > 120) {
        quoteText.classList.add("long-quote");
      }
      quoteText.innerText = data.joke;
      quoteAuthor.innerText = "";
    }
    // 2lines jokke/puchline
    else {
      if (total.length > 120) {
        quoteText.classList.add("long-quote");
      } else {
        quoteText.classList.remove("long-quote");
      }

      quoteText.innerText = data.setup;
      quoteAuthor.innerText = data.delivery;
    }

    complete();
  } catch (e) {
    console.log("Ooops somthing goes wrong !!", e, "try again");
    getJocke();
  }
}
