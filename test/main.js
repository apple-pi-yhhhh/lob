fetch('books.json')
.then(response => response.json())
.then (data => {
	console.log(data);
	console.log(data.items[0].volumeInfo.title);
	//document.wite(data.items.[0].volumeInfo.title);
});

/*
let i = 0;
for (i = //all_booksの個数3){
	eval("let isbn = all_books["+ i +"];")
	
	fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784101010137')
	.then(response => response.json())
	.then (data => {
   	 console.log(data);
   	 console.log(data.items[0].volumeInfo.title);
   	 document.wite(data.items.[0].volumeInfo.title);
	});
	
	console.log(i);
	//document.wite(data.items.0.volumeInfo.title)
	i = i + 1;
}
*/
console.log(all_books);