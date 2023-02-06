let data;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content));
    console.log(data.entities.testfile1.title);
  });

let cardElement = `<p>{data.entities.testfile1.title}`;

const element = $(".test").append(cardElement);
