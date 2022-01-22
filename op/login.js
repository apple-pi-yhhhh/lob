function cookie_get(cookies){
  let cookie_arr = document.cookie.split('; ');
  for (let i = 0; i < cookie_arr.length; i++) {
    var coc = cookie_arr[i].split("=");
    cookies[coc[0]] = coc[1]
  }
}
function login() {
  var mail = document.getElementById("e-mail").value;
  var pass = document.getElementById("pass").value;
  cookie_make("mail", mail);
  cookie_make("pass", pass);
  let date = new Date();
  let time = date.getFullYear() * 365 * 24 * 60 + (date.getMonth() + 1) * 30 * 24 * 60 + date.getDate() * 24 * 60 + date.getHours() * 60 + date.getMinutes();
  cookie_make("time", time);
  cookie_make("last", location.herf);
  var res = await fetch('https://script.google.com/a/macros/jhs.gs.chiba-u.jp/s/AKfycbz1sd50SIGMPlT-qChyVlIvF-qJBV4Kqhnp188vatpHlmhKCuKnB4gMsAyWe885dvSXSg/exec?m='+mail+';p='+pass);
  var data = await res.json();
  document.write("<h1>" + data.a + "</h1>"); 
}

function cookie_make(key, value) {
  document.cookie = key + "=" + value;
}

function user_show(){
  let cookie = {};
  cookie_get(cookie);
  let date = new Date();
  let time = date.getFullYear() * 365 * 24 * 60 + (date.getMonth() + 1) * 30 * 24 * 60 + date.getDate() * 24 * 60 + date.getHours() * 60 + date.getMinutes();
  if ((time-cookie.time) > 30){
  }
}

var res = await fetch('https://script.google.com/a/macros/jhs.gs.chiba-u.jp/s/AKfycbz1sd50SIGMPlT-qChyVlIvF-qJBV4Kqhnp188vatpHlmhKCuKnB4gMsAyWe885dvSXSg/exec?m=');
var data = await res.json();
document.write("<h1>" + data.items[0].volumeInfo.title + "</h1>"); 
