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

fetch('https://www.youtube.com/watch?v=GSpwTvYgFrM')
  .then(res => res.json())
  //.then(json => console.log(json.ip))
  .then(json => document.write(json.items))
