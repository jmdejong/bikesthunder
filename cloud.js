

class Cloud {
	
	constructor(game){
		this.game = game;
		this.x = (Math.random()*(game.width-100)+50)|0;
		this.y = (Math.random()*(game.height-100)+50)|0;
		this.speed = 3;
		this.cooldown = 0;
	}
	
	
	update(game){
		var dx = (Keyboard.get("KeyD") - Keyboard.get("KeyA"));
		var dy = (Keyboard.get("KeyS") - Keyboard.get("KeyW"));
		var d = Math.hypot(dx, dy);
		if (d){
			dx *= this.speed/d;
			dy *= this.speed/d;
		}
		this.x += dx;
		if (this.x < 0 || this.x > game.width){
			this.x -= dx;
		}
		this.y += dy;
		if (this.y < 0 || this.y > game.height){
			this.y -= dy
		}
		
		if (this.cooldown){
			this.cooldown--;
		} else if (Keyboard.get("Space")){
			this.thunder(game);
			this.cooldown = 60; // 2 seconds
		}
	}
	
	thunder(game){
		if (Math.hypot(this.x - game.bike.x, this.y - game.bike.y) < 100){
			game.running = false;
			alert("The cloud won");
		}
	}
	
	
	shouldDrawThunder(){
		return this.cooldown > 45;
	}
}
