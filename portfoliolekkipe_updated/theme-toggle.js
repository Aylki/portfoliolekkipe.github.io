document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.body.classList.add(currentTheme);
        document.querySelector('header').classList.add(currentTheme);
        document.querySelector('main').classList.add(currentTheme);
        document.querySelectorAll('article').forEach(article => {
            article.classList.add(currentTheme);
        });
    }

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.querySelector('header').classList.toggle('dark-theme');
        document.querySelector('main').classList.toggle('dark-theme');
        document.querySelectorAll('article').forEach(article => {
            article.classList.toggle('dark-theme');
        });

        let theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light';
        localStorage.setItem('theme', theme);
    });
});
