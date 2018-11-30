var bullets = new Bullets();
var bulletlist = [];

function Bullets(){

	this.render = function(ctx){
  		for(var i = 0;i < bulletlist.length;i+=1){
			if(bulletlist[i] == undefined) continue;
			 var obj = bulletlist[i];
                           obj.size = 5;
		           ctx.fillStyle = "#000000";
                           if(obj.type == "fire"){ctx.fillStyle="#FF4500";obj.size = 5}
			ctx.beginPath();
                    if((player.objects[0].xxx <= obj.xxx + window.innerWidth/2 || player.objects[0].xxx >= obj.xxx - window.innerWidth/2) && (player.objects[0].xxx <= obj.yyy + window.innerHeight/2 || player.objects[0].yyy >= obj.yyy - window.innerHeight/2)) { //detect if on screen
			ctx.arc(obj.xxx * -1 + window.innerWidth/2 + player.objects[0].xxx,obj.yyy * -1 + window.innerHeight/2 + player.objects[0].yyy,obj.size,0,6.28);
                        }
			ctx.fill();
		}
	};
	
}