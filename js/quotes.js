const quotes = [
  {
    quote: "Love is the master key that opens the gates of happiness.",
    author: "Oliver Wendell Holmes",
  },
  {
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs",
  },
  {
    quote: "Try Again. Fail again. Fail better.",
    author: "Samuel Beckett",
  },
  {
    quote: "Boldness be my friend.",
    author: "William Shakespeare",
  },
  {
    quote: "Don’t regret the past, just learn from it.",
    author: "Ben Ipock",
  },
  {
    quote: "Every wall is a door.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Be curious. Not judgmental.",
    author: "Walt Whitman",
  },
  {
    quote: "Courage, dear heart.",
    author: "C.S. Lewis",
  },
  {
    quote: "Do small things with great love.",
    author: "Mother Teresa",
  },
  {
    quote: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
