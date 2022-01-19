function cookie_get(cookies){
  let cookie_arr = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    cookie_arr[i].sprit("=");
    cookies[cookie_arr[i][0]] = cookie_arr[i][1]
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
