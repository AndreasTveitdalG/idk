let data;

fetch('https://andreastveitdalg.github.io/idk/data.json')
  .then(response => response.json())
  .then(d => data = d);

let cardElement = "<p>" + data.entities.testfile1.title

const element = $(".test").append(cardElement)
