// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Highlight the active section in the navigation menu while scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('.content').forEach(section => {
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

        if (
            section.offsetTop <= scrollPosition + 150 &&
            section.offsetTop + section.offsetHeight > scrollPosition + 150
        ) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
});
