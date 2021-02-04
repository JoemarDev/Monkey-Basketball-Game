let activeTable = 1;
	$('.tab-p-2').click(function(){
		$('.tab-btn').removeClass('active');
		$(this).addClass('active');
		$('.tabs-col').removeClass('active-tab');
		$('.tab-c-2').addClass('active-tab')
		$('.pattern-table').html('')
		table_one('3Lines','4Lines');
		activeTable = 2;


	})
	$('.tab-p-3').click(function(){
		$('.tab-btn').removeClass('active');
		$(this).addClass('active');
		$('.tabs-col').removeClass('active-tab');
		$('.tab-c-3').addClass('active-tab')
		$('.pattern-table').html('')
		table_one('Odd','Even');
		activeTable = 3;
	})

	$('.tab-p-1').click(function(){
		$('.tab-btn').removeClass('active');
		$(this).addClass('active');
		$('.tabs-col').removeClass('active-tab');
		$('.tab-c-1').addClass('active-tab')
		$('.pattern-table').html('')
		table_one('left','right');
		activeTable = 1;
	})

	$('.tab-p-4').click(function(){
		$('.tab-btn').removeClass('active');
		$(this).addClass('active');
		$('.tabs-col').removeClass('active-tab');
		$('.tab-c-4').addClass('active-tab')
		$('.pattern-table').html('')
		table_type('left','Lines');
		activeTable = 4;
	})

	let lastRound = 0;
	let todayData = [];

	let apiRecord = 'https://adminbet365.com';
	let tableOnProcess = false;

	var targetTime = new Date();
	var timeZone = +9.00; //time zone value from database
	var tzDifference = timeZone * 60 + targetTime.getTimezoneOffset();
	var today = new Date(targetTime.getTime() + tzDifference * 60 * 1000);

	let hour = today.getHours() * 60;
	let min = today.getMinutes();
	let roundFetch = hour + min;


