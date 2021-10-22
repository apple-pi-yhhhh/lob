let num_books = all_books.length;
let all = [];
let n = 0;
for (  var i = 0;  i < num_books;  i++  ) {
	
	fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:'+ all_books[n])
	.then(response => response.json())
	.then (data => {
   		console.log(n +"つ目の本は「"+ data.items[0].volumeInfo.title +"」です。")
		all.push(data.items[0].volumeInfo.titl);
		
		let all_book_category = document.getElementById("all"+ n);
		all_book_category.innerHTML = data.items[0].volumeInfo.title;
		//console.log(data);
   		//console.log(data.items[0].volumeInfo.title);
	});
	//console.log(i);
	n = n + 1;
}
console.log(all_books);

function Search() {
	let phrase = document.getElementById("phrase");
	let target = document.getElementById("results");
	let value = phrase.value;
	//入力された文字列
	target.innerHTML = "今、「"+ value +"」って入力したでしょ。";

    regexp = new RegExp(value + '(.*?)', 'g'),
    // 正規表現オブジェクト ここでは正規表現も文字列で記載する

    matchArr = all_books.match(regexp);
    // 検索対象から正規表現にマッチするものを抽出して、返す

console.log(matchArr);
}
