export default {
	async fetch(request) {
		const url = new URL(request.url);
		console.log(`Request received for: ${url.pathname}`);

		if (!url.pathname.includes('.') && !url.pathname.startsWith('/api')) {
			url.pathname = '/index.html'; // Redirect to index.html for SPA
		}

		const renderURL = `https://darklightchess.onrender.com${url.pathname}${url.search}`;
		console.log(`Forwarding request to: ${renderURL}`);

		return fetch(renderURL, request);
	},
};
