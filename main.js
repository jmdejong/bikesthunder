"use strict";


function main(){
	var game = new Field();
	var renderer = new Draw(game.width, game.height);
	function update(){
		if (game.running){
			game.update();
		}
		renderer.draw(game);
	}
	function start(){
		game.running = true;
		setInterval(update, 33.3);
		setTimeout(function(){
			if (game.running){
				game.running = false;
				alert("The cyclist won!");
			}
		}, 60000);
	}
	update();
	alert("The cyclist moves with the left and right arrow and should avoid the edges and the thunder.\nThe cloud moves with WASD and can shoot thunder with the spacebar.\nThe cloud wins when the cyclist dies, the cyclist wins by staying alive for one minute");
	setTimeout(start, 2000);
}



window.addEventListener("load", main);
