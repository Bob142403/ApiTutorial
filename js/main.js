let url = "https://jsonplaceholder.typicode.com/posts";
let securl = "https://jsonplaceholder.typicode.com/users";
let userInfo = document.getElementById("userInfo");
let emailInfo = document.getElementById("emailInfo");
let website = document.getElementById("website");
let titlemodal = document.querySelector(".modal-title");
let username = [];

async function fetchs() {
  let response = await fetch(securl);

  let commits = await response.json();

  for (let value of commits) {
    username[value.id] = value;
  }

  response = await fetch(url);

  commits = await response.json();

  for (let value of commits) {
    let card = tmpl.content.cloneNode(true);
    let title = card.querySelector(".card-title");
    let body = card.querySelector(".card-text");
    let userName = card.querySelector("p");
    let info = username[value.userId];

    title.innerHTML = value.title;
    body.innerHTML = value.body;
    userName.innerHTML += info.name;

    userName.setAttribute("data-bs-target", "#staticBackdrop");
    userName.dataset.bsToggle = "modal";

    userName.addEventListener("click", () => {
      titlemodal.innerHTML = `About ${info.name}`;
      userInfo.innerHTML = info.username;
      emailInfo.innerHTML = info.email;
      website.innerHTML = info.website;
    });

    list.append(card);
  }
}
fetchs();
