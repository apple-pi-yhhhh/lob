/*function onButtonClick() {
	target = document.getElementById("output");
	target.innerText = document.forms.id_form1.id_textBox1.value;
	//target.innerText = document.id_form1.id_textBox1.value;//これでもOK
}
*/
/*
fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  //.then(json => console.log(json.ip))
  .then(json => document.write(json.ip))
*/
/*
fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784043636037')
  .then(res => res.json())
  //.then(json => console.log(json.ip))
  .then(json => document.write(json.items))
*/
asyncCall();
async function asyncCall() {
	//検索語句
	var words = 9784043636037;
	// 検索 API を叩く
	var res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:"+words);
	// JSON に変換
	var data = await res.json();
	//表示
	document.write(data);
}
