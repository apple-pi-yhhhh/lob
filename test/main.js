let num_books = all_books.length;
let all = [];
for (  var i = 0;  i < num_books;  i++  ) {
	
	fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ all_books[i])
	.then(response => response.json())
	.then (data => {
   		console.log(i +"つ目の本は「"+ data.items[0].volumeInfo.title +"」です。")
		all.push(data.items[0].volumeInfo.titl);
		//console.log(data);
   		//console.log(data.items[0].volumeInfo.title);
	});
	
	//console.log(i);
}
console.log(all_books);

function Search() {
	let phrase = document.getElementById("phrase");
	let target = document.getElementById("results");
	let value = phrase.value;
	target.innerHTML = "今、「"+ value +"」って入力したでしょ。";
	let result;
	eval("result = all_books.filter(word => word.match(/"+ value +"/g));");
	let result_num = result.length;
	for (  var i = 0;  i < result_num;  i++  ) {
		console.log(result[i-1]);
	}
}
