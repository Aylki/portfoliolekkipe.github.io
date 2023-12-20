document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const logoImage = document.getElementById('logo-image'); // L'élément img avec l'ID 'logo-image'
    const lightThemeLogoSrc = 'LEKKIPE titre.png'; // Le logo pour le thème clair
    const darkThemeLogoSrc = 'LEKKIPE titre dark.png'; // Le logo pour le thème sombre (changez ceci selon votre fichier)

    const currentTheme = localStorage.getItem('theme');

    const applyDarkTheme = (isDark) => {
        document.body.classList.toggle('dark-theme', isDark);
        document.querySelector('header').classList.toggle('dark-theme', isDark);
        document.querySelector('main').classList.toggle('dark-theme', isDark);
        document.querySelectorAll('article').forEach(article => {
            article.classList.toggle('dark-theme', isDark);
        });
        logoImage.src = isDark ? darkThemeLogoSrc : lightThemeLogoSrc;
    };

    if (currentTheme === 'dark-theme') {
        applyDarkTheme(true);
    }

    themeToggleButton.addEventListener('click', () => {
        const isDarkThemeApplied = document.body.classList.contains('dark-theme');
        applyDarkTheme(!isDarkThemeApplied);
        localStorage.setItem('theme', !isDarkThemeApplied ? 'dark-theme' : 'light');
    });
});
