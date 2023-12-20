document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply or remove the dark theme class based on the saved preference
    const applyDarkTheme = (apply) => {
        const method = apply ? 'add' : 'remove';
        document.body.classList[method]('dark-theme');
        document.querySelector('header').classList[method]('dark-theme');
        document.querySelector('main').classList[method]('dark-theme');
        document.querySelectorAll('article').forEach(article => {
            article.classList[method]('dark-theme');
        });
    };

    // If there's a theme set in localStorage, apply it
    if (currentTheme) {
        applyDarkTheme(currentTheme === 'dark-theme');
    }

    themeToggleButton.addEventListener('click', () => {
        const isDarkThemeApplied = document.body.classList.contains('dark-theme');
        applyDarkTheme(!isDarkThemeApplied);

        const theme = isDarkThemeApplied ? 'light' : 'dark-theme';
        localStorage.setItem('theme', theme);
    });
});
