function init() {

	

	background.alpha = 1;
	_game_login_anim_sprite.alpha = 0;
	
	loadedText.alpha = 0;
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
	let _game_result_icon = new PIXI.BaseTexture.from(loader.resources['_game_result_icon'].url);
	let _game_btnSounds = new PIXI.BaseTexture.from(loader.resources['_game_btnSounds'].url);


	// MUSIC

	let backgroundMusic,b5seconds,basketDribble,commonLadder,commonResult;

	PIXI.Loader.shared.load(function(loader, resources) {
	   backgroundMusic = resources.bgMusic.sound;
	   backgroundMusic.play();
	   backgroundMusic.loop = true;
	   b5seconds = resources.b5seconds.sound;
	   basketDribble = resources.basketDribble.sound;
	   commonLadder = resources.commonLadder.sound;
	   commonResult = resources.commonResult.sound;

	});

	let active = null;



	let gameTitle = PIXI.Sprite.from(loader.resources['_game_title'].url);
	gameTitle.x = background.x - 170;
	gameTitle.y = background.y - 275;

	var d = new Date();
	var gtmStr = d.toUTCString();

	let UTCTIME = new PIXI.Text(gtmStr,{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	UTCTIME.x = gameTitle.x + 60;
	UTCTIME.y = gameTitle.y  + 37;

	let result_container = new PIXI.Container();

	let _game_result = PIXI.Sprite.from('assets/images/bet/basketball_result.png');
	_game_result.x = background.x - 220;
	_game_result.y = background.y - 180;


	let resultRound = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	resultRound.x = _game_result.x + 170;
	resultRound.y = _game_result.y + 32;


	gameSheet['_game_result_icon'] = [];

	for(let x = 0; x < gamePivot.pivot_game_result.length; x++) {
		let frame = gamePivot.pivot_game_result[x][0];
		let size = gamePivot.pivot_game_result[x][1];
		data = new PIXI.Texture(_game_result_icon , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		gameSheet['_game_result_icon'].push(data);	
	}	

	_game_result_icon_1 = new PIXI.AnimatedSprite(gameSheet['_game_result_icon']);
	_game_result_icon_1.x = _game_result.x + 50;
	_game_result_icon_1.y = _game_result.y + 96;
	_game_result_icon_1.gotoAndStop(0); // Right LEFT

	_game_result_icon_1_name = new PIXI.Text('ODD',{fontFamily : 'Arial', fontSize: 16, fontWeight: 300, fill : 0xffffff, align : 'center'});
	_game_result_icon_1_name.x = _game_result_icon_1.x + 50;
	_game_result_icon_1_name.y = _game_result_icon_1.y + 8;

	_game_result_icon_2 = new PIXI.AnimatedSprite(gameSheet['_game_result_icon']);
	_game_result_icon_2.x = _game_result.x + 50;
	_game_result_icon_2.y = _game_result.y + 212;
	_game_result_icon_2.gotoAndStop(1); // ODD EVEN

	_game_result_icon_2_name = new PIXI.Text('ODD',{fontFamily : 'Arial', fontSize: 16, fontWeight: 300, fill : 0xffffff, align : 'center'});
	_game_result_icon_2_name.x = _game_result_icon_1.x + 50;
	_game_result_icon_2_name.y = _game_result_icon_1.y + 123;



	_game_result_icon_3 = new PIXI.AnimatedSprite(gameSheet['_game_result_icon']);
	_game_result_icon_3.x = _game_result.x + 50;
	_game_result_icon_3.y = _game_result.y + 270;
	_game_result_icon_3.gotoAndStop(2);

	_game_result_line_text = new PIXI.Text('4 LINES',{fontFamily : 'Arial', fontSize: 16, fontWeight: 600, fill : 0xffffff, align : 'center'});
	_game_result_line_text.y = 260;
	_game_result_line_text.x = _game_result_icon_3.x;

	_game_result_line_text_total = new PIXI.Text('4 LINES',{fontFamily : 'Arial', fontSize: 16, fontWeight: 600, fill : 0xffffff, align : 'center'});;

	_game_result_line_text_total.y = _game_result_line_text.y + 118;
	_game_result_line_text_total.x = _game_result_line_text.x + 50;






	let title_1 = new PIXI.Text('출발',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let title_2 = new PIXI.Text('라인',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let title_3 = new PIXI.Text('결과',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let title_4 = new PIXI.Text('조합',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});

	title_1.y = 176;
	title_2.y = title_1.y + 59;
	title_3.y = title_2.y + 59;
	title_4.y = title_3.y + 59;
	title_1.x = title_2.x = title_3.x = title_4.x = background.x - 20;


	result_container.addChild(_game_result,resultRound,_game_result_icon_1,_game_result_icon_2,_game_result_icon_3,title_1,title_2,title_3,title_4,_game_result_line_text , _game_result_line_text_total,_game_result_icon_1_name,_game_result_icon_2_name);
	result_container.alpha = 0;

	let _game_graph = PIXI.Sprite.from('assets/images/bet/graph_body.png');
	let _game_graph_blue = PIXI.Sprite.from('assets/images/bet/graph_blue01.png');
	let _game_graph_red = PIXI.Sprite.from('assets/images/bet/graph_red01.png');
	let _game_graph_blue_1 = PIXI.Sprite.from('assets/images/bet/graph_blue02.png');
	let _game_graph_red_1 = PIXI.Sprite.from('assets/images/bet/graph_red02.png');


	_game_graph.x = background.x - 75;
	_game_graph.y = background.y + 170;


	_game_graph_blue_1.width = 50;
	_game_graph_blue_1.y = _game_graph.y + 35;
	_game_graph_blue_1.x = _game_graph.x - 49;
	_game_graph_blue.x = _game_graph_blue_1.x - 0;
	_game_graph_blue.scale.x = -1;
	_game_graph_blue.y = _game_graph_blue_1.y;


	_game_graph_red_1.x = _game_graph.x + 150;
	_game_graph_red_1.width = 50;
	_game_graph_red_1.y = _game_graph.y + 35;

	_game_graph_red.x = _game_graph_red_1.x + 50;
	_game_graph_red.y =  _game_graph.y + 35;
	

	let bluePercent = new PIXI.Text('50%',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let redPercent = new PIXI.Text('50%',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});

	redPercent.x = _game_graph.x + 108;
	redPercent.y = _game_graph.y + 35;

	bluePercent.x = _game_graph.x + 20;
	bluePercent.y = _game_graph.y + 35;

	let graphRound = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	graphRound.width = 110;
	graphRound.x = _game_graph.x + 22;
	graphRound.y = _game_graph.y + 6;

	let graph_container = new PIXI.Container();

	graph_container.addChild(_game_graph_blue,_game_graph_red,_game_graph_blue_1,_game_graph_red_1,_game_graph,bluePercent,redPercent,graphRound);

	let ladder_left  = PIXI.Sprite.from(loader.resources['ladder_vertical'].url);

	ladder_left.x = background.x / 2.20;
	ladder_left.y = background.y / 2.05;
	ladder_left.height = background.height - 320;

	let ladder_right = PIXI.Sprite.from(loader.resources['ladder_vertical'].url);

	ladder_right.x =  background.width / 1.375;
	ladder_right.y =  ladder_left.y;
	ladder_right.height = background.height - 320;


	let threeLines = [
		{'line' : (ladder_right.height - 40) * 0.33,'alpha' : 1, 'Lpos' : ladder_right.y - 18 },
		{'line' : (ladder_right.height - 40) * 0.66,'alpha' : 1, 'Lpos' : ladder_right.y - 18 },
		{'line' : (ladder_right.height - 40),'alpha' : 1,'Lpos' : ladder_right.y - 18 },
		{'line' : 0,'alpha' : 0, 'Lpos' : ladder_right.y - 18 }
	];


	let fourLines = [
		{'line' : (ladder_right.height - 40) * 0.25,'alpha' : 1,  'Lpos' : ladder_right.y - 10},
		{'line' : (ladder_right.height - 40) * 0.50,'alpha' : 1,  'Lpos' : ladder_right.y - 10},
		{'line' : (ladder_right.height - 40) * 0.75,'alpha' : 1,  'Lpos' : ladder_right.y - 10},
		{'line' : (ladder_right.height - 40),'alpha' : 1,  'Lpos' : ladder_right.y - 10}
	];

	


	let ladder_h_1 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_1.x = background.x - 152;
	ladder_h_1.y = fourLines[0]['Lpos'] + fourLines[0]['line'];
	ladder_h_1.alpha = fourLines[0]['alpha'];

	let ladder_h_2 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_2.x = background.x - 152;
	ladder_h_2.y = fourLines[1]['Lpos'] + fourLines[1]['line'];
	ladder_h_2.alpha = fourLines[1]['alpha'];
	let ladder_h_3 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_3.x = background.x - 152;
	ladder_h_3.y = fourLines[2]['Lpos'] + fourLines[2]['line'];
	ladder_h_3.alpha = fourLines[2]['alpha'];
	let  ladder_h_4 = PIXI.Sprite.from(loader.resources['ladder_horizon'].url);

	ladder_h_4.x = background.x - 152;
	ladder_h_4.y = fourLines[3]['Lpos'] + fourLines[3]['line'];
	ladder_h_4.alpha = fourLines[3]['alpha'];




	let yellowLineContainer = new PIXI.Container();

	let active_line_1 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_1.width = ladder_left.width;
	active_line_1.height =  0; //fourLines[0]['line'] + 12;
	active_line_1.x = ladder_left.x;
	active_line_1.y = ladder_h_1.y;

	let active_line_2 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_2.width = ladder_left.width;
	active_line_2.height =  0; //fourLines[0]['line'] + 12;
	active_line_2.x = ladder_left.x;
	active_line_2.y = ladder_h_2.y;

	let active_line_3 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_3.width = ladder_left.width;
	active_line_3.height =  0; //fourLines[0]['line'] + 12;
	active_line_3.x = ladder_left.x;
	active_line_3.y = ladder_h_3.y;

	let active_line_4 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_4.width = ladder_left.width;
	active_line_4.height =  0; //fourLines[0]['line'] + 12;
	active_line_4.x = ladder_left.x;
	active_line_4.y = ladder_h_4.y;




	let active_line_6 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_6.width = ladder_right.width;
	active_line_6.height =  0; //fourLines[0]['line'] + 12;
	active_line_6.x = ladder_right.x;
	active_line_6.y = ladder_h_1.y;

	let active_line_7 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_7.width = ladder_right.width;
	active_line_7.height =  0; //fourLines[0]['line'] + 12;
	active_line_7.x = ladder_right.x;
	active_line_7.y = ladder_h_2.y;

	let active_line_8 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_8.width = ladder_right.width;
	active_line_8.height =  0; //fourLines[0]['line'] + 12;
	active_line_8.x = ladder_right.x;
	active_line_8.y = ladder_h_3.y;

	let active_line_9 = PIXI.Sprite.from(loader.resources['img_horizon'].url);
	active_line_9.width = ladder_right.width;
	active_line_9.height =  0; //fourLines[0]['line'] + 12;
	active_line_9.x = ladder_right.x;
	active_line_9.y = ladder_h_4.y;


	let active_vertical_1 = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	active_vertical_1.width = 0; //ladder_h_1.width;
	active_vertical_1.height =  ladder_h_1.height;
	active_vertical_1.x = ladder_h_1.x;
	active_vertical_1.y = ladder_h_1.y;


	let active_vertical_2 = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	active_vertical_2.width = 0; //ladder_h_2.width;
	active_vertical_2.height =  ladder_h_2.height;
	active_vertical_2.x = ladder_h_2.x;
	active_vertical_2.y = ladder_h_2.y;



	let active_vertical_3 = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	active_vertical_3.width = 0; //ladder_h_3.width;
	active_vertical_3.height =  ladder_h_3.height;
	active_vertical_3.x = ladder_h_3.x;
	active_vertical_3.y = ladder_h_3.y;



	let active_vertical_4 = PIXI.Sprite.from(loader.resources['img_vertical'].url);
	active_vertical_4.width = 0; //ladder_h_4.width ;
	active_vertical_4.height =  ladder_h_4.height;
	active_vertical_4.x = ladder_h_4.x + ladder_h_4.width;
	active_vertical_4.y = ladder_h_4.y;




	yellowLineContainer.addChild(active_line_1,active_line_2,active_line_3,active_line_4,active_line_6,active_line_7,active_line_8,active_line_9,active_vertical_1,active_vertical_2,active_vertical_3,active_vertical_4);

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
	_game_mark_left.animationSpeed = spriteSpeed;
	_game_mark_left.alpha = 1;
	_game_mark_left.gotoAndStop(1);


	_game_mark_right = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_right.x = background.x + 125;
	_game_mark_right.y = background.y  - 190;
	_game_mark_right.animationSpeed = spriteSpeed;
	_game_mark_right.alpha = 1;
	_game_mark_right.gotoAndStop(7);



	_game_mark_odd = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_odd.x = background.x - 190;
	_game_mark_odd.y = background.y  + 80;
	_game_mark_odd.animationSpeed = spriteSpeed;
	_game_mark_odd.alpha = 1;
	_game_mark_odd.gotoAndStop(2);



	_game_mark_even = new PIXI.AnimatedSprite(gameSheet['_game_mark']);
	_game_mark_even.x = background.x + 125;
	_game_mark_even.y = background.y  + 80;
	_game_mark_even.animationSpeed = spriteSpeed;
	_game_mark_even.gotoAndStop(8);


	let _game_ball = PIXI.Sprite.from('assets/images/basketball/images/ball.png');
	_game_ball.x = _game_mark_left.x;
	_game_ball.y = _game_mark_left.y;



	ladder_container.addChild(ladder_h_1,ladder_h_2,ladder_h_3,ladder_h_4,ladder_left,ladder_right,yellowLineContainer,_game_mark_left,_game_mark_right,_game_mark_odd,_game_mark_even,_game_ball);
	ladder_container.alpha = 0;



	gameSheet['_game_btnSounds'] = [];

	for(let x = 0; x < gamePivot.pivot_btnsounds.length; x++) {
		let frame = gamePivot.pivot_btnsounds[x][0];
		let size = gamePivot.pivot_btnsounds[x][1];
		data = new PIXI.Texture(_game_btnSounds , new PIXI.Rectangle(frame['x'],frame['y'],size['w'],size['h']));
		gameSheet['_game_btnSounds'].push(data);
		
	}	


	_game_btnSounds = new PIXI.AnimatedSprite(gameSheet['_game_btnSounds']);
	_game_btnSounds.x = background.x + 225;
	_game_btnSounds.y = background.y  + 243;
	_game_btnSounds.width = 30;
	_game_btnSounds.height = 25;
	_game_btnSounds.interactive = true;
	_game_btnSounds.buttonMode = true;
	_game_btnSounds.gotoAndStop(1);

	_game_btnSounds.on('pointerdown', function(){
		if (_game_btnSounds.currentFrame != 0) {
			_game_btnSounds.gotoAndStop(0);
			backgroundMusic.volume = 0;
		} else {
			_game_btnSounds.gotoAndStop(1);
			backgroundMusic.volume = 1;
		}
	});

	_game_btnMusic = new PIXI.AnimatedSprite(gameSheet['_game_btnSounds']);
	_game_btnMusic.x = background.x + 265;
	_game_btnMusic.y = background.y  + 240;
	_game_btnMusic.width = 30;
	_game_btnMusic.height = 25;
	_game_btnMusic.interactive = true;
	_game_btnMusic.buttonMode = true;
	_game_btnMusic.gotoAndStop(3);



	_game_btnMusic.on('pointerdown', function(){
		if (_game_btnMusic.currentFrame != 2) {
			_game_btnMusic.gotoAndStop(2);
			b5seconds.volume = 0;
			basketDribble.volume = 0;
			commonLadder.volume = 0;
			commonResult.volume = 0;
		} else {
			_game_btnMusic.gotoAndStop(3);
			b5seconds.volume = 1;
			basketDribble.volume = 1;
			commonLadder.volume = 1;
			commonResult.volume = 1;
		
		}
	});

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
	_ring_Left_sprite.animationSpeed = spriteSpeed;
	_ring_Left_sprite.gotoAndStop(0);
	_ring_Left_sprite.loop = false;
	// _ring_Left_sprite.play()



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
	_ring_Right_sprite.animationSpeed = spriteSpeed;
	_ring_Right_sprite.gotoAndStop(0);
	_ring_Right_sprite.loop = false;
	// _ring_Right_sprite.play()


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
	_ready_character_sprite.animationSpeed = spriteSpeed;
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
	_play_character_sprite.animationSpeed = spriteSpeed;

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
	_game_signal_green_sprite.animationSpeed = spriteSpeed;

	_game_signal_green_sprite.alpha = 0;
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
	_game_shoot_effect_sprite_left.animationSpeed = spriteSpeed;

	_game_shoot_effect_sprite_left.alpha = 0;
	// _game_shoot_effect_sprite_left.play();


	_game_shoot_effect_sprite_right = new PIXI.AnimatedSprite(gameSheet['_game_shoot_effect']);
	_game_shoot_effect_sprite_right.x = background.x + 150;
	_game_shoot_effect_sprite_right.y = background.y - 90;
	_game_shoot_effect_sprite_right.animationSpeed = spriteSpeed;
	_game_shoot_effect_sprite_right.alpha = 0;



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
	_game_signal_02_sprite.animationSpeed = spriteSpeed;

	_game_signal_02_sprite.alpha = 0;
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
	_game_signal_01_sprite_left.animationSpeed = spriteSpeed;
	_game_signal_01_sprite_left.alpha = 0;
	_game_signal_01_sprite_left.play();


	_game_signal_01_sprite_right = new PIXI.AnimatedSprite(gameSheet['_game_signal_01']);
	_game_signal_01_sprite_right.x = background.x + 60;
	_game_signal_01_sprite_right.y = background.y - 90;
	_game_signal_01_sprite_right.animationSpeed = spriteSpeed;
	_game_signal_01_sprite_right.alpha = 0;
	_game_signal_01_sprite_right.play();






	let secondIndicationStr = new PIXI.Text('20 초 후',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});
	let timeIndicationStr = new PIXI.Text('12월 05일 732회차 추첨을 시작합니다.',{fontFamily : 'Arial', fontSize: 14, fill : 0xffffff, align : 'center'});

	secondIndicationStr.x = _ready_character_sprite.x + 140;
	secondIndicationStr.y = _ready_character_sprite.y + 180;
	timeIndicationStr.x = secondIndicationStr.x - 90;
	timeIndicationStr.y = secondIndicationStr.y + 25;

	let time_container = new PIXI.Container();

	time_container.addChild(secondIndicationStr,timeIndicationStr);



	app.stage.addChild(_ring_Right_sprite,_ring_Left_sprite,_ready_character_sprite,_play_character_sprite,_game_signal_01_sprite_left,_game_signal_01_sprite_right,_game_signal_02_sprite,_game_signal_green_sprite,gameTitle,UTCTIME,time_container,ladder_container,_game_shoot_effect_sprite_left,_game_shoot_effect_sprite_right,graph_container,result_container,_game_btnSounds,_game_btnMusic);


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
		_game_shoot_effect_sprite_left.y = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_left.currentFrame][1]['y'] + (background.y - 285);
		_game_shoot_effect_sprite_left.x = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_left.currentFrame][1]['x'] + (background.x - 285);

		// READY Green Signal POSITION PER FRAME 1
		_game_shoot_effect_sprite_right.y = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_right.currentFrame][1]['y'] + (background.y - 285);
		_game_shoot_effect_sprite_right.x = gamePivot.pivot_shoot_effect[_game_shoot_effect_sprite_right.currentFrame][1]['x'] + (background.x + 25);


		// READY Green Signal POSITION PER FRAME 1
		_game_signal_02_sprite.y = gamePivot.pivot_signal_02[_game_signal_02_sprite.currentFrame][1]['y'] + (background.y - 250);
		_game_signal_02_sprite.x = gamePivot.pivot_signal_02[_game_signal_02_sprite.currentFrame][1]['x'] + (background.x - 135);

		// READY Green Signal POSITION PER FRAME 1
		_game_signal_01_sprite_right.y = gamePivot.pivot_signal_01[_game_signal_01_sprite_right.currentFrame][1]['y'] + (background.y - 50);
		_game_signal_01_sprite_right.x = (-gamePivot.pivot_signal_01[_game_signal_01_sprite_right.currentFrame][1]['x']) + (background.x + 450);
		_game_signal_01_sprite_right.scale.x = -1;

		// READY Green Signal POSITION PER FRAME 1
		_game_signal_01_sprite_left.y = gamePivot.pivot_signal_01[_game_signal_01_sprite_left.currentFrame][1]['y'] + (background.y - 50);
		_game_signal_01_sprite_left.x = gamePivot.pivot_signal_01[_game_signal_01_sprite_left.currentFrame][1]['x'] + (background.x - 450);
		// _game_signal_01_sprite_right.scale.x = -1;

		// UPDATING TIME OF THE GAME

		

		var targetTime = new Date(moment().add(0,'seconds').format());
		var timeZone = +9.00; //time zone value from database
		var tzDifference = timeZone * 60 + targetTime.getTimezoneOffset();
		var today = new Date(targetTime.getTime() + tzDifference * 60 * 1000);

		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		let hh = String(today.getHours()).padStart(2, '0');
		let m = today.getMinutes();
		let ss = (60 - today.getSeconds());
		if (ss == 60) {
			if (!animationIsPlaying) {
				animationIsPlaying = true;
				setTimeout(function(){
					fetch(apiRecord+'/api/get-result/limit/1').then((res)=>{
						return res.json();
					}).then((data) => {
						let nextRound = parseInt(data[0]['round']) + 1;
						game_rounds = nextRound;
						graphRound.text = nextRound+'회' + ' 배팅현황';
						resultRound.text =  data[0]['round'] + ' 회차 결과';
						_play_animation([data[0]['result_type_one'] , data[0]['result_type_two']]);

						setTimeout(function(){
							if (lastRound != data[0]['round']) {

								appendResult(data[0],'animate__animated  animate__slideInLeft');
								let len = document.getElementsByClassName("card-result").length;
								if (len > 20) {
									document.getElementsByClassName("card-result")[len - 1].remove();
								}
							}
						},5000)

					}).catch((error) => {
						alert('Your connection is to slow we need to reload the game.')
					  	location.reload();
					});

				},2000)
			}		
		}

		if (ss == 5) {
			if (!before5SecondsSound) {

				let musicL = PIXI.Loader.shared;
				before5SecondsSound = true;
				musicL.load(function(loader, resources) {
				   resources.bgMusic.sound.pause();
				    musicL.load(function(loader, resources) {
				        resources.b5seconds.sound.play();
				    });
				});
			}
		}
		if (ss < 45) {
			if (game_rounds.toString().slice(-2) == '10') {
				_ready_character_sprite.alpha = 0;
				_game_signal_green_sprite.alpha = 1;

			} 


			if (game_rounds.toString().slice(-2) == '50') {
				_ready_character_sprite.alpha = 0;
				_game_signal_green_sprite.alpha = 1;
				_game_signal_02_sprite.alpha = 1;
			}

			if (game_rounds.toString().slice(-2) == '00') {
				_ready_character_sprite.alpha = 0;
				_game_signal_green_sprite.alpha = 1;
				_game_signal_02_sprite.alpha = 1;
				_game_signal_01_sprite_right.alpha = 1;
				_game_signal_01_sprite_left.alpha = 1;

			}
		}

		if (m < 10) {
			m = '0'+m;
		}

		if (ss < 10) {
			ss = '0'+ss;
		}

		if (animationIsPlaying) {
			secondIndicationStr.text = '잠시후에 ';
		} else {
			secondIndicationStr.text = ss+' 초 후';
		}
		timeIndicationStr.text = mm+'월 '+dd+'일 ' +game_rounds+ ' 회차 추첨을 시작합니다.';
		today = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + m + ':' + String(today.getSeconds()).padStart(2, '0') + ' GMT+09:00';
		UTCTIME.text = today;
	})


	fetch(apiRecord+'/api/get-result/limit/20').then((res)=>{
		return res.json();
	}).then((data) => {
		let nextRound = parseInt(data[0]['round']) + 1;
		game_rounds = nextRound;
		graphRound.text = nextRound+'회' + ' 배팅현황';
		resultRound.text =  data[0]['round'] + ' 회차 결과';
		for (var i = data.length - 1; i >= 0; i--) {
			appendResult(data[i],'');
			lastRound = data[i]['round'];
		}


	})


		


	function appendResult(DataResult,anim) {
		let targetTime = new Date(DataResult['created_at']);
		var timeZone = +9.00; //time zone value from database
		var tzDifference = timeZone * 60 + targetTime.getTimezoneOffset();

		var korTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);

		// let korTime = new Date(today.toLocaleString('en-GB', { timeZone: 'Asia/Seoul' }));
		let month = korTime.getMonth() + 1;
		let day = String(korTime.getDate()).padStart(2, '0');
		let card = document.createElement('div');

		let imgAddr = '';

		if (DataResult['result_type_two'] == 'Even' && DataResult['result_type_three'] == '3Lines') {
			imgAddr = 'assets/images/game/result_1_1.png';
		} else if (DataResult['result_type_two'] == 'Even' && DataResult['result_type_three'] == '4Lines') {
			imgAddr = 'assets/images/game/result_2_2.png';
		} else if(DataResult['result_type_two'] == 'Odd' && DataResult['result_type_three'] == '3Lines') {
			imgAddr = 'assets/images/game/result_2_1.png';
		} else if (DataResult['result_type_two'] == 'Odd' && DataResult['result_type_three'] == '4Lines') {
			imgAddr = 'assets/images/game/result_1_2.png';
		}

		card.innerHTML = '<div class="card-result '+anim+'">'+
					'<label>'+month+'월'+day+'일 '+DataResult['round']+' 회차</label>'+
					'<img src="'+imgAddr+'">'+
					'<div class="bettingstatus">'+
						'<span class="bettingstatus1" style="width:50%;">'+
							'<img src="assets/images/game/space.gif">'+
						'</span>'+
						'<span class="bettingstatus2" style="width:50%;">'+
							'<img src="assets/images/game/bettingstatus.png">'+
						'</span>'+
					'</div>'+
				'</div>';
		document.getElementsByClassName('result-container')[0].prepend(card);




	}


	function leftLines(HLine,lineDecr,type) {

		active_line_1.y = ladder_h_1.y - lineDecr;

		ball_move_y(HLine);

		createjs.Tween.get(active_line_1,{loop : false})
		.to({height : HLine},animSpeed,createjs.Ease.linear)
		.call(function(){

			ball_move_x(ladder_h_1.width);

			createjs.Tween.get(active_vertical_1,{loop : false})
			.to({x : ladder_h_1.x})
			.to({width : ladder_h_1.width},animSpeed,createjs.Ease.linear)
			.call(function(){

				ball_move_y(HLine);

				createjs.Tween.get(active_line_6,{loop : false})
				.to({height : HLine},animSpeed,createjs.Ease.linear)
				.call(function(){

					ball_move_x(-ladder_h_1.width);

					createjs.Tween.get(active_vertical_2,{loop : false})
					.to({x : ladder_h_2.x + ladder_h_2.width})
					.to({width : ladder_h_2.width , x : ladder_h_2.x},animSpeed,createjs.Ease.linear)
					.call(function(){

						ball_move_y(HLine);

						createjs.Tween.get(active_line_2,{loop : false})
						.to({height : HLine},animSpeed,createjs.Ease.linear)
						.call(function(){

							ball_move_x(ladder_h_1.width);

							createjs.Tween.get(active_vertical_3,{loop : false})
							.to({x : ladder_h_3.x})
							.to({width : ladder_h_1.width},animSpeed,createjs.Ease.linear)
							.call(function(){


								if (type == 3) {

									// Function of moving ball
									createjs.Tween.get(_game_ball,{loop : false})
									.to({ x : _game_mark_even.x})
									.to({y : _game_mark_even.y },animSpeed)
									.call(function(){
										_game_mark_even.gotoAndStop(3);
										createjs.Tween.get(_game_ball,{loop : false})
										.to({alpha : 0 },300)
										.call(function(){
											createjs.Tween.get(result_container,{loop : false})
											.to({alpha : 1} , 500);
										})
									})
									// Function of moving ball

									
								} else {
									ball_move_y(HLine);
								}

								createjs.Tween.get(active_line_8,{loop : false})
								.to({height : HLine},animSpeed,createjs.Ease.linear)
								.call(function(){

									if (type == 4) {
										ball_move_x(-ladder_h_1.width);

										createjs.Tween.get(active_vertical_4,{loop : false})
										.to({x : ladder_h_4.x + ladder_h_4.width})
										.to({width : ladder_h_4.width , x : ladder_h_4.x},animSpeed,createjs.Ease.linear)
										.call(function(){

											// Function of moving ball
											createjs.Tween.get(_game_ball,{loop : false})
											.to({y : _game_mark_odd.y , x : _game_mark_odd.x},animSpeed)
											.call(function(){
												_game_mark_odd.gotoAndStop(5);
												createjs.Tween.get(_game_ball,{loop : false})
												.to({alpha : 0 },300)
												.call(function(){
													createjs.Tween.get(result_container,{loop : false})
													.to({alpha :1} , 500);
												})
											})
											// Function of moving ball

											createjs.Tween.get(active_line_4,{loop : false})
											.to({height : HLine},animSpeed,createjs.Ease.linear)
										})
									}

								})

							})
						})
					})
				})
			})
		})

	}

	function rightLines(HLine,lineDecr,type) {
		active_line_6.y = active_line_6.y - lineDecr;
		
		ball_move_y(HLine);

		createjs.Tween.get(active_line_6,{loop : false})
		.to({height : HLine},animSpeed,createjs.Ease.linear)
		.call(function(){

			ball_move_x(-ladder_h_1.width);

			createjs.Tween.get(active_vertical_1,{loop : false})
			.to({x : ladder_h_1.x + ladder_h_1.width})
			.to({width : ladder_h_1.width , x : ladder_h_1.x},animSpeed,createjs.Ease.linear)
			.call(function(){

				ball_move_y(HLine);

				createjs.Tween.get(active_line_1,{loop : false})
				.to({height : HLine},animSpeed,createjs.Ease.linear)
				.call(function(){

					ball_move_x(ladder_h_2.width);

					createjs.Tween.get(active_vertical_2,{loop : false})
					.to({x : ladder_h_2.x})
					.to({width : ladder_h_1.width},animSpeed,createjs.Ease.linear)
					.call(function(){

						ball_move_y(HLine);

						createjs.Tween.get(active_line_7,{loop : false})
						.to({height : HLine},animSpeed,createjs.Ease.linear)
						.call(function(){

							ball_move_x(-ladder_h_3.width);

							createjs.Tween.get(active_vertical_3,{loop : false})
							.to({x : ladder_h_1.x + ladder_h_1.width})
							.to({width : ladder_h_1.width , x : ladder_h_1.x},animSpeed,createjs.Ease.linear)
							.call(function(){

								
								if (type == 3) {

									// Function of moving ball
									createjs.Tween.get(_game_ball,{loop : false})
									.to({ x : _game_mark_odd.x})
									.to({y : _game_mark_odd.y },animSpeed)
									.call(function(){
										_game_mark_odd.gotoAndStop(5);
										createjs.Tween.get(_game_ball,{loop : false})
										.to({alpha : 0 },300)
										.call(function(){
											createjs.Tween.get(result_container,{loop : false})
											.to({alpha : 1} , 500);
										})
									})
									// Function of moving ball


								} else {
									ball_move_y(HLine);
								}

								createjs.Tween.get(active_line_3,{loop : false})
								.to({height : HLine},animSpeed,createjs.Ease.linear)
								.call(function(){

									if (type == 4) {

										ball_move_x(ladder_h_4.width);

										createjs.Tween.get(active_vertical_4,{loop : false})
										.to({x : ladder_h_4.x})
										.to({width : ladder_h_1.width},animSpeed,createjs.Ease.linear)
										.call(function(){

											// Function of moving ball
											createjs.Tween.get(_game_ball,{loop : false})
											.to({y : _game_mark_even.y , x : _game_mark_even.x },animSpeed)
											.call(function(){
												_game_mark_even.gotoAndStop(3);
												createjs.Tween.get(_game_ball,{loop : false})
												.to({alpha : 0 },300)
												.call(function(){
													createjs.Tween.get(result_container,{loop : false})
													.to({alpha :1} , 500);
												})
											})
											// Function of moving ball


											createjs.Tween.get(active_line_9,{loop : false})
											.to({height : HLine},animSpeed,createjs.Ease.linear)
										})
									}
								})
							})
						})
					})
				})
			})
		})
	}
	

	function ball_move_y(thisY) {
		// Function of moving ball
		createjs.Tween.get(_game_ball,{loop : false})
		.to({y : _game_ball.y + thisY - 9},animSpeed);
		// Function of moving ball
	}


	function ball_move_x(thisX) {
		// Function of moving ball
		createjs.Tween.get(_game_ball,{loop : false})
		.to({x : _game_ball.x + thisX},animSpeed);
		// Function of moving ball

	}

	function resetGame() {
		graph_container.alpha = 1;
		animationIsPlaying = false;
		resetLine();

		_ready_character_sprite.alpha = 1;
		time_container.alpha = 1;
		_play_character_sprite.alpha = 0;

		_ring_Left_sprite.gotoAndStop(0);
		_ring_Right_sprite.gotoAndStop(0);
		ladder_container.alpha = 0;

		_game_mark_even.gotoAndStop(8);
		_game_mark_odd.gotoAndStop(2);
		_game_mark_right.gotoAndStop(7);
		_game_mark_left.gotoAndStop(1);
		_game_ball.alpha = 1;
		result_container.alpha = 0;
	}


	function resetLine(){
		active_line_1.height = 0;

		active_line_2.height = 0;

		active_line_3.height = 0;

		active_line_4.height = 0;

		active_line_4.alpha = 0;

		active_line_6.height = 0;

		active_line_7.height = 0;

		active_line_8.height = 0;

		active_line_9.height = 0;

		active_vertical_1.width = 0;

		active_vertical_2.width = 0;

		active_vertical_3.width = 0;

		active_vertical_4.width = 0;
		active_vertical_4.alpha = 0;
	}


	function setBallStartLeft(){
		_game_mark_left.gotoAndStop(4)
		_game_ball.x = _game_mark_left.x;
		_game_ball.y = _game_mark_left.y;
	}


	function setBallStartRight(){
		_game_mark_right.gotoAndStop(6)
		_game_ball.x = _game_mark_right.x;
		_game_ball.y = _game_mark_right.y;
	}
	
	function make4Lines() {
		resetLine();
		ladder_h_1.y = fourLines[0]['Lpos'] + fourLines[0]['line'];
		ladder_h_1.alpha = fourLines[0]['alpha'];

		ladder_h_2.y = fourLines[1]['Lpos'] + fourLines[1]['line'];
		ladder_h_2.alpha = fourLines[1]['alpha'];

		ladder_h_3.y = fourLines[2]['Lpos'] + fourLines[2]['line'];
		ladder_h_3.alpha = fourLines[2]['alpha'];

		ladder_h_4.y = fourLines[3]['Lpos'] + fourLines[3]['line'];
		ladder_h_4.alpha = fourLines[3]['alpha'];

		active_line_1.y = ladder_h_1.y;

		active_line_2.y = ladder_h_2.y;

		active_line_3.y = ladder_h_3.y;

		active_line_4.y = ladder_h_4.y;
		active_line_4.alpha = ladder_h_4.alpha;

		active_line_6.y = ladder_h_1.y;

		active_line_7.y = ladder_h_2.y;

		active_line_8.y = ladder_h_3.y;

		active_line_9.y = ladder_h_4.y;

		active_vertical_1.y = ladder_h_1.y;

		active_vertical_2.y = ladder_h_2.y;

		active_vertical_3.y = ladder_h_3.y;

		active_vertical_4.y = ladder_h_4.y;
		active_vertical_4.alpha = ladder_h_4.alpha;
	}

	function make3Lines() {
		resetLine();
		ladder_h_1.y = threeLines[0]['Lpos'] + threeLines[0]['line'];
		ladder_h_1.alpha = threeLines[0]['alpha'];

		ladder_h_2.y = threeLines[1]['Lpos'] + threeLines[1]['line'];
		ladder_h_2.alpha = threeLines[1]['alpha'];

		ladder_h_3.y = threeLines[2]['Lpos'] + threeLines[2]['line'];
		ladder_h_3.alpha = threeLines[2]['alpha'];

		ladder_h_4.y = threeLines[3]['Lpos'] + threeLines[3]['line'];
		ladder_h_4.alpha = threeLines[3]['alpha'];


		active_line_1.y = ladder_h_1.y;

		active_line_2.y = ladder_h_2.y;

		active_line_3.y = ladder_h_3.y;

		active_line_4.y = ladder_h_4.y;

		active_line_6.y = ladder_h_1.y;

		active_line_7.y = ladder_h_2.y;

		active_line_8.y = ladder_h_3.y;

		active_line_9.y = ladder_h_4.y;

		active_vertical_1.y = ladder_h_1.y;

		active_vertical_2.y = ladder_h_2.y;

		active_vertical_3.y = ladder_h_3.y;

		active_vertical_4.y = ladder_h_4.y;
		active_vertical_4.alpha = ladder_h_4.alpha;
	}

	function _play_animation(result){
		animGameState = true;
		graph_container.alpha = 0;
		// Remove the ready character sprite
		_ready_character_sprite.alpha = 0;
		_game_signal_green_sprite.alpha = 0;
		_game_signal_02_sprite.alpha = 0;
		_game_signal_01_sprite_right.alpha = 0;
		_game_signal_01_sprite_left.alpha = 0;

		// REmove the time indicator
		time_container.alpha = 0;

		// Show the Character Playing
		_play_character_sprite.gotoAndStop(0);
		_play_character_sprite.alpha = 1;
		_play_character_sprite.loop = false;
		_play_character_sprite.play();
		let musicL = PIXI.Loader.shared;
		musicL.load(function(Loader, resources){
        	const basketDribbleInstance = resources.basketDribble.sound.play();
        	basketDribbleInstance.on('end' ,function() {
        		 musicL.load(function(Loader, resources){
        		 	resources.basketStartend.sound.play();
        		 	setTimeout(function(){
        		 		const commonLadderInstance = resources.commonLadder.sound.play();
        		 		setTimeout(function(){
        		 			resources.commonResult.sound.play();
        		 			commonLadderInstance.on('end' ,function() {
        		 				setTimeout(function(){
            		 				resources.bgMusic.sound.play();
            		 				before5SecondsSound  = false;
        		 				},500)
        		 			})
        		 		},500)
        		 	},500)
        		 	
        		 })
        	})
		})

		_play_character_sprite.onComplete = () => {
			setTimeout(function(){
				_play_character_sprite.alpha = 0;
			},200);
			let win = [];
			let rand = Math.floor(Math.random() * 4);

			if (result.length > 0) {
				win = [result[0],result[1]];
			} else {

				if (rand == 0) {
					win = ['left','Odd'];  // 4 Lines
				} else if (rand == 1) {
					win = ['left','Even']; // 3 Lines
				} else if (rand == 2) {
					win = ['right','Odd'];  // 3 Lines
				} else if (rand == 4) {
					win = ['right','Even']; //  4 Lines
				}
			}

			if (win[0] == 'left') { // 

				_game_result_icon_1.gotoAndStop(1);
				_game_result_icon_1_name.text = '좌측'; // LEFT
				_game_result_icon_3.gotoAndStop(1);

				_ring_Left_sprite.gotoAndStop(0);
				_ring_Left_sprite.play();

				_ring_Left_sprite.onComplete = () => {
					setBallStartLeft();
					if (win[1] == 'Odd') { // 
						make4Lines();
						leftLines(fourLines[0]['line'] + 12,50,4);

						_game_result_line_text.text = '4라인'; // 4 LINES
						_game_result_line_text_total.text = '4라인'; // 4 LINES



						_game_result_icon_2.gotoAndStop(2);
						_game_result_icon_2_name.text = 'ODD'; // ODD

					} else {

						make3Lines();
						leftLines(threeLines[0]['line'] + 13.5,67,3);
						

						_game_result_line_text.text = '3라인'; // 3 LINES 
						_game_result_line_text_total.text = '3라인'; // 3 LINES



						_game_result_icon_2.gotoAndStop(0);
						_game_result_icon_2_name.text = '짝수'; // EVEN


					}

					ladder_container.alpha = 1;
					_game_shoot_effect_sprite_left.alpha = 1;
					_game_shoot_effect_sprite_left.gotoAndStop(0);
					_game_shoot_effect_sprite_left.loop = false;
					_game_shoot_effect_sprite_left.play();
					_game_shoot_effect_sprite_left.onComplete = () => {
						_game_shoot_effect_sprite_left.alpha = 0;

					}
				}
			} else {

				_game_result_icon_1.gotoAndStop(3);
				_game_result_icon_1_name.text = '우측'; // RIGHT
				_game_result_icon_3.gotoAndStop(3);

				_ring_Right_sprite.gotoAndStop(0);
				_ring_Right_sprite.play();

				_ring_Right_sprite.onComplete = () => {
					setBallStartRight();

					if (win[1] == 'Odd') { // 

						make3Lines();
						rightLines(threeLines[0]['line'] + 13.5,67,3);


						_game_result_line_text.text = '3라인'; // 3 LINES
						_game_result_line_text_total.text = '3라인'; // 3 LINES
						_game_result_icon_2.gotoAndStop(2);



						_game_result_icon_2_name.text = '홀수'; // ODD
						// _game_result_icon_3.gotoAndStop(2);


					} else {

						make4Lines();
						rightLines(fourLines[0]['line'] + 12,50,4);
						

						_game_result_line_text.text = '4라인'; // 4 LINES
						_game_result_line_text_total.text = '4라인'; // 4 LINES
						_game_result_icon_2.gotoAndStop(0);

						_game_result_icon_2_name.text = '짝수'; // EVEN
						// _game_result_icon_3.gotoAndStop(0);

					}

				
					ladder_container.alpha = 1;
					_game_shoot_effect_sprite_right.alpha = 1;
					_game_shoot_effect_sprite_right.gotoAndStop(0);
					_game_shoot_effect_sprite_right.loop = false;
					_game_shoot_effect_sprite_right.play();
					_game_shoot_effect_sprite_right.onComplete = () => {
						_game_shoot_effect_sprite_right.alpha = 0;
						
					}
				}
			}

			setTimeout(function(){
				animGameState = false;
				resetGame();
			},10000);
			
		}


	}

	document.addEventListener("visibilitychange", function() {
	      if (!document.hidden) {
	      	console.log('sdsd')
	      	if (!animGameState) {

		        fetch(apiRecord+'/api/get-result/limit/20').then((res)=>{
		        	return res.json();
		        }).then((data) => {
		        	let nextRound = parseInt(data[0]['round']) + 1;
		        	game_rounds = nextRound;
		        	graphRound.text = nextRound+'회' + ' 배팅현황';
		        	resultRound.text =  data[0]['round'] + ' 회차 결과';
		        	for (var i = data.length - 1; i >= 0; i--) {
		        		appendResult(data[i],'');
		        		lastRound = data[i]['round'];
		        	}
		        })

	      	}
		      	backgroundMusic.volume = 1; 
		      	b5seconds.volume = 1; 
		      	basketDribble.volume = 1;
		      	commonLadder.volume = 1;
		      	commonResult .volume = 1;
	      } else {
	      	backgroundMusic.volume = 0; 
	      	b5seconds.volume = 0; 
	      	basketDribble.volume = 0;
	      	commonLadder.volume = 0;
	      	commonResult .volume = 0;
	      }
	});
	

}