<<<<<<< HEAD
	fetch(apiRecord+'/api/basketball/get-result/limit/'+roundFetch).then((res)=>{
=======
	fetch(apiRecord+'/api/get-result/limit/'+roundFetch).then((res)=>{
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
		return res.json();
	}).then((data) => {
		todayData = data;
		lastRound = data[0]['round'];
		table_one('left','right');
	})



	setInterval(function(){
		var TT = new Date();
		var TZ = +9.00; //time zone value from database
		var TD = TZ * 60 + TT.getTimezoneOffset();
		var time = new Date(TT.getTime() + TD * 60 * 1000);
		var sec = time.getSeconds();
		if (sec == 6) {

<<<<<<< HEAD
			fetch(apiRecord+'/api/basketball/get-result/limit/1').then((res)=>{
=======
			fetch(apiRecord+'/api/get-result/limit/1').then((res)=>{
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
				return res.json();
			}).then((data) => {
				if (lastRound != data[0]['round']) {
					todayData.unshift(data[0]);
					lastRound = data[0]['round'];
					$('.pattern-table').html('')
					if (activeTable  == 1) {
						table_one('left','right');
					} else if(activeTable == 2) {
						table_one('3Lines','4Lines');
					} else if(activeTable == 3) {
						table_one('Odd','Even');
					} else if (activeTable == 4) {
						table_type('left','Lines');
					}
					
				}
			})
		}
	},1000)


	function table_one(compare1,compare2) {
		if (todayData.length > 0) {
			let lastWin = null;
			let rowCount = 0;
			let red = 0;
			let blue = 0;
			let rowY = 1;
			let rowYArr = [];
			let w = 0;

			let MaxBlueY = 0;
			let MaxRedY = 0;

			let blueY = 1;
			let redY = 1;

			for(let x = todayData.length  - 1; x >= 0; x--) { // LOOP.

				if (todayData[x]['round'] != 1440) {
					let res,name1,name2;
					if (compare1 == 'left') {
						res = todayData[x]['result_type_one'];
						name1 = '좌';
						name2 = '우';
					} else if (compare1 == 'Odd') {
					 	res = todayData[x]['result_type_two'];
					 	name1 = '홀';
					 	name2 = '짝';
					} else if (compare1 == '3Lines') {
						res = todayData[x]['result_type_three'];
						name1 = '3';
						name2 = '4';
					}
					
					if (lastWin == res) {
						if (res == compare1) { 
							append_table_child(1,todayData[x]['round'],name1,name1)
							redY++
							red++;
						} else {
							append_table_child(2,todayData[x]['round'],name1,name2)
							blue++;
							blueY++;
						}
						rowY++;

					} else  {
						if (res == compare1) { 
							append_table_parent(1,todayData[x]['round'],name1,name1)
							redY++
							red++;
						} else {
							append_table_parent(2,todayData[x]['round'],name1,name2)
							blueY++;
							blue++;
						}

						if (blueY > MaxBlueY) {
							MaxBlueY = blueY;
						}


						if (redY > MaxRedY) {
							MaxRedY = redY;
						}

						blueY = 1;
						redY = 1;

						rowCount++;
						rowYArr.push(rowY);
						append_table_down_parent(rowCount);
						lastWin = res
						rowY = 1;

						w += 35;
						$('.pattern-table').css({'width' : w})
					}
				}

			} // END OF LOOP
			setTimeout(function(){
				$('#t3').html('')
				for(x = 0; x < rowYArr.length; x++) {
					if ((x + 1) < rowYArr.length) {
						append_table_down_interval(rowYArr[x + 1])
					} else {
						append_table_down_interval($('#t1 dl').last().find('dd').length)
						$('.pattern-table-wrapper').animate({scrollLeft: $('.pattern-table-wrapper').width() * 100}, 0);
					}
				}

				let Rpercent = (red / (red + blue)) * 100;
				let Bpercent = (blue / (red + blue)) * 100;
				$('.redPercent').html(Math.round(Rpercent));
				$('.bluePercent').html(Math.round(Bpercent));

				$('.total-red').html(red+'번')
				$('.total-blue').html(blue+'번')
				$('.max-red').html(MaxRedY+'연속')
				$('.max-blue').html(MaxBlueY+'연속')
			})

		}

	}

	function table_type(compare1,compare2) {
		if (todayData.length > 0) {
			let lastCompare1 = null;
			let lastCompare2 = null;

			let rowYArr = [];

			let rowCount = 0;

			let w = 0;

			let left3 = 0;
			let left4 = 0;
			let right3 = 0;
			let right4 = 0;

			let rowY = 1;

			let left3YMax = 0;
			let left4YMax = 0;
			let right3YMax = 0;
			let right4YMax = 0;

			let left3Y = 1;
			let left4Y = 1;
			let right3Y = 1;
			let right4Y = 1;


			for(let x = todayData.length  - 1; x >= 0; x--) { // LOOP.
				if (todayData[x]['round'] != 1440) {
					compare1 = todayData[x]['result_type_one'];
					compare2 = todayData[x]['result_type_three'];

					if (compare1 == lastCompare1 && compare2 == lastCompare2) {

						if (compare1 == 'right' && compare2 =='3Lines') {
<<<<<<< HEAD
							append_table_child(2,todayData[x]['round'],'홀3','홀3')
							right3++;
							left3Y++;
						} else if (compare1 == 'right' && compare2 =='4Lines') {
							append_table_child(2,todayData[x]['round'],'홀4','홀4')
							right4++;
							left4Y++;
						} else if (compare1 == 'left' && compare2 =='3Lines') {
							append_table_child(1,todayData[x]['round'],'짝3','짝3')
							left3++;
							right3Y++;
						} else if (compare1 == 'left' && compare2 =='4Lines') {
							append_table_child(1,todayData[x]['round'],'짝4','짝4')
=======
							append_table_child(2,todayData[x]['round'],'좌3','좌3')
							right3++;
							left3Y++;
						} else if (compare1 == 'right' && compare2 =='4Lines') {
							append_table_child(2,todayData[x]['round'],'좌4','좌4')
							right4++;
							left4Y++;
						} else if (compare1 == 'left' && compare2 =='3Lines') {
							append_table_child(1,todayData[x]['round'],'우3','우3')
							left3++;
							right3Y++;
						} else if (compare1 == 'left' && compare2 =='4Lines') {
							append_table_child(1,todayData[x]['round'],'우4','우4')
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
							left4++;
							right4Y++;
						}

						rowY++;

					} else {


						if (left3Y > left3YMax) {
							left3YMax = left3Y;
						}

						if (left4Y > left4YMax) {
							left4YMax = left4Y;
						}

						if (right3Y > right3YMax) {
							right3YMax = right3Y;
						}
						
						if (right4Y > right4YMax) {
							right4YMax = right4Y;
						}

						left3Y = 1;
						left4Y = 1;
						right3Y = 1;
						right4Y = 1;

						
						if (compare1 == 'right' && compare2 =='3Lines') {

<<<<<<< HEAD
							append_table_parent(2,todayData[x]['round'],'홀3','홀3')
=======
							append_table_parent(2,todayData[x]['round'],'좌3','좌3')
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
							lastCompare1 = 'right';
							lastCompare2 = '3Lines';
							right3++;
						} else if (compare1 == 'right' && compare2 =='4Lines') {

<<<<<<< HEAD
							append_table_parent(2,todayData[x]['round'],'홀4','홀4')
=======
							append_table_parent(2,todayData[x]['round'],'좌4','좌4')
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
							lastCompare1 = 'right';
							lastCompare2 = '4Lines';
							right4++;
						} else if (compare1 == 'left' && compare2 =='3Lines') {

<<<<<<< HEAD
							append_table_parent(1,todayData[x]['round'],'짝3','짝3')
=======
							append_table_parent(1,todayData[x]['round'],'우3','우3')
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
							lastCompare1 = 'left';
							lastCompare2 = '3Lines';
							left3++;
						} else if (compare1 == 'left' && compare2 =='4Lines') {

<<<<<<< HEAD
							append_table_parent(1,todayData[x]['round'],'짝4','짝4')
=======
							append_table_parent(1,todayData[x]['round'],'우4','우4')
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
							lastCompare1 = 'left';
							lastCompare2 = '3Lines';
							left4++;
						}

						w += 35;
						rowCount++;
						$('.pattern-table').css({'width' : w});

						$('.total-3left').html(left3+'번')
						$('.total-3right').html(right3+'번')
						$('.total-4left').html(left4+'번')
						$('.total-4right')	.html(right4+'번')

						let L3 = (100 / (left3 + right3 + left4 + right4)) * left3;
						let R3 = (100 / (left3 + right3 + left4 + right4)) * right3;
						let L4 = (100 / (left3 + right3 + left4 + right4)) * left4;
						let R4 = (100 / (left3 + right3 + left4 + right4)) * right4;

						$('.L3').html(Math.round(L3));
						$('.R3').html(Math.round(R3));
						$('.L4').html(Math.round(L4));
						$('.R4').html(Math.round(R4));

						append_table_down_parent(rowCount);

						rowYArr.push(rowY);
						rowY = 1;
	
					}
				}

			} // END OF LOOP

			setTimeout(function(){
				$('#t3').html('')
				for(x = 0; x < rowYArr.length; x++) {
					if ((x + 1) < rowYArr.length) {
						append_table_down_interval(rowYArr[x + 1])
					} else {
						append_table_down_interval($('#t1 dl').last().find('dd').length)
						$('.pattern-table-wrapper').animate({scrollLeft: $('.pattern-table-wrapper').width() * 100}, 0);
					}
				}
				$('.max-3Red').html(left3YMax+'연속')
				$('.max-3Blue').html(left4YMax+'연속')
				$('.max-4Red').html(right3YMax+'연속')
				$('.max-4Blue').html(right4YMax+'연속')
				
			})


		}
	}

	document.addEventListener("visibilitychange", function() {
	      if (!document.hidden) {
	      	var TT = new Date();
	      	var TZ = +9.00; //time zone value from database
	      	var TD = TZ * 60 + TT.getTimezoneOffset();
	      	var time = new Date(TT.getTime() + TD * 60 * 1000);
	      	var sec = time.getSeconds();
	      	let missedRound = ((time.getHours() * 60) + time.getMinutes()) - todayData.length;
	      	if (missedRound > 0) {
<<<<<<< HEAD
	      		fetch(apiRecord+'/api/basketball/get-result/limit/'+missedRound).then((res)=>{
=======
	      		fetch(apiRecord+'/api/get-result/limit/'+missedRound).then((res)=>{
>>>>>>> 20a43963b7a2b8c35a01b0dc481d29024c41e905
	      			return res.json();
	      		}).then((data) => {
	      			for(let x = data.length - 1; x <= 0; x--) {
	      				todayData.unshift(data[x]);
	      			}
	      			$('.pattern-table').html('')
	      			if (activeTable  == 1) {
	      				table_one('left','right');
	      			} else if(activeTable == 2) {
	      				table_one('3Lines','4Lines');
	      			} else if(activeTable == 3) {
	      				table_one('Odd','Even');
	      			} else if (activeTable == 4) {
	      				table_type('left','Lines');
	      			}
	      		})
	      	}

	      }
	});
	      


	function append_table_parent(type,round,name1,name2) {
		if (type == 1) {
			$('#t1').append('<dl class="float-left">'+
								'<dt><span class="text-blue">'+name1+'</span></dt>'+
			  					'<dd>'+
			  						'<div class="circle-blue circle">'+round+'</div>'+
			  					'</dd>'+
							'</dl>');
		} else {
			$('#t1').append('<dl class="float-left">'+
								'<dt><span class="text-red">'+name2+'</span></dt>'+
			  					'<dd>'+
			  						'<div class="circle-red circle">'+round+'</div>'+
			  					'</dd>'+
							'</dl>');
		}
	}

	function append_table_child(type,round) {
		if (type == 1) {
			$('#t1').find('dl').last().append('<dd><div class="circle-blue circle">'+round+'</div></dd>')
		} else {
			$('#t1').find('dl').last().append('<dd><div class="circle-red circle">'+round+'</div></dd>')
		}
	}


	function append_table_down_interval(rowY) {

			$('#t3').append('<dl><dd>'+rowY+'</dd></dl>');

	}


	function append_table_down_parent(row_no) {

			$('#t2').append('<dl><dd>'+row_no+'</dd></dl>');

	}
