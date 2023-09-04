const quoteContainer = document.getElementById('quote-text');
const regenIcon = document.querySelector('.regen-icon');
const addIcon = document.querySelector('.add-icon');

let quoteChoices = [
    '“Each day comes bearing its gifts. Untie the ribbon.” —Ann Ruth Schabacker',
    '“The greatest mistake you can make is to be continually fearing that you’ll make one.” —Elbert Hubbard',
    '“A problem is a chance for you to do your best.” —Duke Ellington',
    '“You can’t turn back the clock. But you can wind it up again.” —Bonnie Prudden',
    '“Never fear shadows. They simply mean there’s a light shining nearby.” —Ruth E. Renkel',
    '“In the face of uncertainty, there is nothing wrong with hope.” —Bernie Siegel',
    '“Anything’s possible if you’ve got enough nerve.” —J.K. Rowling',
    '“Action is the antidote to despair.” —Joan Baez',
    '“Pay no attention to what the critics say. A statue has never been erected in honor of a critic.” —Jean Sibelius',
    '“Every exit is an entry somewhere else.” —Tom Stoppard',
];

const getQuotesFromLocalStorage = () => {
    const quotes = localStorage.getItem('quotes');
    return quotes ? JSON.parse(quotes) : [];
};

const saveQuotesToLocalStorage = (quotes) => {
    localStorage.setItem('quotes', JSON.stringify(quotes));
};

const generateRandomQuote = () => {
    const quotes = getQuotesFromLocalStorage();
    const availableQuotes = quotes.length > 0 ? quotes : quoteChoices;

    const quoteIndex = Math.floor(Math.random() * availableQuotes.length);
    quoteContainer.textContent = availableQuotes[quoteIndex];
};

const addQuote = () => {
    const newQuote = prompt("Enter a quote:");
    if (newQuote) {
        quoteChoices.push(newQuote);
        saveQuotesToLocalStorage(quoteChoices);
        quoteContainer.textContent = newQuote;
    }
};

regenIcon.addEventListener('click', generateRandomQuote);
addIcon.addEventListener('click', addQuote);

generateRandomQuote();