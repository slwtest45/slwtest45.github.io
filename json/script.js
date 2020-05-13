(function() {
	var objText = {
		name: 'Slawa',
		age: 22,
		gender: 'man'
	},
		textContainer = document.querySelector(".text");

	alert(JSON.stringify(objText));

	textContainer.textContent = JSON.stringify(objText);


})();