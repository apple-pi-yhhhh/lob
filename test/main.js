let num_books = all_books.length;
for (  var i = 0;  i < num_books;  i++  ) {
	
	fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784101010137')
	.then(response => response.json())
	.then (data => {
   	 console.log(data);
   	 console.log(data.items[0].volumeInfo.title);
	});
	
	console.log(i);
}
console.log(all_books);
