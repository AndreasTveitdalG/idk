let data;
let cardElement;

fetch('https://api.github.com/repos/AndreasTveitdalG/idk/contents/data.json')
  .then(response => response.json())
  .then(responseData => {
    data = JSON.parse(atob(responseData.content));
    
    for (let fileIndex = 0; fileIndex > Object.keys(data.entities).length; fileIndex++) {
      cardElement = `
        <div class="card">
          <p>
            <span class="cardTitle">
              <a href="${data.entities.file${fileIndex}.link}">
                ${data.entities.file${fileIndex}.title}
            </a></span>
            <span class="cardClass">${data.entities.file${fileIndex}.class}</span><br>
            <span class="cardDescription">${data.entities.file${fileIndex}.description}</span>
      </p></div>`;
    }
    const element = $(".cards").append(cardElement);
});
