let data;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content)).entites;
    console.log(data.testfile1.title);

    let cardElement = `<p>${data.testfile1.title}<br>${data.testfile1.description}<br>${data.testfile1.class}</p>`;

    const element = $(".test").append(cardElement);
  });
