const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')
const cursor = document.querySelector('.cursor');


//cursor effect
document.addEventListener('mousemove', e => {
    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;
    cursor.style.left = `${e.clientX - cursorWidth / 2}px`;
    cursor.style.top = `${e.clientY - cursorHeight / 2}px`;
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(()=> {
        cursor.classList.remove("expand");

    }, 500)
})



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

//Parallax
const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function ()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

//Reveal elements on scroll


window.addEventListener('scroll', reveal);

function reveal(){
var reveals = document.querySelectorAll('.reveal');

for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
    }
    else{
        reveals[i].classList.remove('active');
    }
}
}