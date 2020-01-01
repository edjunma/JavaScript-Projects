const RANDOM_QUOTE_API_URL = 'http://api.quoteable.io/random';

function getRandomQuote() {
	fetch(RANDOM_QUOTE_API_URL)
		.then(response => response.json())
		.then(data => data.content);
}

async function getNextQuote() {
	const quote = await getRandomQuote();
	console.log(quote);
}

getNextQuote();
