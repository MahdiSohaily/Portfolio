const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    header.style.boxShadow = "0 1px 4px  hsl(218, 13%, 48%)";
  } else {
    header.style.boxShadow = "none";
  }
});

const navIcon = document.querySelector(".mobile-menu");
const mainNav = document.querySelector(".main-nav");

navIcon.addEventListener("click", () => {
  mainNav.style.height = "100%";
  mainNav.classList.toggle("open");
  if (mainNav.classList.contains("open")) {
    navIcon.src = "./src/images/close-icon.svg";
  } else {
    navIcon.src = "./src/images/menu-icon.svg";
  }
});

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("open");
  navIcon.src = "./src/images/menu-icon.svg";
});

window.addEventListener("resize", () => {
  mainNav.classList.remove("open");
});

// Modal Script

const cards = document.querySelectorAll(".card");
const cardProp = [];

function cardObject(
  title,
  timeline,
  picture,
  description,
  technology,
  liveURL,
  sourceURL
) {
  this.title = title;
  this.timeline = timeline;
  this.picture = picture;
  this.description = description;
  this.technology = technology;
  this.liveURL = liveURL;
  this.sourceURL = sourceURL;
}

for (let index = 0; index < cards.length; index++) {
  let title = cards[index].querySelector(".secondary-header").innerText;
  let timeline = cards[index].querySelector(".counter").innerHTML;
  let picture = cards[index].querySelector(".img-container img").src;
  let description = cards[index].querySelector(".details").innerText;
  let technology = cards[index].querySelector(".tags").innerHTML;
  let liveURL = "https://mahdisohaily.github.io/Portfolio/";
  let sourceURL = "https://github.com/MahdiSohaily/Portfolio";

  cardProp.push(
    new cardObject(
      title,
      timeline,
      picture,
      description,
      technology,
      liveURL,
      sourceURL
    )
  );
}

const modalButton = document.querySelectorAll(".show");
const modal = document.querySelector(".modal-container");
const closeModal = document.getElementById("close-modal");
for (let index = 0; index < modalButton.length; index++) {
  modalButton[index].setAttribute("data-index", index);
  modalButton[index].addEventListener("click", (e) => {
    let pos = e.target.getAttribute("data-index");
    modal.querySelector('.modal-title').innerHTML = cardProp[pos].title;
    modal.style.display = "block";
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
