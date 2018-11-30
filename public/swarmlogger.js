var keyLogger = new KeyLogger();
var oldlength;

function KeyLogger(){
	
	this.keyStatus = {up:false,down:false,left:false,right:false,fire:false};
	
	this.onMouseDownListener = function(e){
		keyLogger.keyStatus.fire = true;
      clicked = true;
	}
	
	this.onMouseUpListener = function(e){
		keyLogger.keyStatus.fire = false;
		clicked = true;
		}
	
	this.keyDownListener = function(e){
		var key = e.keyCode ? e.keyCode : e.which;
		switch(key){
		
		case 87://w key
		case 38://up arrow
		   if(document.getElementById("chat").style.display == "block"){docuemnt.getElementById('chat').value += "w";}
			keyLogger.keyStatus.up = true;
			clicked = true;
		break;
		case 83://s key
		case 40://down arrow
		if(document.getElementById("chat").style.display == "block"){docuemnt.getElementById('chat').value += "s";}
			keyLogger.keyStatus.down = true;
			clicked = true;
		break;
		case 65://a key
		case 37://left arrow
		if(document.getElementById("chat").style.display == "block"){docuemnt.getElementById('chat').value += "a";}
             keyLogger.keyStatus.left = true;
			 clicked = true;
		break;
		case 68://d key
		case 39://right arrow
		if(document.getElementById("chat").style.display == "block"){docuemnt.getElementById('chat').value += "d";}
		keyLogger.keyStatus.right = true;
		clicked = true;
		break;
		case 32:
		if(document.getElementById("chat").style.display == "block"){docuemnt.getElementById('chat').value += " ";}
		keyLogger.keyStatus.fire = true;//spacebar
		clicked = true;
		break;
		case 13:
		if(document.getElementById("chat").style.display == "none"){
			document.getElementById("chat").style.display = "block"; 
			document.getElementById("chat").focus();}
		else{document.getElementById("chat").style.display = "none";}
		break;

		default:
			//console.log("Key:" + key);
			return !false;
	}
	
	return !true;
	};
	
	this.keyUpListener = function(e){
		var key = e.keyCode ? e.keyCode : e.which;
		switch(key){
		
		case 87:
		case 38:
			keyLogger.keyStatus.up = false;
			clicked = true;
			break;
		case 83:
		case 40:
			keyLogger.keyStatus.down = false;
			clicked = true;
		break;
		case 65:
		case 37:
			keyLogger.keyStatus.left = false;
	    clicked = true;
		break;
		case 68:
		case 39:
			keyLogger.keyStatus.right = false;
			clicked = true;
		break;
		case 32:
			keyLogger.keyStatus.fire = false;
		clicked = true;
		break;
		default:
			//console.log("Key:" + key);
			return !false;
	 }
	return !true;
	};
	
	
	
	
}