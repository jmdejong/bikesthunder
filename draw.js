


class Draw {
	
	
	constructor(width, height){
		
		this.canvas = document.getElementById("game");
		this.ctx = this.canvas.getContext("2d");
		this.width = this.canvas.width = width;
		this.height = this.canvas.height = height;
		this.bikesprite = document.getElementById("bikesprite");
		this.cloudsprite = document.getElementById("cloudsprite");
		this.thundersprite = document.getElementById("thundersprite");
	}
	
	
	draw(game){
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.drawBike(game.bike);
		this.drawCloud(game.cloud);
	}
	
	drawBike(bike){
		this.ctx.translate(bike.x, bike.y);
		this.ctx.rotate(bike.dir + Math.PI);
		this.ctx.drawImage(this.bikesprite, -this.bikesprite.width/2, -this.bikesprite.height/2);
		this.ctx.resetTransform();
	}
	
	drawCloud(cloud){
		this.ctx.drawImage(this.cloudsprite, cloud.x - this.cloudsprite.width/2, cloud.y - this.cloudsprite.height/2);
		if (cloud.shouldDrawThunder()){
			this.ctx.drawImage(this.thundersprite, cloud.x - this.thundersprite.width/2, cloud.y - this.thundersprite.height/2);
		}
	}
	
	
}
