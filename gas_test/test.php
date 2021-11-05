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
