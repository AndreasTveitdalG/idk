let data;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content));

    let cardElement = `<p>${data.entites.testfile1.title}<br>${data.entites.testfile1.description}<br>${data.entites.testfile1.class}</p>`;

    const element = $(".test").append(cardElement);
  });
