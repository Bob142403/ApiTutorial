let url = "https://jsonplaceholder.typicode.com/posts";
let securl = "https://jsonplaceholder.typicode.com/users";
let username = [];

async function fetchs () {
  let response = await fetch(securl);

  let commits = await response.json();

  for (let value of commits) {
    username[value.id] = await value.name;
  }

  response = await fetch(url);
  
  commits = await response.json();

  for (let value of commits) {
    let card = tmpl.content.cloneNode(true);
    let title = card.querySelector(".card-title");
    let body = card.querySelector(".card-text");
    let userName = card.querySelector(".fs-4");

    title.innerHTML = value.title;
    body.innerHTML = value.body;
    userName.innerHTML += username[value.userId];

    list.append(card);
  }
}
fetchs();
