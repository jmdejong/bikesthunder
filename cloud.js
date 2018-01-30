

class Cloud {
	
	constructor(game){
		this.game = game;
		this.x = (Math.random()*(game.width-100)+50)|0;
		this.y = (Math.random()*(game.height-100)+50)|0;
		this.speed = 2;
		this.cooldown = 0;
	}
	
	
	update(game){
		this.x += (Keyboard.get("KeyD") - Keyboard.get("KeyA")) * this.speed;
		if (this.x < 0){
			this.x = 0;
		} else if (this.x > game.width){
			this.x = game.width;
		}
		this.y += (Keyboard.get("KeyS") - Keyboard.get("KeyW")) * this.speed;
		if (this.y < 0){
			this.y = 0;
		} else if (this.y > game.height){
			this.y = game.height;
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
