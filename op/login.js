function cookie_get(cookies){
  let cookie_arr = document.cookie.split('; ');
  for (let i = 0; i < cookie_arr.length; i++) {
    var coc = cookie_arr[i].split("=");
    cookies[coc[0]] = coc[1]
  }
}
function login() {
  cookie_make("mail", document.getElementById("e-mail").value);
  cookie_make("pass", document.getElementById("pass").value);
  let date = new Date();
  let time = date.getFullYear() * 365 * 24 * 60 + (date.getMonth() + 1) * 30 * 24 * 60 + date.getDate() * 24 * 60 + date.getHours() * 60 + date.getMinutes();
  cookie_make("time", time);
  cookie_make("last", location.herf);
}

function cookie_make(key, value) {
  document.cookie = key + "=" + value;
}

function user_show(){
  let html1 = [
    '<div id="user_show">',
    'メールアドレス：<p><input type="text" id="e-mail">@jhs.gs.chiba-u.jp</p><br>',
    'パスワード：<p><input type="password" id="pass"></p><br>',
    '<input type="button" value="ログイン" onclick="login()">',
    '<div>'
  ]
  let html2 = [
    '<div id="user_show">',
    '<p>こんにちは</p>',
    '<div>'
  ]
  let element = document.getElementById('user_show');
  element.remove();
  let cookie = {};
  cookie_get(cookie);
  let date = new Date();
  let time = date.getFullYear() * 365 * 24 * 60 + (date.getMonth() + 1) * 30 * 24 * 60 + date.getDate() * 24 * 60 + date.getHours() * 60 + date.getMinutes();
  if (time - cookie[time] > 30){
    var n = html1;
  }else{
    var n = html2;
  }
  let element = document.getElementById('main');
  for (let i = 0; i < n.length; i++) {
    element.insertAdjacentHTML('beforeend', n[i]);
  }
  /*
  beforebegin	指定した要素の直前に挿入する
  afterbegin	指定した要素内にある最初の子要素の前に挿入する
  beforeend	指定した要素内にある最後の子要素の後に挿入する
  afterend	指定した要素の直後に挿入する
  
  <!-- beforebegin -->
  <div>
  <!-- afterbegin -->
  intotheprogram
  <!-- beforeend -->
  </div>
  <!-- afterend -->
  */
}
