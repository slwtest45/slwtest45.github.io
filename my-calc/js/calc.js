"use strict";

"Нажатие на цифры";

(function() {
	window.calcBtn   = document.querySelectorAll(".calc-btn-box");

	window.calcBtnNumber = document.querySelectorAll(".calc-btn-number");
	window.calcBtnMath = document.querySelectorAll(".calc-btn-math");
	window.calcBtnEqually = document.querySelector(".calc-btn-equally");

	window.calcBtnDelete = document.querySelector(".calc-btn-delete");
	window.calcBtnRemove = document.querySelector(".calc-btn-remove");


	window.calcResultNumber = 0;
	var calcSymbol = '';

	var calcFlagAction = true;

	window.calcField = document.querySelector(".calc-field");
	window.calcResoult = document.querySelector(".calc-field-resoult");


	var onCalculatorInit = function() {
		switch (calcSymbol) {
			case '+':
				calcResultNumber = calcResultNumber + +calcField.value;
				break;
			case '-':
				calcResultNumber = calcResultNumber - +calcField.value;
				break;
			case 'x':
				calcResultNumber = calcResultNumber * +calcField.value;
				break;
			case '/':
				calcResultNumber = calcResultNumber / +calcField.value;
				break;
			default:
				calcResultNumber = +calcField.value;
				break;
		}
	};

	// Ввод чисел нажатием мыши
	// Функции
	var onCalcResoutlChange = function() {
		calcResoult.textContent = calcResultNumber;
	};

	var onCalcBtnNumberClick = function(evtCalcBtnNumber) {
		let textBtn = evtCalcBtnNumber.currentTarget.querySelector("span").textContent;

		calcField.value = calcField.value + textBtn;

		calcBtnMath.forEach(function(item) {
			item.addEventListener("click", onMathSymbolAdd);
		});
	};

	// Инициализация событий ввода чисел нажатием мыши
	calcBtnNumber.forEach(function(item) {
		item.addEventListener("click", onCalcBtnNumberClick);
	});

	// Ввод знака действия
	// Функции
	var onMathSymbolAdd = function(evtMathSymbol) {
		calcBtnMath.forEach(function(item) {
			item.removeEventListener("click", onMathSymbolAdd);
		});

		if ( calcField.value != '' ) {
			let mathSymbol = evtMathSymbol.currentTarget.querySelector("span").textContent;

			onCalculatorInit();
			onCalcResoutlChange();

			calcSymbol = mathSymbol;
			calcResoult.textContent = calcResoult.textContent + calcSymbol;
			
			calcField.value = '';
		}
		else{
			calcResoult.textContent = calcResoult.textContent + calcSymbol;
		}
	};

	// Инициализация событий ввода знаков нажатием мыши
	calcBtnMath.forEach(function(item) {
		item.addEventListener("click", onMathSymbolAdd);
	});

	calcField.addEventListener("keyup", function() {
		calcBtnMath.forEach(function(item) {
			item.addEventListener("click", onMathSymbolAdd);
		});
	});

	// Нажатие на равно
	var onEquallySymbolAdd = function() {
		onCalculatorInit();
		calcResoult.textContent = '';
		calcField.value = calcResultNumber;
		calcSymbol = '';
		calcResultNumber = 0;
	};

	calcBtnEqually.addEventListener("click", onEquallySymbolAdd);

	var onEndItemDelete = function() {
		let calcFieldIsArray = calcField.value.split("");
		calcFieldIsArray.pop();
		calcField.value = calcFieldIsArray.join('');
	};

	calcBtnDelete.addEventListener("click", onEndItemDelete);

	var onCalcRemove = function() {
		calcResultNumber = 0;
		calcSymbol = '';
		calcField.value = '';
		calcResoult.textContent = '';
	};

	calcBtnRemove.addEventListener("click", onCalcRemove);

})();
