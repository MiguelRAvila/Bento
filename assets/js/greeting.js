// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const today = new Date();
const hour = today.getHours();
const name = CONFIG.name;
const category = CONFIG.category;
const quotesElements = document.getElementById("quotes");
const quote = { content: "Everything will be fine", author: "Anonymous" };
const getQuotes = () => {
  fetch("https://api.quotable.io/quotes/random")
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      const quotes = data[0];
      quotesElements.innerHTML = `<i>"${quotes.content}"</i> <br/> <b>${quotes.author}</b>`;
    });
};

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

if (hour >= 23 || hour < 6) {
  document.getElementById("greetings").innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById("greetings").innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById("greetings").innerText = gree3 + name;
} else {
  document.getElementById("greetings").innerText = gree4 + name;
}
getQuotes();
