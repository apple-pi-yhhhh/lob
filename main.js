/*
fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:9784101010137')
  .then(response => response.json())
  .then(data => console.log(data))
  //.then(data => console.log(data.items[0]));
//document.wite(data.items.0.volumeInfo.title)
*/
var data = {
    "みかん":{"price":"200", "num":"5"},
    "いちご":{"price":"400", "num":"1"},
    "ぶどう":{"price":"380", "num":"7"}
}
var target = ['title'];
var result = {};
for(var key of Object.keys(data)){
    // 連想配列のキーと配列の値が一致するか検索
    for(var i of target){
        if(key == i){
            result[key] = data[key]; // 連想配列に格納
            break;
        }
    }
}
console.log(result);
