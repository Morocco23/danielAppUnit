
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    const menuIcon = document.getElementById("menu-icon");
    // Change icon to X when menu is open
    if (navLinks.style.display === 'flex') {
        menuIcon.style.transform = "rotate(-90deg)";
    } else {
        menuIcon.style.transform = "rotate(0deg)";
    }
}