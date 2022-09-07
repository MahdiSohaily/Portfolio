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

const timelineDivider = "./src/images/Counter.svg";
const cardsArea = document.querySelector(".cards-area");
const cardProp = [
  {
    title: "Tonic",
    timeline: ["CANOPY", "Back End Dev", "2015"],
    picture: "./src/images/tonic.webp",
    description:
      "A daily selection of privately personalized reads no accounts or sign-ups required.",
    technology: ["html", "css", "javaScript"],
    liveURL: "https://mahdisohaily.github.io/Portfolio/",
    sourceURL: "https://github.com/MahdiSohaily/Portfolio",
  },
  {
    title: "Multi-Post Stories",
    timeline: ["FACEBOOK", "Full Stack Dev", "2015"],
    picture: "./src/images/multi-post.webp",
    description:
      "Experimental content creation feature that allows users to add to an existing story" +
      "over the course of a day without spamming their friends.",
    technology: ["html", "css", "Ruby on rails", "javaScript"],
    liveURL: "https://mahdisohaily.github.io/Portfolio/",
    sourceURL: "https://github.com/MahdiSohaily/Portfolio",
  },
  {
    title: "Uber Navigation",
    timeline: ["Uber", "Lead Developer", "2018"],
    picture: "./src/images/uber.webp",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to" +
      "discover and enjoy 360 photos and videos on Gear VR.",
    technology: ["html", "css", "Ruby on rails", "javaScript","GitHub","Linters"],
    liveURL: "https://mahdisohaily.github.io/Portfolio/",
    sourceURL: "https://github.com/MahdiSohaily/Portfolio",
  },
  {
    title: "Facebook 360",
    timeline: ["FACEBOOK", "Full Stack Dev", "2015"],
    picture: "./src/images/facebook.webp",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to" +
      "discover and enjoy 360 photos and videos on Gear VR.",
    technology: ["html", "css", "Ruby on rails", "javaScript","GitHub","Linters"],
    liveURL: "https://mahdisohaily.github.io/Portfolio/",
    sourceURL: "https://github.com/MahdiSohaily/Portfolio",
  },
];

for (let index = 0; index < cardProp.length; index += 1) {
  const section = document.createElement("section");
  section.classList.add("wrapper", "card");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const img = document.createElement("img");
  img.src = cardProp[index].picture;
  img.alt = "project image";
  img.setAttribute("width", 600);
  img.setAttribute("height", 400);

  imgContainer.appendChild(overlay);
  imgContainer.appendChild(img);

  const description = document.createElement("div");
  description.classList.add("description");
  const header = document.createElement("h2");
  header.classList.add("secondary-header");
  const headerText = document.createTextNode(cardProp[index].title);
  header.appendChild(headerText);
  description.appendChild(header);
  const timeline = document.createElement("ul");
  timeline.classList.add("counter");
  for (let count = 0; count < cardProp[index].timeline.length; count += 1) {
    const item = document.createElement("li");
    const paragraph = document.createElement("p");
    const text = document.createTextNode(cardProp[index].timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline.appendChild(item);
    if (count === 0) {
      item.classList.add("active");
    }
    if (count % 2 == 0) {
      const divide = document.createElement("li");
      const divider = document.createElement("img");
      divider.src = timelineDivider;
      divider.setAttribute("width", 5);
      divider.setAttribute("height", 5);
      divide.appendChild(divider);
      timeline.appendChild(divide);
    }
  }
  description.appendChild(timeline);

  const details = document.createElement("p");
  details.classList.add("details");
  const detailsText = document.createTextNode(cardProp[index].description);
  details.appendChild(detailsText);
  description.appendChild(details);

  const tags = document.createElement("ul");
  tags.classList.add("tags");
  for (
    let counter = 0;
    counter < cardProp[index].technology.length;
    counter += 1
  ) {
    const item = document.createElement("li");
    const text = document.createTextNode(cardProp[index].technology[counter]);
    item.appendChild(text);
    item.classList.add("tag-item");
    tags.appendChild(item);
  }
  description.appendChild(tags);

  const button = document.createElement("button");
  button.classList.add("btn", "show");
  button.setAttribute("type", "button");
  button.setAttribute("data-index", index);
  const btnText = document.createTextNode("See Project");
  button.appendChild(btnText);
  description.appendChild(button);

  if (index % 2 == 0) {
    section.appendChild(imgContainer);
    section.appendChild(description);
  } else {
    section.appendChild(description);
    section.appendChild(imgContainer);
  }
  cardsArea.appendChild(section);
}

const modalButton = document.querySelectorAll(".show");
const modal = document.querySelector(".modal-container");
const closeModal = document.getElementById("close-modal");
for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].setAttribute("data-index", index);
  modalButton[index].addEventListener("click", (e) => {
    const pos = e.target.getAttribute("data-index");
    modal.querySelector(".modal-title").innerHTML = cardProp[pos].title;
    modal.querySelector(".timeline-box").removeChild(modal.querySelector(".timeline"));
    modal.querySelector(".timeline-box").appendChild(printTimeline(cardProp[pos].timeline));
    modal.querySelector(".img-container img").src = cardProp[pos].picture;
    modal.querySelector(".modal-desc").innerHTML = cardProp[pos].description;
    modal.querySelector(".tech-box").removeChild(modal.querySelector(".tags"));
    modal.querySelector(".tech-box").appendChild(printTags(cardProp[pos].technology));
    modal.querySelector(".live").href = cardProp[pos].liveURL;
    modal.querySelector(".source").href = cardProp[pos].sourceURL;
    modal.style.display = "block";
  });
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

function printTags(technology) {
  const tags = document.createElement("ul");
  tags.classList.add("tags");

  for (let count = 0; count < technology.length; count += 1) {
    const item = document.createElement("li");
    const text = document.createTextNode(technology[count]);
    item.appendChild(text);
    item.classList.add("tag-item");
    tags.appendChild(item);
  }
  return tags;
}

function printTimeline(timeline) {
  const timeline2 = document.createElement("ul");
  timeline2.classList.add("timeline");
  for (let count = 0; count < timeline.length; count += 1) {
    const item = document.createElement("li");
    const paragraph = document.createElement("p");
    const text = document.createTextNode(timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline2.appendChild(item);
    if (count === 0) {
      item.classList.add("active");
    }
    if (count % 2 == 0) {
      const divide = document.createElement("li");
      const divider = document.createElement("img");
      divider.src = timelineDivider;
      divider.setAttribute("width", 5);
      divider.setAttribute("height", 5);
      divide.appendChild(divider);
      timeline2.appendChild(divide);
    }
  }

  return timeline2;
}
