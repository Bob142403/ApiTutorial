let url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json())
  .then((commits) => {
    for (let value of commits) {
      let card = tmpl.content.cloneNode(true);
      let title = card.querySelector(".card-title");
      let body = card.querySelector(".card-text");
      
      title.innerHTML = value.title;
      body.innerHTML = value.body;

      document.body.append(card);
    }
  });
