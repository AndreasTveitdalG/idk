let data;

fetch('github.com/AndreasTveitdalG/idk/data.json')
  .then(response => response.json())
  .then(d => data = d);

let cardElement = "<p>" + data.entities.testfile1.title

const element = $(".test").append(cardElement)
