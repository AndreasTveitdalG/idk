fetch('.data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data.entities['test-file1'].title);
});

