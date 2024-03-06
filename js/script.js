/*-------------------------------------------
MENU PAGE
-------------------------------------------*/
const menu = document.querySelector('#menu');

const menuLists = [
	'coffee.jpg',
	'cafelatte.jpg',
	'matcha-latte.jpg',
	'orange-juice.jpg',
	'tiramisu.jpg',
	'cupcakes.jpg',
	'hamburger.jpg',
	'hotdog.jpg',
];

for(let i=0; i < menuLists.length; i++){
	const content = `<div><img src="img/${menuLists[i]}" alt=""></div>`;
	menu.insertAdjacentHTML('beforeend',content);
}


