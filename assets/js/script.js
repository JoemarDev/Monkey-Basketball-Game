let screenW = window.innerWidth;
let screenH = window.innerHeight - 5;

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

if (window.mobileCheck()) {
	size = [360,640];
} else {
	size = [1990,1080];
}

var ratio = size[0] / size[1];


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



fetch('assets/json/signal_green.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_green_signal'] = arr;		    
})


fetch('assets/json/effect.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_shoot_effect'] = arr;		    
})


fetch('assets/json/signal02.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_signal_02'] = arr;		    
});





fetch('assets/json/signal01.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_signal_01'] = arr;		    
})


fetch('assets/json/mark.json').then((res)=>{
	return res.json();
}).then((data) => {

	let res = data;
	let arr = [];
	 for(let i = 0; i < res.length; i++) {
	 	let frame = res[i]['frame'];
	 	let size = res[i]['spriteSourceSize'];
	 	arr.push([frame,size])
	 }
	 gamePivot['pivot_mark'] = arr;		    
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
	  .add("_game_signal_green" , "assets/images/basketball/texture/signal03.png")
	  .add("_game_shoot_effect" , "assets/images/basketball/texture/effect.png")
	  .add("_game_signal_02" , "assets/images/basketball/texture/signal02.png")
	  .add("_game_signal_01" , "assets/images/basketball/texture/signal01.png")
	  .add("ladder_horizon" , "assets/images/ladder/ladder_horizon.png")
	  .add("img_horizon" , "assets/images/ladder/img_horizon.png")
	  .add("ladder_vertical" , "assets/images/ladder/ladder_vertical.png")
	  .add("img_vertical" , "assets/images/ladder/img_vertical.png")
	  .add("_game_mark" , "assets/images/basketball/texture/mark.png")
	  .load(init)



function init() {

	let _ring_Right = new PIXI.BaseTexture.from(loader.resources['_ring_Right'].url);
	let _ring_Left = new PIXI.BaseTexture.from(loader.resources['_ring_Left'].url);
	let _ready_character = new PIXI.BaseTexture.from(loader.resources['_ready_character'].url);
	let _play_character = new PIXI.BaseTexture.from(loader.resources['_play_character'].url);
	let _game_title = new PIXI.BaseTexture.from(loader.resources['_game_title'].url);
	let _game_signal_green = new PIXI.BaseTexture.from(loader.resources['_game_signal_green'].url);
	let _game_shoot_effect = new PIXI.BaseTexture.from(loader.resources['_game_shoot_effect'].url);
	let _game_signal_02 = new PIXI.BaseTexture.from(loader.resources['_game_signal_02'].url);
	let _game_signal_01 = new PIXI.BaseTexture.from(loader.resources['_game_signal_01'].url);
	let _game_signal_0 = new PIXI.BaseTexture.from(loader.resources['_game_signal_01'].url);
	let _game_mark = new PIXI.BaseTexture.from(loader.resources['_game_mark'].url);


	let active = null;

	let threeLines = [
		{
			'line' : -32,
			'alpha' : 1,
		},
		{
			'line' : 29,
			'alpha' : 1,
		},
		{
			'line' : +88,
			'alpha' : 1,
		},
		{
			'line' : 50,
			'alpha' : 0,
		}
	];

	let fourLines = [
		{
			'line' : 100,
			'alpha' : 1,
		},
		{
			'line' : 53,
			'alpha' : 1,
		},
		{
			'line' :  5,
			'alpha' : 1,
		},
		{
			'line' : -44,
			'alpha' : 1,
		}
	];




	let gameTitle = PIXI.Sprite.from(loader.resources['_game_title'].url);
	gameTitle.x = background.x - 170;
	gameTitle.y = background.y - 275;

	var d = new Date();
	var gtmStr = d.toUTCString();

	let UTCTIME = new PIXI.Text(gtmStr,{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	UTCTIME.x = gameTitle.x + 60;
	UTCTIME.y = gameTitle.y  + 37;


	let ladder_left  = PIXI.Sprite.from(loader.resources['ladder_vertical'].url);

	ladder_left.x = background.x - 165;
	ladder_left.y = background.y - 130;
	ladder_left.height = background.height - 320;

	let ladder_right = PIXI.Sprite.from(loader.resources['ladder_vertical'].url);

	ladder_right.x = background.x + 150;
	ladder_right.y = background.y - 130;
	ladder_right.height = background.height - 320;

	let ladder_h_1 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_1.x = background.x - 155;
	ladder_h_1.y = background.y - 90;

	let ladder_h_2 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_2.x = background.x - 155;
	ladder_h_2.y = background.y - 45;

	let ladder_h_3 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_3.x = background.x - 155;
	ladder_h_3.y = background.y ;

	let  ladder_h_4 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_4.x = background.x - 155;
	ladder_h_4.y = background.y + 45;

	let verticalLine_container = new PIXI.Container();

	let y1L = PIXI.Sprite.from(loader.resources['img_horizon'].url);

	y1L.width = ladder_left.width;
	y1L.height = 0;
	y1L.x = background.x - 165;
	y1L.y = background.y - 130;

	let y2L = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y2L.width = ladder_left.width;
	y2L.height = 0;
	y2L.x = background.x - 165;
	y2L.y = y1L.y + 48;

	let y3L = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y3L.width = ladder_left.width;
	y3L.height = 0;
	y3L.x = background.x - 165;
	y3L.y = y2L.y + 37;


	let y4L = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y4L.width = ladder_left.width;
	y4L.height = 0;
	y4L.x = background.x - 165;
	y4L.y = y3L.y + 59;


	let y5L = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y5L.width = ladder_left.width;
	y5L.height = 0;
	y5L.x = background.x - 165;
	y5L.y = y4L.y + 31;



	let y1R = PIXI.Sprite.from(loader.resources['img_horizon'].url);

	y1R.width = ladder_left.width;
	y1R.height = 0;
	y1R.x = background.x + 150;
	y1R.y = background.y - 130;

	let y2R = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y2R.width = ladder_left.width;
	y2R.height = 0;
	y2R.x = background.x + 150;
	y2R.y = y1R.y + 40;

	let y3R = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y3R.width = ladder_left.width;
	y3R.height = 0;
	y3R.x = background.x + 150;
	y3R.y = y2R.y + 62;


	let y4R = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	y4R.width = ladder_left.width;
	y4R.height = 0;
	y4R.x = background.x + 150;
	y4R.y = y3R.y + 28;



	let v1three = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	v1three.width = 0;
	v1three.height = ladder_h_1.height;
	v1three.x = ladder_h_1.x;
	v1three.y = ladder_h_1.y;



	let v2three = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	v2three.width = 0;
	v2three.scale.x = -1;
	v2three.alpha = 0;
	v2three.height = ladder_h_2.height;
	v2three.x = ladder_h_2.x + ladder_h_2.width;
	v2three.y = ladder_h_2.y;



	let v3three = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	v3three.width = 0;
	v3three.height = ladder_h_3.height;
	v3three.x = ladder_h_3.x;
	v3three.y = ladder_h_3.y;

	let v4three = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	v4three.width = 0;
	v4three.height = ladder_h_4.height;
	v4three.scale.x = -1;
	v4three.alpha = 0;
	v4three.x = ladder_h_4.x + ladder_h_4.width;
	v4three.y = ladder_h_4.y;
	// v4three.alpha = ladder_h_4.alpha;





	verticalLine_container.addChild(y1L,y2L,y3L,y4L,y5L,y1R,y2R,y3R,y4R,v1three,v2three,v3three,v4three);




	let ladder_container = new PIXI.Container();

	gameSheet['_game_mark'] = [];

	for(let x = 0; x < gamePivot.pivot_mark.length; x++) {
		let frame = gamePivot.pivot_mark[x][0];
		let size = gamePivot.pivot_mark[x][1];
		data = new PIXI.Texture(_game_mark , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		gameSheet['_game_mark'].push(data);	
	}	


	_game_mark_left = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_left.x = background.x - 190;
	_game_mark_left.y = background.y  - 190;
	_game_mark_left.animationSpeed = 0.4;
	_game_mark_left.alpha = 1;
	_game_mark_left.gotoAndStop(1);


	_game_mark_right = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_right.x = background.x + 125;
	_game_mark_right.y = background.y  - 190;
	_game_mark_right.animationSpeed = 0.4;
	_game_mark_right.gotoAndStop(7);


	_game_mark_even = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_even.x = background.x - 190;
	_game_mark_even.y = background.y  + 80;
	_game_mark_even.animationSpeed = 0.4;
	_game_mark_even.gotoAndStop(2);


	_game_mark_odd = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_odd.x = background.x + 125;
	_game_mark_odd.y = background.y  + 80;
	_game_mark_odd.animationSpeed = 0.4;
	_game_mark_odd.gotoAndStop(8);


	ladder_container.addChild(ladder_h_1,ladder_h_2,ladder_h_3,ladder_h_4,ladder_left,ladder_right,verticalLine_container,_game_mark_left,_game_mark_right,_game_mark_even,_game_mark_odd);




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
	_ring_Right_sprite.play()


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
	_ready_character_sprite.alpha = 0;



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


	gameSheet['_game_signal_green'] = [];

	for(let x = 0; x < gamePivot.pivot_green_signal.length; x++) {
		let frame = gamePivot.pivot_green_signal[x][0];
		let size = gamePivot.pivot_green_signal[x][1];
		data = new PIXI.Texture(_game_signal_green , new PIXI.Rectangle(frame['x'],frame['y'] ,frame['w'],frame['h']));
		gameSheet['_game_signal_green'].push(data);
	}	

	_game_signal_green_sprite = new PIXI.AnimatedSprite(gameSheet['_game_signal_green']);
	_game_signal_green_sprite.x = background.x - 150;
	_game_signal_green_sprite.y = background.y - 90;
	_game_signal_green_sprite.animationSpeed = 0.4;

	_game_signal_green_sprite.alpha = 1;
	_game_signal_green_sprite.play();




	gameSheet['_game_shoot_effect'] = [];

	for(let x = 0; x < gamePivot.pivot_shoot_effect.length; x++) {
		let frame = gamePivot.pivot_shoot_effect[x][0];
		let size = gamePivot.pivot_shoot_effect[x][1];
		data = new PIXI.Texture(_game_shoot_effect , new PIXI.Rectangle(frame['x'],frame['y'] ,frame['w'],frame['h']));
		gameSheet['_game_shoot_effect'].push(data);
	}	

	_game_shoot_effect_sprite_left = new PIXI.AnimatedSprite(gameSheet['_game_shoot_effect']);
	_game_shoot_effect_sprite_left.x = background.x - 150;
	_game_shoot_effect_sprite_left.y = background.y - 90;
	_game_shoot_effect_sprite_left.animationSpeed = 0.4;

	_game_shoot_effect_sprite_left.alpha = 1;
	_game_shoot_effect_sprite_left.play();


	_game_shoot_effect_sprite_right = new PIXI.AnimatedSprite(gameSheet['_game_shoot_effect']);
	_game_shoot_effect_sprite_right.x = background.x + 150;
	_game_shoot_effect_sprite_right.y = background.y - 90;
	_game_shoot_effect_sprite_right.animationSpeed = 0.4;
	_game_shoot_effect_sprite_right.play();



	gameSheet['_game_signal_02'] = [];

	for(let x = 0; x < gamePivot.pivot_signal_02.length; x++) {
		let frame = gamePivot.pivot_signal_02[x][0];
		let size = gamePivot.pivot_signal_02[x][1];
		data = new PIXI.Texture(_game_signal_02 , new PIXI.Rectangle(frame['x'],frame['y'] ,frame['w'],frame['h']));
		gameSheet['_game_signal_02'].push(data);
	}	

	_game_signal_02_sprite = new PIXI.AnimatedSprite(gameSheet['_game_signal_02']);
	_game_signal_02_sprite.x = background.x - 150;
	_game_signal_02_sprite.y = background.y - 90;
	_game_signal_02_sprite.animationSpeed = 0.4;

	_game_signal_02_sprite.alpha = 1;
	_game_signal_02_sprite.play();

	gameSheet['_game_signal_01'] = [];

	for(let x = 0; x < gamePivot.pivot_signal_01.length; x++) {
		let frame = gamePivot.pivot_signal_01[x][0];
		let size = gamePivot.pivot_signal_01[x][1];
		data = new PIXI.Texture(_game_signal_01 , new PIXI.Rectangle(frame['x'],frame['y'] ,frame['w'],frame['h']));
		gameSheet['_game_signal_01'].push(data);
	}	


	_game_signal_01_sprite_left = new PIXI.AnimatedSprite(gameSheet['_game_signal_01']);
	_game_signal_01_sprite_left.x = background.x - 150;
	_game_signal_01_sprite_left.y = background.y - 90;
	_game_signal_01_sprite_left.animationSpeed = 0.4;

	_game_signal_01_sprite_left.alpha = 1;
	_game_signal_01_sprite_left.play();


	_game_signal_01_sprite_right = new PIXI.AnimatedSprite(gameSheet['_game_signal_01']);
	_game_signal_01_sprite_right.x = background.x + 60;
	_game_signal_01_sprite_right.y = background.y - 90;
	_game_signal_01_sprite_right.animationSpeed = 0.4;
	_game_signal_01_sprite_right.rotate = 2;
	_game_signal_01_sprite_right.alpha = 1;
	_game_signal_01_sprite_right.play();






	let secondIndicationStr = new PIXI.Text('20 초 후',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let timeIndicationStr = new PIXI.Text('12월 05일 732회차 추첨을 시작합니다.',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});

	secondIndicationStr.x = _ready_character_sprite.x + 140;
	secondIndicationStr.y = _ready_character_sprite.y + 180;
	timeIndicationStr.x = secondIndicationStr.x - 90;
	timeIndicationStr.y = secondIndicationStr.y + 25;




	app.stage.addChild(_ring_Right_sprite,_ring_Left_sprite,_ready_character_sprite,_play_character_sprite,_game_signal_01_sprite_left,_game_signal_01_sprite_right,_game_signal_02_sprite,_game_signal_green_sprite,gameTitle,UTCTIME,_game_shoot_effect_sprite_left,_game_shoot_effect_sprite_right,secondIndicationStr,timeIndicationStr,ladder_container);


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


		// READY Green Signal POSITION PER FRAME 
		_game_signal_green_sprite.y = gamePivot.pivot_green_signal[_game_signal_green_sprite.currentFrame][1]['y'] + (background.y - 142);
		_game_signal_green_sprite.x = gamePivot.pivot_green_signal[_game_signal_green_sprite.currentFrame][1]['x'] + (background.x - 182);


		// READY Green Signal POSITION PER FRAME 
		_game_shoot_effect_sprite_left.y = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_left.currentFrame][1]['y'] + (background.y - 300);
		_game_shoot_effect_sprite_left.x = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_left.currentFrame][1]['x'] + (background.x - 280);

		// READY Green Signal POSITION PER FRAME 1
		_game_shoot_effect_sprite_right.y = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_right.currentFrame][1]['y'] + (background.y - 300);
		_game_shoot_effect_sprite_right.x = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_right.currentFrame][1]['x'] + (background.x + 20);


		// READY Green Signal POSITION PER FRAME 1
		_game_signal_02_sprite.y = gamePivot.pivot_signal_02[_game_signal_02_sprite.currentFrame][1]['y'] + (background.y - 250);
		_game_signal_02_sprite.x = gamePivot.pivot_signal_02[_game_signal_02_sprite.currentFrame][1]['x'] + (background.x - 135);

		// READY Green Signal POSITION PER FRAME 1
		_game_signal_01_sprite_right.y = gamePivot.pivot_signal_01[_game_signal_01_sprite_right.currentFrame][1]['y'] + (background.y - 50);
		_game_signal_01_sprite_right.x = (-gamePivot.pivot_signal_01[_game_signal_01_sprite_right.currentFrame][1]['x']) + (background.x + 325);
		_game_signal_01_sprite_right.scale.x = -1;

		// READY Green Signal POSITION PER FRAME 1
		_game_signal_01_sprite_left.y = gamePivot.pivot_signal_01[_game_signal_01_sprite_left.currentFrame][1]['y'] + (background.y - 50);
		_game_signal_01_sprite_left.x = gamePivot.pivot_signal_01[_game_signal_01_sprite_left.currentFrame][1]['x'] + (background.x - 325);
		// _game_signal_01_sprite_right.scale.x = -1;


		// ladder_h_1.y = (background.y - 50) + threeLines[0]['line'];
		// ladder_h_1.alpha = threeLines[0]['alpha'];
		// ladder_h_2.y = (background.y - 50) + threeLines[1]['line'];
		// ladder_h_2.alpha = threeLines[0]['alpha'];
		// ladder_h_3.y = (background.y - 50) + threeLines[2]['line'];
		// ladder_h_3.alpha = threeLines[0]['alpha'];
		// ladder_h_4.y = (background.y - 50) + threeLines[3]['line'];
		// ladder_h_4.alpha = threeLines[3]['alpha'];



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

	document.getElementById('changeLines').addEventListener('click',function(){
		// if (active == 'threeLines') {
		// 	active = 'fourLines';

		// 	ladder_h_1.y = (background.y - 50) + fourLines[0]['line'];
		// 	ladder_h_1.alpha = fourLines[0]['alpha'];
		// 	ladder_h_2.y = (background.y - 50) + fourLines[1]['line'];
		// 	ladder_h_2.alpha = fourLines[0]['alpha'];
		// 	ladder_h_3.y = (background.y - 50) + fourLines[2]['line'];
		// 	ladder_h_3.alpha = fourLines[0]['alpha'];
		// 	ladder_h_4.y = (background.y - 50) + fourLines[3]['line'];
		// 	ladder_h_4.alpha = fourLines[3]['alpha'];

		// } else {
		// 	active = 'threeLines';
			
		// 	ladder_h_1.y = (background.y - 50) + threeLines[0]['line'];
		// 	ladder_h_1.alpha = threeLines[0]['alpha'];
		// 	ladder_h_2.y = (background.y - 50) + threeLines[1]['line'];
		// 	ladder_h_2.alpha = threeLines[0]['alpha'];
		// 	ladder_h_3.y = (background.y - 50) + threeLines[2]['line'];
		// 	ladder_h_3.alpha = threeLines[0]['alpha'];
		// 	ladder_h_4.y = (background.y - 50) + threeLines[3]['line'];
		// 	ladder_h_4.alpha = threeLines[3]['alpha'];

		// }

		resultPlayRight(3,1);


	})



	function resultPlayRight(type,pos) {
		if (type == 3) {

			_game_mark_left.gotoAndStop(4);

			createjs.Tween.get(y1L, { loop: false })
			.to({height : ladder_left.height * 0.215}, 300,createjs.Ease.linear)

			createjs.Tween.get(v1three, { loop: false }).wait(300)
			.to({width : ladder_h_1.width}, 300,createjs.Ease.linear)

			createjs.Tween.get(y2R, { loop: false }).wait(600)
			.to({height : ladder_left.height * 0.235}, 300,createjs.Ease.linear)

			createjs.Tween.get(v2three, { loop: false }).wait(900)
			.to({alpha : 1})
			.to({width : ladder_h_2.width}, 300,createjs.Ease.linear)

			createjs.Tween.get(y3L, { loop: false }).wait(1200)
			.to({height : ladder_left.height * 0.235}, 300,createjs.Ease.linear)

			createjs.Tween.get(v3three, { loop: false }).wait(1500)
			.to({width : ladder_h_3.width}, 300,createjs.Ease.linear)

			createjs.Tween.get(y4R, { loop: false }).wait(1800)
			.to({height : ladder_left.height * 0.235}, 300,createjs.Ease.linear)

			createjs.Tween.get(v4three, { loop: false }).wait(2100)
			.to({alpha : 1})
			.to({width : ladder_h_4.width}, 300,createjs.Ease.linear)

			createjs.Tween.get(y5L, { loop: false }).wait(2400)
			.to({height : ladder_left.height * 0.235}, 300,createjs.Ease.linear)
			// .to(function(){
				
			// })

			setTimeout(function(){
				_game_mark_even.gotoAndStop(5);
			},2700)

			

		}
	}


	
}


window.onresize = function() {
	// screenW = window.innerWidth;
	// screenH = window.innerHeight - 5;
	// app.renderer.resize(screenW,screenH);
	resize()
}



function resize() {
    if (window.innerWidth / window.innerHeight >= ratio) {
        var w = window.innerHeight * ratio;
        var h = window.innerHeight;
    } else {
        var w = window.innerWidth;
        var h = window.innerWidth / ratio;
    }
    app.renderer.view.style.width = w + 'px';
    app.renderer.view.style.height = h + 'px';
}

