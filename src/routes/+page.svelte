<script lang='ts'>
	import { locale } from '../Store.js';

	let dict : { [lang: string]: string } = {
		'en': 'Hello! <img src="https://www.w3schools.com/html/pic_trulli.jpg">',
		'fr': 'Bonjour! <img src="https://www.w3schools.com/html/img_girl.jpg">',
		'es': 'Hola! <img src="https://www.w3schools.com/html/img_chania.jpg">'
	};

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="imgbckspace-y-5">
		<h1 class="h1">Euclid! in {@html dict[$locale]}</h1>
	</div>
</div>
