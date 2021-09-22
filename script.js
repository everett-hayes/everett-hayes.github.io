console.log('the script was called!');

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function scrollTest(id) {
    document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
}

const logoLetters = document.querySelectorAll('#everettLogo path');

for (let i = 0; i < logoLetters.length; i++) {
    console.log(`letter ${i} is ${logoLetters[i].getTotalLength()}`);
}

// const tween = KUTE.fromTo(
//     '#blob5',
//     { path: '#blob5'},
//     { path: '#blob6'},
//     { repeat: 999, duration: 4500, yoyo: true }
// ).start();

// const tween1 = KUTE.fromTo(
//     '#blob1',
//     { path: '#blob1'},
//     { path: '#blob2'},
//     { repeat: 999, duration: 4000, yoyo: true }
// ).start();

// const tween2 = KUTE.fromTo(
//     '#blob3',
//     { path: '#blob3'},
//     { path: '#blob4'},
//     { repeat: 999, duration: 3500, yoyo: true }
// ).start();