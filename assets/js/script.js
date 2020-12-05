let screenW = window.innerWidth;
let screenH = window.innerHeight - 5;

// Alliases
let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	Sprite = PIXI.Spritel



let gameSheet = [];
let gamePivot = []

// fetch ALL SPRITE JSON
fetch('assets/json/ready.json').then((res)=>{
	return res.json();
}).then((data) => {
	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_ready_character'] = arr;		    
})

fetch('assets/json/right_ring.json').then((res)=>{
	return res.json();
}).then((data) => {
	console.log(data)
	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_right_ring'] = arr;		    
})



fetch('assets/json/ring_left.json').then((res)=>{
	return res.json();
}).then((data) => {
	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_left_ring'] = arr;		    
})




fetch('assets/json/character.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_character'] = arr;		    
})




let app = new PIXI.Application({
	width : screenW ,
	height : screenH,
	backgroundColor : 0x00000,
	resolution : window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

app.renderer.resize(screenW,screenH);


// Background Sprites
let background = PIXI.Sprite.from('assets/images/basketball/images/background.png');
background.anchor.set(0.5);

// move the backgroun sprite to the center of the screen
background.x = app.screen.width / 2;
background.y = app.screen.height / 2;



app.stage.addChild(background);
// Background Sprites


app.maxFPS = 60;



loader.add("_ring_Right" , "assets/images/basketball/texture/ladder_red.png")
	  .add("_ring_Left" , "assets/images/basketball/texture/ladder_blue.png")
	  .add("_ready_character" , "assets/images/basketball/texture/ready.png")
	  .add("_play_character" , "assets/images/basketball/texture/character.png")
	  .add("_game_title" , "assets/images/basketball/images/title_basket.png")
	  .load(init)



function init() {


	let _ring_Right = new PIXI.BaseTexture.from(loader.resources['_ring_Right'].url);
	let _ring_Left = new PIXI.BaseTexture.from(loader.resources['_ring_Left'].url);
	let _ready_character = new PIXI.BaseTexture.from(loader.resources['_ready_character'].url);
	let _play_character = new PIXI.BaseTexture.from(loader.resources['_play_character'].url);
	let _game_title = new PIXI.BaseTexture.from(loader.resources['_game_title'].url);




	let gameTitle = PIXI.Sprite.from(loader.resources['_game_title'].url);
	gameTitle.x = background.x - 170;
	gameTitle.y = (background.y  / 2) - 45;

	var d = new Date();
	var gtmStr = d.toUTCString();

	let UTCTIME = new PIXI.Text(gtmStr,{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	UTCTIME.x = gameTitle.x + 60;
	UTCTIME.y = gameTitle.y  + 37;





	gameSheet['_ring_Left'] = [];

	for(let x = 0; x < gamePivot.pivot_left_ring.length; x++) {
		let frame = gamePivot.pivot_left_ring[x][0];
		let size = gamePivot.pivot_left_ring[x][1];
		data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		gameSheet['_ring_Left'].push(data);
		
	}	


	_ring_Left_sprite = new PIXI.AnimatedSprite(gameSheet['_ring_Left']);
	_ring_Left_sprite.x = background.x - 170;
	_ring_Left_sprite.y = background.y  - 215;
	_ring_Left_sprite.animationSpeed = 0.4;
	// _ring_Left_sprite.loop = false;
	_ring_Left_sprite.play()



	gameSheet['_ring_Right'] = [];

	for(let x = 0; x < gamePivot.pivot_right_ring.length; x++) {
		let frame = gamePivot.pivot_right_ring[x][0];
		let size = gamePivot.pivot_right_ring[x][1];
		data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h'] - 2));
		gameSheet['_ring_Right'].push(data);

	}	


	_ring_Right_sprite = new PIXI.AnimatedSprite(gameSheet['_ring_Right']);
	_ring_Right_sprite.x = background.x + 175;
	_ring_Right_sprite.y = background.y  - 214;
	_ring_Right_sprite.animationSpeed = 0.4;
	// _ring_Right_sprite.loop = false;
	_ring_Right_sprite.play()
	_ring_Right_sprite.onComplete = function()  {
		// _ring_Right_sprite.gotoAndStop(5);
	}


	gameSheet['_ready_character'] = [];
	
	for(let x = 0; x < gamePivot.pivot_ready_character.length; x++) {
		let frame = gamePivot.pivot_ready_character[x][0];
		let size = gamePivot.pivot_ready_character[x][1];
		let data = new PIXI.Texture(_ready_character , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		gameSheet['_ready_character'].push(data);
	}	

	_ready_character_sprite = new PIXI.AnimatedSprite(gameSheet['_ready_character']);
	_ready_character_sprite.x = background.x - 170;
	_ready_character_sprite.y = background.y - 130;
	_ready_character_sprite.animationSpeed = 0.5;
	_ready_character_sprite.play();
	_ready_character_sprite.alpha = 1;



	gameSheet['_play_character'] = [];

	for(let x = 0; x < gamePivot.pivot_character.length; x++) {
		let frame = gamePivot.pivot_character[x][0];
		let size = gamePivot.pivot_character[x][1];
		data = new PIXI.Texture(_play_character , new PIXI.Rectangle(frame['x'],frame['y'] ,frame['w'],frame['h']));
		gameSheet['_play_character'].push(data);
	}	


	_play_character_sprite = new PIXI.AnimatedSprite(gameSheet['_play_character']);
	_play_character_sprite.x = background.x - 150;
	_play_character_sprite.y = background.y - 80;
	_play_character_sprite.animationSpeed = 0.4;

	_play_character_sprite.alpha = 0;
	_play_character_sprite.play();




	let secondIndicationStr = new PIXI.Text('20 초 후',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let timeIndicationStr = new PIXI.Text('12월 05일 732회차 추첨을 시작합니다.',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});

	secondIndicationStr.x = _ready_character_sprite.x + 140;
	secondIndicationStr.y = _ready_character_sprite.y + 180;
	timeIndicationStr.x = secondIndicationStr.x - 90;
	timeIndicationStr.y = secondIndicationStr.y + 25;









	app.stage.addChild(_ring_Right_sprite,_ring_Left_sprite,_ready_character_sprite,_play_character_sprite,gameTitle,UTCTIME,secondIndicationStr,timeIndicationStr);


	app.ticker.add((delta) => {

		// PLAY CHARACTER POSITION PER FRAME
		_play_character_sprite.y = gamePivot.pivot_character[_play_character_sprite.currentFrame][1]['y'] +  (background.y - 280);
		_play_character_sprite.x = gamePivot.pivot_character[_play_character_sprite.currentFrame][1]['x']  +  (background.x - 160);

		// READY CHARACTER POSITION PER FRAME 
		_ready_character_sprite.y = gamePivot.pivot_ready_character[_ready_character_sprite.currentFrame][1]['y'] +  (background.y - 140);
		_ready_character_sprite.x = gamePivot.pivot_ready_character[_ready_character_sprite.currentFrame][1]['x']  +  (background.x - 185);

		// READY CHARACTER POSITION PER FRAME 
		_ring_Right_sprite.y = gamePivot.pivot_right_ring[_ring_Right_sprite.currentFrame][1]['y'] + (background.y - 280);
		_ring_Right_sprite.x = gamePivot.pivot_right_ring[_ring_Right_sprite.currentFrame][1]['x'] + (background.x + 40);

		// READY CHARACTER POSITION PER FRAME 
		_ring_Left_sprite.y = gamePivot.pivot_left_ring[_ring_Left_sprite.currentFrame][1]['y'] + (background.y - 280);
		_ring_Left_sprite.x = gamePivot.pivot_left_ring[_ring_Left_sprite.currentFrame][1]['x'] + (background.x - 305);




		// UPDATING TIME OF THE GAME

		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		let hh = today.getHours();
		let m = today.getMinutes();
		let ss = today.getSeconds();

		if (m < 10) {
			m = '0'+m;
		}

		if (ss < 10) {
			ss = '0'+ss;
		}

		secondIndicationStr.text = ss+' 초 후';
		timeIndicationStr.text = mm+'월 '+dd+'일 732회차 추첨을 시작합니다.';
		today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + m + ':' + ss + ' GMT+08:00';
		UTCTIME.text = today;

	})

	
}



window.onresize = function() {
	screenW = window.innerWidth;
	screenH = window.innerHeight - 5;
	app.renderer.resize(screenW,screenH);
}


