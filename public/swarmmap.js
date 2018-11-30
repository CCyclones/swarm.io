var minimap = new Minimap();

function Minimap(){
this.x = 0;

this.render = function(ctx) {
	    //minimap
		ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
		ctx.beginPath();
		ctx.rect(this.x, 0, 264, 176);
		ctx.fill();
		 
                  for(var i = 0;i <= player.maxID;i++){
               if(player.objects[i] == undefined) continue;
        
                var obj = player.objects[i];
		ctx.fillStyle="rgba(77, 77, 255, 0.75)";
		ctx.beginPath();
		ctx.arc(this.x + 2 - obj.xxx/25 + 264,2 - obj.yyy/25 + 176,2,0,6.28);
		ctx.fill();
                }
				
				for(i2 = 0;i2<enemylist.length;i2+=1) {
					if(enemylist[i2].id == player.id)continue;
					 var obj2 = enemylist[i2].objects[0];
					 ctx.fillStyle="rgba(255, 77, 77, 0.75)";
		             ctx.beginPath();
		             ctx.arc(this.x + 2 - obj2.xxx/25 + 264,2 - obj2.yyy/25 + 176,2,0,6.28);
	                 ctx.fill();	
				}
				
		//leaderboard	   
	    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
		ctx.beginPath();
		ctx.rect(0,0,160,175);
		ctx.fill();
		
		for(i=0;i<10;i+=1) {
	     if(leaderlist[i] == undefined) continue;
		 ctx.fillStyle = "#000000";
         ctx.font="16px Georgia";
         ctx.fillText(i + 1 + "." + leaderlist[i].name + "(" + leaderlist[i].count + " tanks)",1,17 * i + 17);		 
		}		
};
	
}