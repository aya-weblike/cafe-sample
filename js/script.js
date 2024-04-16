/*-------------------------------------------
共通
-------------------------------------------*/
// ハンバーガーメニュー
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.header-nav');
const navItems = document.querySelectorAll('nav li');
const navOptions = {
	duration:1400,
	easing:'ease',
	fill:'forwards',
};

btn.addEventListener('click' , () => {
	nav.classList.toggle('open-menu');
	btn.classList.toggle('close-menu');

	if(nav.classList.contains('open-menu') == true )
	{
		// メニューリンクを１つずつ順に表示
		navItems.forEach((navItem,index)=>{
			navItem.animate(
				{
					opacity:[0,1],
					translate:['2rem',0],
				},
				{
					duration:2400,
					delay:300*index,
					easing:'ease',
					fill:'forwards',
				}
			);
		});
	}else{
		navItems.forEach((navItem) => {
			navItem.animate({opacity:[1,0]},navOptions);
		})
	};
});

// スクロールしたら、ふわっと表示
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries,obs) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting){
			entry.target.animate(
				{
					opacity:[0,1],
					filter:['blur(.4rem)','blur(0)'],
					translate:['0 4rem',0],
				},
				{
					duration:2000,
					easing:'ease',
					fill:'forwards',
				}
			);
			// １度ふわっとさせたら監視をやめて動きをとめる
			obs.unobserve(entry.target);
		}
	});
};

// 監視設定
const fadeObserver = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
	fadeObserver.observe(fadeElement);
});



/*-------------------------------------------
MENU PAGE
-------------------------------------------*/
if(document.URL.match(/menu/)){
	// ドメイン以下のパス名が /menu.html の場合に実行する処理

	// メニューを表示させる
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
							<img class='product-item' src="img/menu/${img}">
							<h2 class="product-name">${name}</h2>
							<p>${price}円</p>
						</div>`;
		menu.insertAdjacentHTML('beforeend',content);
	}

	// 画像をぼかし→くっきりにする
	const menuItems = document.querySelectorAll('.product-item');

	for(let i=0; i < menuItems.length; i++){
		const keyframes = {
			filter:['blur(20px)','blur(0)'],
		};
		const options = {
			duration:600,
			delay:i*300,
			fill:'forwards',
		};
		menuItems[i].animate(keyframes,options);
	}


};

/*-------------------------------------------
ACCESS PAGE
-------------------------------------------*/
if(document.URL.match(/access/)){
	$(function(){
		$('.slideshow').slick({
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true
		});
	});
};


/*-------------------------------------------
GOODS PAGE
-------------------------------------------*/
if(document.URL.match(/goods/)){
	// ドメイン以下のパス名が /menu.html の場合に実行する処理

	// メニューを表示させる
	const goods = document.querySelector('#goods');

	const goodsLists = [
		{
			name:'ブレンドコーヒー豆',
			img:'brend-roast.jpg',
			price:500,
		},
		{
			name:'深煎り豆',
			img:'dark-roast.jpg',
			price:500,
		},
		{
			name:'浅煎り豆',
			img:'light-roast.jpg',
			price:500,
		},
		{
			name:'エコバック',
			img:'ecobag.jpg',
			price:500,
		},
		{
			name:'オリジナルハンカチ',
			img:'handkerchief.jpg',
			price:500,
		},
		{
			name:'オリジナルマグ',
			img:'mugs.jpg',
			price:500,
		},
		{
			name:'オリジナルタンブラー',
			img:'tumbler.jpg',
			price:500,
		},
	];

	for(let i=0; i < goodsLists.length; i++){
		const {name,img,price} = goodsLists[i];
		const content = `<div>
							<img class='product-item' src="img/goods/${img}">
							<h2 class="product-name">${name}</h2>
							<p>${price}円</p>
						</div>`;
		goods.insertAdjacentHTML('beforeend',content);
	}

	// 画像をぼかし→くっきりにする
	const goodsItems = document.querySelectorAll('.product-item');

	for(let i=0; i < goodsItems.length; i++){
		const keyframes = {
			filter:['blur(20px)','blur(0)'],
		};
		const options = {
			duration:600,
			delay:i*300,
			fill:'forwards',
		};
		goodsItems[i].animate(keyframes,options);
	}
};


