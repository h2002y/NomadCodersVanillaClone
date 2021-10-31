const quotes = [
    {
        quote:"시험기간엔!! 고기지!!!",
        author:"자까",
    },
    {
        quote:"아 그냥 대충살자",
        author:"자까 어머니(세계관 최강자)",
    },
    {
        quote:"사람도 충전기좀 있었으면 좋겠네",
        author:"자까",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;