/*-------------------------------------------
ハンバーガーメニュー
-------------------------------------------*/
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.header-nav');

btn.addEventListener('click' , () => {
	nav.classList.toggle('open-menu');
	btn.classList.toggle('close-menu');
});


/*-------------------------------------------
MENU PAGE
-------------------------------------------*/
const menu = document.querySelector('#menu');

const menuLists = [
	{
		name:'コーヒー',
		img:'coffee.jpg',
		price:500,
	},
	{
		name:'カフェラッテ',
		img:'cafelatte.jpg',
		price:500,
	},
	{
		name:'抹茶ラテ',
		img:'matcha-latte.jpg',
		price:500,
	},
	{
		name:'オレンジジュース',
		img:'orange-juice.jpg',
		price:500,
	},
	{
		name:'ティラミス',
		img:'tiramisu.jpg',
		price:500,
	},
	{
		name:'カップケーキ',
		img:'cupcakes.jpg',
		price:500,
	},
	{
		name:'ハンバーガー',
		img:'hamburger.jpg',
		price:500,
	},
	{
		name:'ホットドッグ',
		img:'hotdog.jpg',
		price:500,
	},
];

for(let i=0; i < menuLists.length; i++){
	const {name,img,price} = menuLists[i];
	const content = `<div>
						<img src="img/${img}" alt="">
						<h2>${name}</h2>
						<p>${price}円</p>
					</div>`;
	menu.insertAdjacentHTML('beforeend',content);
}


