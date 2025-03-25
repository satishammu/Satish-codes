const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic content endpoint (this will serve different content based on the path)
app.get('/api/content/', (req, res) => {
    res.json({
        title: 'Welcome to My Dynamic Portfolio',
        description: 'This page is dynamically generated using Node.js, Express, and JavaScript.'
    });
});

app.get('/api/content/about', (req, res) => {
    res.json({
        title: 'About Me',
        description: 'I am Revanth, a passionate web developer. I specialize in creating dynamic web applications.'
    });
});

app.get('/api/content/skills', (req, res) => {
    res.json({
        title: 'Skills',
        description: 'I am proficient in HTML, CSS, JavaScript, Node.js, React, and more!'
    });
});

app.get('/api/content/contact', (req, res) => {
    res.json({
        title: 'Contact Me',
        description: 'You can reach me at revanth@example.com or through my LinkedIn profile.'
    });
});

// Serve index.html on all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
