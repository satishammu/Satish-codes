// On page load, load content dynamically
window.onload = function () {
    loadContent(window.location.pathname);
};

// Fetch content based on the current path
function loadContent(path) {
    const contentSection = document.getElementById('dynamic-content');
    
    fetch(`/api/content${path}`)
        .then(response => response.json())
        .then(data => {
            contentSection.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
            `;
        })
        .catch(error => console.error('Error fetching content:', error));
}
