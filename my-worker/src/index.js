export default {
	async fetch(request) {
		const url = new URL(request.url);

		// Log incoming requests for debugging
		console.log(`Incoming Request URL: ${url.pathname}`);

		// Redirect non-static routes to index.html
		if (!url.pathname.includes('.') && !url.pathname.startsWith('/api')) {
			url.pathname = '/index.html';
		}

		// Forward the request to Render
		const renderURL = `https://darklightchess.onrender.com/${url.pathname}${url.search}`;
		console.log(`Forwarding to Render: ${renderURL}`);

		return fetch(renderURL, request);
	},
};
