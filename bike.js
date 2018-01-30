

class Bike {
	
	constructor(game){
		this.game = game;
		this.x = (Math.random()*(game.width-100)+50)|0;
		this.y = (Math.random()*(game.height-100)+50)|0;
		this.dir = Math.random() * 2 * Math.PI;
		this.speed = 4;
	}
	
	
	update(game){
		this.dir += -(Keyboard.get("ArrowLeft") - Keyboard.get("ArrowRight"))*0.05;
		this.x += -Math.sin(this.dir) * this.speed;
		this.y += Math.cos(this.dir) * this.speed;
		if (this.x < 0  || this.x > game.width || this.y < 0 || this.y > game.height){
			game.running = false;
			alert("The cloud won");
		}
	}
	
}
