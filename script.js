let data;

fetch('.data.json')
  .then(response => response.json())
  .then(d => data = d);

const element = $(".test").append(data.entities.testfile1.title)
