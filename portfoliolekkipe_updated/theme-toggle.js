document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('dark-mode-toggle');
    const logoImage = document.getElementById('logo-image'); // L'élément img avec l'ID 'logo-image'
    const lightThemeLogoSrc = 'LEKKIPE titre.png'; // Le logo pour le thème clair
    const darkThemeLogoSrc = 'LEKKIPE titre dark.png'; // Le logo pour le thème sombre (changez ceci selon votre fichier)
    const darkModeOnImageSrc = 'darkmode_on.png'; // Remplacez par le chemin de votre image "DarkMode ON"
    const darkModeOffImageSrc = 'darkmode_off.png'; // Remplacez par le chemin de votre image "DarkMode OFF"
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    

    const applyDarkTheme = (apply) => {
        const method = apply ? 'add' : 'remove';
        document.body.classList[method]('dark-theme');
        document.querySelector('header').classList[method]('dark-theme');
        document.querySelector('main').classList[method]('dark-theme');
        document.querySelectorAll('article').forEach(article => {
            article.classList[method]('dark-theme');
        });
        themeToggleButton.src = apply ? darkModeOnImageSrc : darkModeOffImageSrc;
    };

    if (currentTheme === 'dark-theme') {
        applyDarkTheme(true);
    }

    themeToggleButton.addEventListener('click', () => {
        const isDarkThemeApplied = document.body.classList.contains('dark-theme');
        applyDarkTheme(!isDarkThemeApplied);
        localStorage.setItem('theme', isDarkThemeApplied ? 'light' : 'dark-theme');
    });
});
