let data;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content));

    let cardElement = `
      <div class="card">
        <p>
          <span class="cardTitle">
            <a href="${data.entities.testfile1.link}">
              ${data.entities.testfile1.title}
          </a></span>
          <span class="cardClass">${data.entities.testfile1.class}</span><br>
          <span class="cardDescription">${data.entities.testfile1.description}</span>
       </p></div>`;

    const element = $(".cards").append(cardElement);
});
