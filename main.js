fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784101010137')
  .then(response => response.json())
.then (data => {
    //console.log(data);
    //console.log(data.items[0].volumeInfo.title);
    document.wite(data.items.[0].volumeInfo.title);
});
//document.wite(data.items.0.volumeInfo.title)
