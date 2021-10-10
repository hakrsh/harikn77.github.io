let mainNav = document.getElementById('main-nav');
let navbarToggle = document.getElementById('navbar-toggle');



navbarToggle.addEventListener('click', function() {

    if (this.classList.contains('active')) {
        mainNav.style.display = "none";
        this.classList.remove('active');
    } else {
        mainNav.style.display = "flex";
        this.classList.add('active');

    }
});

function date() {
    document.querySelector('footer').innerHTML = new Date();
}

setInterval(date, 1000);

load = (id) => {
    const divIds = ['one', 'two', 'three', 'four', 'five']
    divIds.forEach((id) => {
        document.getElementById(id).style.display = 'none';
    });
    if (id === 'logo') document.getElementById('one').style.display = 'Block';
    else document.getElementById(divIds[id]).style.display = 'Block';
}

// const navLinks = document.querySelectorAll('.nav-links')
// const menuToggle = document.getElementById('navbar-toggle')
// const nav = document.getElementById('main-nav')
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { nav.style.display='none' })
// })