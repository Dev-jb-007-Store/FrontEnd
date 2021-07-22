const li = document.querySelectorAll('#list li');
var mediaqueryipad = window.matchMedia("(max-width: 1024px) and (min-width: 500px)")
let scroll = 0;
function changeactive(element) {
    Array.from(li).forEach(x => {
        x.classList.remove('active');
    });
    element.classList.add('active');
}
function expandSearchBar(element) {
    element.style.width = '90%';
}
function minimizeSearchBar(element) {
    if (window.innerWidth >= 500 && window.innerWidth <= 1024) {
        element.style.width = '150px';
    }
    else {
        element.style.width = '200px';
    }
}
function prevOffer() {
    if (scroll == 0) {
        scroll = -300;
    }
    else {
        scroll += 100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft = `${scroll}%`;
}
function nextOffer() {
    if (scroll == -300) {
        scroll = 0;
    }
    else {
        scroll -= 100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft = `${scroll}%`;
}
function prevView() {
    if (scroll == 0) {
        scroll = -200;
    }
    else {
        scroll += 100;
    }
    document.querySelector('.most-viewed .card-scroll').style.marginLeft = `${scroll}%`;
}
function nextView() {
    if (scroll == -200) {
        scroll = 0;
    }
    else {
        scroll -= 100;
    }
    document.querySelector('.most-viewed .card-scroll').style.marginLeft = `${scroll}%`;
}
setInterval(() => {
    if (scroll == -300) {
        scroll = 0;
    }
    else {
        scroll -= 100;
    }
    document.querySelector('.offer .scroll-image').style.marginLeft = `${scroll}%`;
}, 10000);
function showmobilenav() {
    let hamburger = document.querySelector('#mobile-header #nav-hamburger #hamburger');
    let nav = document.querySelector('.mobile-navbar');
    if (nav.style.width == '75%') {
        hamburger.style.backgroundColor = 'black';
        document.styleSheets[0].addRule('#mobile-header #nav-hamburger #hamburger::after', 'transform:translateY(0px) rotate(0deg)')
        document.styleSheets[0].addRule('#mobile-header #nav-hamburger #hamburger::before', 'transform:translateY(0px) rotate(0deg)');
        return nav.style.width = '0%'
    }
    hamburger.style.backgroundColor = 'transparent';
    document.styleSheets[0].addRule('#mobile-header #nav-hamburger #hamburger::after', 'transform:translateY(+8px) rotate(45deg)');
    document.styleSheets[0].addRule('#mobile-header #nav-hamburger #hamburger::before', 'transform:translateY(-8px) rotate(-45deg)');
    nav.style.width = '75%';
}