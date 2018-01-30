"use strict";


class Field {
	
	
	constructor(){
		this.width = window.innerWidth * .95;
		this.height = window.innerHeight * .95;
		this.cloud = new Cloud(this);
		this.bike = new Bike(this);
		this.running = false;
	}
	
	update(){
		this.cloud.update(this);
		this.bike.update(this);
	}
	
}
