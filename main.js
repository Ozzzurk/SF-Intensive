const menu_links = document.querySelectorAll('.header__menu-link');

menu_links.forEach((link) => link.addEventListener('click', event => {
    event.preventDefault();

    const section = document.querySelectorAll(link.getAttribute('href'));

    section.scrollIntoView({
        behavior: 'smooth'
    })
}))