let data;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content));

    let cardElement = `<p><b>${data.entities.testfile1.title}</b><br>${data.entities.testfile1.description}<br><i>${data.entities.testfile1.class}</i></p>`;

    const element = $(".test").append(cardElement);
  });
