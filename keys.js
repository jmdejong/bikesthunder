

"use strict";

class InputManager{
    
    
    constructor(){
        this.inputs = new Map();
        
        window.addEventListener("keydown", this.onkeydown.bind(this));
        window.addEventListener("keyup", this.onkeyup.bind(this));
    }
    
    onkeydown(e){
        this.setKeyValue(e, true);
    }
    onkeyup(e){
        this.setKeyValue(e, false);
    }
    
    setKeyValue(event, value){
        if (event.code){
            this.inputs.set(event.code, value);
        }
    }
    
    isDown(input){
        return this.inputs.has(input) && this.inputs.get(input);
    }
    
    get(input){
        return +this.isDown(input);
    }
}

window.Keyboard = new InputManager();
