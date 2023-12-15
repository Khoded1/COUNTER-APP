// 'use strict';
const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', e => {
	if (e.target.classList.contains('sub')) {
		count.innerHTML--;
		setColor();
	}
	if (e.target.classList.contains('reset')) {
		count.innerHTML = 0;
		setColor();
	}
	if (e.target.classList.contains('add')) {
		count.innerHTML++;
		setColor();
	}
});

function setColor() {
	if (count.innerHTML > 0) {
		count.style.color = '#FFFF00';
	} else if (count.innerHTML < 0) {
		count.style.color = '#FF4500';
	} else {
		count.style.color = '#fff';
	}
}
