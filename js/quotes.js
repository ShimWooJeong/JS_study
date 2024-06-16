const quotes = [
    {
        quote: 'The only limit to our realization of tomorrow is our doubts of today.',
        author: 'Franklin D. Roosevelt',
    },
    {
        quote: 'In the end, we will remember not the words of our enemies, but the silence of our friends.',
        author: 'Martin Luther King Jr.',
    },
    {
        quote: 'The only thing necessary for the triumph of evil is for good men to do nothing.',
        author: 'Edmund Burke',
    },
    {
        quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote: 'The best way to predict the future is to create it.',
        author: 'Peter Drucker',
    },
    {
        quote: 'The journey of a thousand miles begins with one step.',
        author: 'Lao Tzu',
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: 'John Lennon',
    },
    {
        quote: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
        author: 'Ralph Waldo Emerson',
    },
    {
        quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        author: 'Winston Churchill',
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: 'Wayne Gretzky',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote + '\n';
author.innerText = todaysQuote.author;
