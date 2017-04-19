window.addEventListener('load', init);

//initializes our program
function init(){
	//listen for keyboard events
	window.addEventListener('keypress', respondToKeypress);
	window.addEventListener('mousemove', respondToMove);
	
}
var x;
var x;

function respondToMove(e){
	x = e.screenX;
	y = e.screenY;
}

function respondToKeypress(ev){
	
	var	rainbow;
	var cupcake;
	var lion;
	var candy;
	var elephant;
	var ball;
	var star;	

	var ltr = String.fromCodePoint(ev.keyCode);//ASCII keycode

	switch(ltr.toLowerCase()){
		case 'r':
			document.getElementById("rainbow").style.background = "url('images/stamp5.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			rainbow	= document.createElement('div');
			rainbow.className = 'rainbow';
			rainbow.style.top = (y-100) + 'px';
			rainbow.style.left = (x-50) + 'px';
			document.getElementById("sketch").appendChild(rainbow);
			//trigger animation
			setTimeout(function(){
				rainbow.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				rainbow.style.transform = "scale(1) rotate(0deg)";
			},3100);	
			break;

		case 'l':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			lion = document.createElement('div');
			lion.className = 'lion';
			lion.style.top = (y-100) + 'px';
			lion.style.left = (x-50) + 'px';
			document.getElementById("sketch").appendChild(lion);
			//trigger animation
			setTimeout(function(){
				lion.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				lion.style.transform = "scale(1) rotate(0deg)";
			},3100);
			break;

		case 'c':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			candy = document.createElement('div');
			candy.className = 'candy';
			candy.style.top = (y - 100) + 'px';
			candy.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(candy);
			//trigger animation
			setTimeout(function(){
				candy.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				candy.style.transform = "scale(1) rotate(0deg)";
			},3100);
				break;

		case 'e':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			elephant = document.createElement('div');
			elephant.className = 'elephant';
			elephant.style.top = (y - 100) + 'px';
			elephant.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(elephant);
			//trigger animation
			setTimeout(function(){
				elephant.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				elephant.style.transform = "scale(1) rotate(0deg)";
			},3100);
			break;

		case 'k':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			cupcake = document.createElement('div');
			cupcake.className = 'cupcake';
			cupcake.style.top = (y - 100) + 'px';
			cupcake.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(cupcake);
			//trigger animation
			setTimeout(function(){
				cupcake.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				cupcake.style.transform = "scale(1) rotate(0deg)";
			},3100);
			break;

		case 'b':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2_w.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			ball = document.createElement('div');
			ball.className = 'ball';
			ball.style.top = (y - 100) + 'px';
			ball.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(ball);
			//trigger animation
			setTimeout(function(){
				ball.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				ball.style.transform = "scale(1) rotate(0deg)";
			},3100);
			break;

		case 's':
			document.getElementById("rainbow").style.background = "url('images/stamp5_w.png') no-repeat";
			document.getElementById("rainbow").style.backgroundSize = "cover";
			document.getElementById("cupcake").style.background = "url('images/stamp1_w.png') no-repeat";
			document.getElementById("cupcake").style.backgroundSize = "cover";
			document.getElementById("star").style.background = "url('images/stamp2.png') no-repeat";
			document.getElementById("star").style.backgroundSize = "cover";
			document.getElementById("ball").style.background = "url('images/stamp3_w.png') no-repeat";
			document.getElementById("ball").style.backgroundSize = "cover";
			document.getElementById("lion").style.background = "url('images/stamp4_w.png') no-repeat";
			document.getElementById("lion").style.backgroundSize = "cover";
			document.getElementById("candy").style.background = "url('images/stamp6_w.png') no-repeat";
			document.getElementById("candy").style.backgroundSize = "cover";
			document.getElementById("elephant").style.background = "url('images/stamp7_w.png') no-repeat";
			document.getElementById("elephant").style.backgroundSize = "cover";

			star = document.createElement('div');
			star.className = 'star';
			star.style.top = (y - 100) + 'px';
			star.style.left = (x - 50) + 'px';
			document.getElementById("sketch").appendChild(star);
			//trigger animation
			setTimeout(function(){
				star.style.transform = "scale(3) rotate(360deg)";
			},100);
			//animate down
			setTimeout(function(){
				star.style.transform = "scale(1) rotate(0deg)";
			},3100);
			break;
	}

}


