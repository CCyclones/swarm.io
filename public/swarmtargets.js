var targets = new Targets();

function Targets(){
	this.render = function(ctx){
		for(i = 0;i < targetlist.length;i+=1){
			if(targetlist[i] == undefined) continue;
			
			var obj = targetlist[i];
			
			ctx.fillStyle = "#009000";
			
			ctx.beginPath();
			ctx.arc(obj.x * -1 + player.objects[0].xxx + window.innerWidth/2,obj.y * -1 + player.objects[0].yyy + window.innerHeight/2,30,0,6.28);
			ctx.fill();
		}
	};
	
}