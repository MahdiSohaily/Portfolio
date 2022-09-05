let header = document.querySelector('header');

window.addEventListener("scroll",()=> {
    if(window.scrollY > 600){
      header.style.boxShadow= "0 1px 4px  hsl(218, 13%, 48%)";
    } else {
        header.style.boxShadow= "none";
    }
})

let navIcon = document.querySelector('.mobile-menu');
let mainNav = document.querySelector('.main-nav');

navIcon.addEventListener('click', function(){
  mainNav.style.height= "100%";
  mainNav.classList.toggle("open");
  if(mainNav.classList.contains('open')) {
    navIcon.src = './src/images/close-icon.svg';
  } else {
    navIcon.src = './src/images/menu-icon.svg'
  }
})

