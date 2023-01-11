let url = "https://jsonplaceholder.typicode.com/posts";
let securl = "https://jsonplaceholder.typicode.com/users";
let username = [];

fetch(securl)
  .then((response) => response.json())
  .then((commits) => {
    for (let value of commits) {
      console.log(value.id);
      username[value.id] = value.name;
    }
  });
fetch(url)
  .then((response) => response.json())
  .then((commits) => {
    for (let value of commits) {
      let card = tmpl.content.cloneNode(true);
      let title = card.querySelector(".card-title");
      let body = card.querySelector(".card-text");
      let userName = card.querySelector(".fs-4");

      title.innerHTML = value.title;
      body.innerHTML = value.body;
      userName.innerHTML += username[value.userId];

      if (value.userId == 1) list.append(card);
    }
  });
