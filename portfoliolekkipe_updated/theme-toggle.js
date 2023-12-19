
document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.querySelector('header').classList.toggle('dark-theme');
        document.querySelector('main').classList.toggle('dark-theme');
        document.querySelectorAll('article').forEach(article => {
            article.classList.toggle('dark-theme');
        });
    });
});
