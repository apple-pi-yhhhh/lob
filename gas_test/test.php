<?php 
if(isset($_POST['address'])){

	define('POST_URL', 'https://script.google.com/macros/s/AKfycbyCBMHlI2Zf-WaoclkznXgAwrW4vbPXMPFUvca1rRHyRuaOQR5ky3LqDXTKqMPpPvx1kQ/exec');

	$post_data = [
		'address' => $_POST['address'],
		'kind' => $_POST['kind'],
		'job' => $_POST['job'],
	];

	$ch = curl_init();
	curl_setopt_array($ch, [
	    CURLOPT_URL => POST_URL,
	    CURLOPT_RETURNTRANSFER => true,
	    CURLOPT_POST => true, 
	    CURLOPT_POSTFIELDS => http_build_query($post_data),
	]);
	$response = curl_exec($ch);
	$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
	$header = substr($response, 0, $header_size);
	curl_close($ch);
}
?>
<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<form action="#" method="post" id="form" name="form">
		<dl>
			<dt>都道府県（プルダウン）</dt>
			<dd><select name="address" id="">
				<option value="北海道">北海道</option>
				<option value="東北">東北</option>
				<option value="関東">関東</option>
				<option value="関西">関西</option>
				<option value="四国">四国</option>
				<option value="九州">九州</option>
				<option value="沖縄">沖縄</option>
			</select></dd>
			<dt>個人or法人（ラジオボタン）</dt>
			<dd>
				<input type="radio" name="kind" value="個人"> 個人<br>
				<input type="radio" name="kind" value="法人"> 法人
			</dd>
			<dt>業種（テキスト）</dt>
			<dd>
				<input type="text" name="job">
			</dd>
		</dl>
		<input type="submit" value="送信">
	</form>
</body>
</html>
