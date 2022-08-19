let header = document.querySelector('header');

window.addEventListener("scroll",()=> {
    if(window.scrollY > 600){
      header.style.boxShadow= "0 2px 8px hsla(234, 97%, 62%, 0.24)";
    } else {
        header.style.boxShadow= "none";
    }
})