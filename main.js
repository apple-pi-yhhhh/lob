/*function onButtonClick() {
	target = document.getElementById("output");
	target.innerText = document.forms.id_form1.id_textBox1.value;
	//target.innerText = document.id_form1.id_textBox1.value;//これでもOK
}
*/

fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784101010137')
  .then(response => response.json())
  .then(data => console.log(data));
document.wite(data.items.0.volumeInfo.title)
/*
asyncCall();
async function asyncCall() {
	//検索語句
	var words = 9784043636037;
	// 検索 API を叩く
	var res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:"+words);
	// JSON に変換
	var data = await res.json();
	//jsonをさらにstringify
	var write = JSON.parse(res)
	//表示
	document.write(write);
}
*/
