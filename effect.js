$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
			$('#b88').animate({top:240, left: vw+300},500);
			$('#b99').animate({top:240, left: vw+350},500);
		});

	$('#turn_on').click(function(){
		$('#Upqy1buf_female_39_cartoon24').addClass('t3p7AQcy_female_-2_cartoon1-glow-yellow');
		$('#t3p7AQcy_female_-2_cartoon13').addClass('t3p7AQcy_female_-2_cartoon1-glow-red');
		$('#Upqy1buf_female_39_cartoon23').addClass('t3p7AQcy_female_-2_cartoon1-glow-blue');
		$('#Upqy1buf_female_39_cartoon17').addClass('t3p7AQcy_female_-2_cartoon1-glow-green');
		$('#Upqy1buf_female_39_cartoon9').addClass('t3p7AQcy_female_-2_cartoon1-glow-pink');
		$('#Upqy1buf_female_39_cartoon24').addClass('t3p7AQcy_female_-2_cartoon1-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#Upqy1buf_female_39_cartoon24').addClass('t3p7AQcy_female_-2_cartoon1-glow-yellow-after');
		$('#t3p7AQcy_female_-2_cartoon13').addClass('t3p7AQcy_female_-2_cartoon1-glow-red-after');
		$('#Upqy1buf_female_39_cartoon23').addClass('t3p7AQcy_female_-2_cartoon1-glow-blue-after');
		$('#Upqy1buf_female_39_cartoon17').addClass('t3p7AQcy_female_-2_cartoon1-glow-green-after');
		$('#Upqy1buf_female_39_cartoon9').addClass('t3p7AQcy_female_-2_cartoon1-glow-pink-after');
		$('#Upqy1buf_female_39_cartoon24').addClass('t3p7AQcy_female_-2_cartoon1-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b9').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(2000).promise().done(function(){
			$('#light_candle').fadeIn('fast');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#8,#9').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b9').attr('id','b99')
		$('#b11').animate({top:240, left: vw-400},500);
		$('#b22').animate({top:240, left: vw-300},500);
		$('#b33').animate({top:240, left: vw-200},500);
		$('#b44').animate({top:240, left: vw-100},500);
		$('#b55').animate({top:240, left: vw-50},500);
		$('#b66').animate({top:240, left: vw+50},500);
		$('#b77').animate({top:240, left: vw+100},500);
		$('#b88').animate({top:240, left: vw+200},500);
		$('#b99').animate({top:240, left: vw+300},500);
		$('#b1010').animate({top:240, left: vw+400},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	$(document).ready(function() {
  var avatars = [
    "t3p7AQcy_female_-2_cartoon1.png",
    "t3p7AQcy_female_-2_cartoon7.png",
    "t3p7AQcy_female_-2_cartoon11.png",
    "t3p7AQcy_female_-2_cartoon13.png",
    "t3p7AQcy_female_-2_cartoon14.png",
    "t3p7AQcy_female_-2_cartoon19.png",
    "Upqy1buf_female_39_cartoon17.png",
    "Upqy1buf_female_39_cartoon23.png",
    "Upqy1buf_female_39_cartoon24.png",
    "Upqy1buf_female_39_cartoon9.png",
    "Upqy1buf_female_39_cartoon1.png"
  ];

  var avatarContainer = $(".avatar-container");

  function createAvatarElement(src) {
    return $("<img>").attr("src", src).addClass("avatar");
  }

  function animateAvatars() {
    avatarContainer.empty();

    avatars.forEach(function(avatar) {
      var avatarElement = createAvatarElement(avatar);
      avatarContainer.append(avatarElement);

      setTimeout(function() {
        avatarElement.addClass("float-up");
      }, 100);
    });
  }

  // Trigger avatar animation when button is clicked
  $("#avatars_flying").click(function() {
    animateAvatars();
  });
});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(2000).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(3000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
			}
			else{
				msgLoop(i);
			}			
		});
		}
		msgLoop(0);
	


	});
});
