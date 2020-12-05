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
	console.log(data)
	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_left_ring'] = arr;		    
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
	  .load(init)



function init() {


	let _ring_Right = new PIXI.BaseTexture.from(loader.resources['_ring_Right'].url);
	let _ring_Left = new PIXI.BaseTexture.from(loader.resources['_ring_Left'].url);
	let _ready_character = new PIXI.BaseTexture.from(loader.resources['_ready_character'].url);




	gameSheet['_ring_Left'] = [];


	for(let x = 0; x < 9; x++) {
		let frame = gamePivot.pivot_left_ring[x][0];
		let size = gamePivot.pivot_left_ring[x][1];
		let data;
		let push = true;
		if (x == 1) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h'] ));
		} else if (x == 2) {
			push = false;
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] ,frame['y'],size['w'],size['h']));
		} else if (x == 3) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] - 13,frame['y'],size['w'] ,size['h'] ));
		} else if (x == 4) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] - 16,frame['y'],size['w'] ,size['h']));
		} else if (x == 5) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x']  - 20,frame['y'],size['w'] ,size['h'] ));
		} else if (x == 6) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] - 20,frame['y'],size['w'] ,size['h'] - 1));
		} else if (x == 7) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] - 21,frame['y'],size['w']  ,size['h'] - 1));
		} else if (x == 8) {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'] ,frame['y'],size['w'],size['h'] - 19));
		} else {
			data = new PIXI.Texture(_ring_Left , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		}

		if (push) {
			gameSheet['_ring_Left'].push(data);
		}
	}	


	_ring_Left_sprite = new PIXI.AnimatedSprite(gameSheet['_ring_Left']);
	_ring_Left_sprite.anchor.set(0.5);
	_ring_Left_sprite.x = background.x - 170;
	_ring_Left_sprite.y = background.y  - 215;
	_ring_Left_sprite.animationSpeed = 0.4;
	_ring_Left_sprite.play()



	gameSheet['_ring_Right'] = [];

	for(let x = 0; x < gamePivot.pivot_right_ring.length; x++) {
		let frame = gamePivot.pivot_right_ring[x][0];
		let size = gamePivot.pivot_right_ring[x][1];
		let data;
		let push = true;
		if (x == 1) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h'] - 2));
		} else if (x == 2) {
			push = false;
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 1 ,frame['y'],size['w'],size['h'] - 3));
		} else if (x == 3) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 25,frame['y'],size['w'] - 26,size['h'] - 3));
		} else if (x == 4) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 28,frame['y'],size['w'] - 26,size['h'] - 3));
		} else if (x == 5) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 34 ,frame['y'],size['w'] - 30 ,size['h'] - 3));
		} else if (x == 6) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 32,frame['y'],size['w'] - 26,size['h'] - 4));
		} else if (x == 7) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] + 34,frame['y'],size['w'] - 26 ,size['h'] - 3));
		} else if (x == 8) {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'] ,frame['y'],size['w'],size['h'] - 20));
		} else {
			data = new PIXI.Texture(_ring_Right , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h'] - 2));
		}

		if (push) {
			gameSheet['_ring_Right'].push(data);
		}
	}	


	_ring_Right_sprite = new PIXI.AnimatedSprite(gameSheet['_ring_Right']);
	_ring_Right_sprite.anchor.set(0.5);
	_ring_Right_sprite.x = background.x + 170;
	_ring_Right_sprite.y = background.y  - 215;
	_ring_Right_sprite.animationSpeed = 0.4;
	// _ring_Right_sprite.loop = false;
	// _ring_Right_sprite.gotoAndStop(5);
	_ring_Right_sprite.play()
	_ring_Right_sprite.onComplete = function()  {
		// _ring_Right_sprite.gotoAndStop(5);
	}



	gameSheet['_ready_character'] = [];
	
	for(let x = 0; x < gamePivot.pivot_ready_character.length; x++) {
		let frame = gamePivot.pivot_ready_character[x][0];
		let size = gamePivot.pivot_ready_character[x][1];
		let data = new PIXI.Texture(_ready_character , new PIXI.Rectangle(frame['x'],frame['y'] - (size['y'] - 10),size['w'],size['h']));
		gameSheet['_ready_character'].push(data);
	}	

	_ready_character_sprite = new PIXI.AnimatedSprite(gameSheet['_ready_character']);
	_ready_character_sprite.x = background.x - 170;
	_ready_character_sprite.y = background.y - 130;
	_ready_character_sprite.animationSpeed = 0.5;
	_ready_character_sprite.play();





	app.stage.addChild(_ring_Right_sprite,_ring_Left_sprite,_ready_character_sprite);


	app.ticker.add((delta) => {
		// anim.rotation += 0.01;
		// ANIMATION GOES HERE
	})

	
}



window.onresize = function() {
	screenW = window.innerWidth;
	screenH = window.innerHeight - 5;
	app.renderer.resize(screenW,screenH);
}


