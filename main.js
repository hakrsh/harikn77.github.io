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
    var d = new Date();
    var dt = d.toString();
    document.querySelector('footer').innerHTML = dt.slice(0, 24);
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