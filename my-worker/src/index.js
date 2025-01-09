export default {
	async fetch(request, env, ctx) {
	  const url = new URL(request.url);
  
	  console.log(`Request URL: ${url.pathname}`); // Log the path for debugging
  
	  // Redirect all non-static routes to /index.html
	  if (!url.pathname.includes('.') && !url.pathname.startsWith('/api')) {
		url.pathname = '/index.html';
	  }
  
	  // Forward the request to Render
	  const renderURL = `https://your-render-subdomain.onrender.com${url.pathname}${url.search}`;
	  console.log(`Forwarding to Render: ${renderURL}`); // Debug log
  
	  return fetch(renderURL, request);
	},
  };
  