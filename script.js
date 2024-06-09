function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('shrink', 'no-gradient', 'black-text');
}

function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('shrink', 'no-gradient', 'black-text');
}

function smoothScrollToHome(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.remove('no-gradient', 'black-text', 'shrink');
    toggleMenu(); // Close the menu after navigation
}

function smoothScrollToSection(event, sectionId) {
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('no-gradient', 'black-text', 'shrink');
    toggleMenu(); // Close the menu after navigation
}

function scrollToPackages() {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('shrink', 'no-gradient', 'black-text');
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.header').classList.add('shrink', 'no-gradient', 'black-text');
}

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}
