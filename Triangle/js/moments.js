
Object.defineProperty(PIXI.DisplayObject.prototype, 'scaleX', {
	get: function() {
		return  this.scale.x;
	},
	set: function(value) {
		this.scale.x = value;
	}
});

Object.defineProperty(PIXI.DisplayObject.prototype, 'scaleY', {
	get: function() {
		return  this.scale.y;
	},
	set: function(value) {
		this.scale.y = value;
	}
});

Object.defineProperty(PIXI.DisplayObject.prototype, 'anchorX', {
	get: function() {
		return  this.anchor.x;
	},
	set: function(value) {
		this.anchor.x = value;
	}
});

Object.defineProperty(PIXI.DisplayObject.prototype, 'anchorY', {
	get: function() {
		return  this.anchor.y;
	},
	set: function(value) {
		this.anchor.y = value;
	}
});

var momentGame;

var animationTimer;
var toRAD = Math.PI/180;
var matchVizViewConfig = {
    isWebGL: true
	}

function initBeast(){
	momentGroup = new PIXI.Container();
	stage.addChild(momentGroup);
	drawBeast();
	WebFontConfig = {
		custom: { families: ['Knockout47'],
			urls: [ 'css/styles.css']},
		active: function() {
			createGame();
		}
	  };
	  (function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
			'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
}

function hideMoments() {
	clearTimeout(animationTimer);
	momentGame.visible = false;
	if (__PE)
		__PE.reset();
}

function generateRandomNumber(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1)) + min;   
	return random;
}

var __PE; // アクティブパーティクルエンジンの参照

function drawBeast(){
	if (__PE)
		__PE.step();
}

function resizeBeast(){
	if (momentGroup){
		momentGroup.x = renderer.width/2;
		momentGroup.y = renderer.height/2;
	}
}

function passParticlesToRAF(PE) {
	__PE = PE;
}