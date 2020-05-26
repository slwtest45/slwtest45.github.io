"use strict";

"Нажатие на цифры";

(function() {
	window.calcBtn   = document.querySelectorAll(".calc-btn-box");
	window.calcBtnNumber = document.querySelectorAll(".calc-btn-number");

	window.calcBtnAction = document.querySelectorAll(".calc-btn-action");
	window.calcBtnMath = document.querySelectorAll(".calc-btn-math");
	window.calcBtnEqually = document.querySelector(".calc-btn-equally");

	window.calcResultNumber = 0;
	var calcSymbol = '';

	var calcFlagAction = true;

	window.calcField = document.querySelector(".calc-field");
	window.calcResoult = document.querySelector(".calc-field-resoult");

	var onEquallyEvent = function() {
		console.log( typeof JSON.parse( JSON.parse( JSON.stringify(calcField.value) ) ) );

		// console.log(calcField.value);
	};

	calcBtnEqually.addEventListener("key", onEquallyEvent);

})();
