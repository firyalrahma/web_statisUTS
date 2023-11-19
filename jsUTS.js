let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navbar navbar-nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('class');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.add.remove('active');
                document.querySelector('navbar navbar-nav a[href*='+ id +']').classList.add('active');
            })
        }
    })
}

//pemberitahuan 
alert('Welcome to Yalibry')

