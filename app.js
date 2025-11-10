const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets (e.g., styles.css) from the project root
app.use(express.static(path.join(__dirname)));

// Serve index.html at root
app.get('/', (_req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});