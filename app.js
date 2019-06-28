const quotes = [
  {
    name: "Stephen King",
    quote: "Get busy living or get busy diying"
  },
  {
    name: "50 Cent",
    quote: "Get rich or die triying"
  },
  {
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be."
  },
  {
    name: "John F. Kennedy",
    quote: "Those who fail miserably can achieve greatly"
  }
];

const btn = document.querySelector(".btn");
const author = document.querySelector(".quoteAuthor");
const quote = document.querySelector(".quote");

btn.addEventListener("click", () => {
  let number = Math.floor(Math.random() * quotes.length);
  author.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
});
