
const username = 'zweatshirt';

async function fetchRepositories() {
try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
    });

    if (!response.ok) {
    throw new Error('Failed to fetch repositories');
    }

    const repositories = await response.json();
    displayRepositories(repositories);
} catch (error) {
    console.error(error.message);
}
}

function displayRepositories(repositories) {
const repositoriesContainer = document.getElementById('repositories');

repositories.forEach((repo) => {
    const repoElement = document.createElement('div');
    repoElement.innerHTML = `
    <h3>${repo.name}</h3>
    <p>${repo.description || 'No description available'}</p>
    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
    `;
    repoElement.classList.add('repository');
    repositoriesContainer.appendChild(repoElement);
});
}

// Fetch repositories when the page loads
// document.addEventListener('DOMContentLoaded', fetchRepositories);

