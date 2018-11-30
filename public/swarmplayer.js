var player = new Player();
var walls = new Walls();
var tankdirection = Math.floor(Math.random() * 8);
var bulletcount = 0;
var speedadjust = -20;

function Player(){
this.xx = 0;
this.yy = 0;	
	
this.update = function(dt) {
if(keyLogger.keyStatus.up == true) {
		this.yy += this.stats.acc;
	}	
	
	if(keyLogger.keyStatus.down == true) {
		this.yy -= this.stats.acc;
	}	
	
	if(keyLogger.keyStatus.left == true) {
		this.xx += this.stats.acc;
	}	
	
	if(keyLogger.keyStatus.right == true) {
		this.xx -= this.stats.acc;
	  }
}	
	
this.render = function(ctx){
for(var i = 0;i < this.objects.length;i+=1){
var obj = player.objects[i];
if(obj == undefined)continue;
 //ctx.fillStyle="#4d4dff";
 //if(this.health < 6){ctx.fillStyle="#8B0000"}
 if(this.status == "onfire"){ctx.fillStyle="#FF4500"}
 if(i == -1){obj.angle = Math.atan2(mousey - obj.y,mousex - obj.x);}
       else {obj.angle = Math.atan2(mousey - obj.y + obj.yd,mousex - obj.x + obj.xd);}
                ctx.lineWidth = 24;
		ctx.beginPath();
		ctx.moveTo(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2);

		ctx.lineTo(
			obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 42 * Math.cos(obj.angle),
			obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 42 * Math.sin(obj.angle)
			);
		ctx.stroke();
                
                ctx.lineWidth = 20;
		ctx.strokeStyle="#4d4dff"; 
		ctx.beginPath();
		ctx.moveTo(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2);

		ctx.lineTo(
			obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 40 * Math.cos(obj.angle),
			obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 40 * Math.sin(obj.angle)
			);
		ctx.stroke();

	    ctx.fillStyle='rgb(' + (255 - this.health * (255/80)) + ',0,' + this.health * (255/80) + ')';
		ctx.beginPath();
		ctx.arc(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2,this.stats.size,0,6.28);
		ctx.fill();
		
		if(this.hit[0] == true) {
		ctx.beginPath();
	    ctx.globalAlpha=0.5;
		ctx.fillStyle="#000000";
		ctx.arc(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2,this.stats.size,0,6.28);
		ctx.fill();
		ctx.globalAlpha=1.0;
		}

		
		if(skinid == 4){sw=28;sh=28;sx=15;sy=14;}
		else if(skinid == 5){sw=25;sh=25;sx=13;sy=14;}
		else{sw=40;sh=40;sx=20;sy=20;}
		
		ctx.drawImage(skin,obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - sx,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 - sy,sw,sh);
        
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#000000';
                ctx.stroke();
				ctx.lineWidth = 1; 
                }
				
var objp = this.objects[0];
ctx.font = '20px Georgia';
ctx.globalAlpha=0.8;
ctx.lineWidth = 3; 
ctx.strokeStyle = '#000000';
ctx.strokeText(this.name, objp.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - 30, objp.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 - 20);	
ctx.fillStyle = '#ffffff';
ctx.fillText(this.name, objp.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - 30, objp.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 - 20);	
ctx.globalAlpha = 1;		
ctx.lineWidth = 1; 		
	};	
}

function Erender(enemyi, ctx) {  
//enemyi.existing = true;

for(var i = 0;i < enemyi.objects.length;i+=1){
var obj = enemyi.objects[i];

if(obj == undefined)continue;
 ctx.fillStyle='rgb(' + (255 - enemyi.health * (255/80)) + ',0,' + enemyi.health * (255/80) + ')';
 if(enemyi.status == "onfire"){ctx.fillStyle="#FF4500"}

                ctx.lineWidth = 24;
		ctx.beginPath();
		ctx.moveTo(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2);

		ctx.lineTo(
			obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 42 * Math.cos(obj.angle),
			obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 42 * Math.sin(obj.angle)
			);
		ctx.stroke();
                
                ctx.lineWidth = 20;
		ctx.strokeStyle="#4d4dff"; 
		ctx.beginPath();
		ctx.moveTo(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2);

		ctx.lineTo(
			obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 40 * Math.cos(obj.angle),
			obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 40 * Math.sin(obj.angle)
			);
		ctx.stroke();
 
		ctx.beginPath();
		ctx.arc(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2,enemyi.stats.size,0,6.28);
		ctx.fill();
                
                ctx.lineWidth = 2;
                  ctx.strokeStyle = '#000000';
                 ctx.stroke();
				 
		if(enemyi.hit[0] == true) {
		ctx.beginPath();
	    ctx.globalAlpha=0.5;
		ctx.fillStyle="#000000";
		ctx.arc(obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2,enemyi.stats.size,0,6.28);
		ctx.fill();
		ctx.globalAlpha=1.0;
		}		 
				 
                if(enemyi.skinid == 4){esw=28;esh=28;esx=15;esy=14; }
		        else if(enemyi.skinid == 5){esw=25;esh=25;esx=13;esy=14;}
		        else{esw=40;esh=40;esx=20;esy=20;}
				
				if(enemyi.skinid == 2){eskin=document.getElementById("skin2");}
				else if(enemyi.skinid == 3){eskin=document.getElementById("skin3");}
				else if(enemyi.skinid == 4){eskin=document.getElementById("skin4");}
				else if(enemyi.skinid == 5){eskin=document.getElementById("skin5");}
				else{eskin=document.getElementById("skin1");}
		 
		ctx.drawImage(eskin,obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - esx,obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 - esy,esw,esh);
		
                }
				
                ctx.font = '20px Georgia';
                ctx.globalAlpha=0.8;
                ctx.lineWidth = 3; 
                ctx.strokeStyle = '#000000';
                ctx.strokeText(enemyi.name, obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - 30, obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 20);	
                ctx.fillStyle = '#ffffff';
                ctx.fillText(enemyi.name, obj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 - 30, obj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 20);	
                ctx.globalAlpha = 1;		
                ctx.lineWidth = 1; 			
        				
}

function Text(message,x,y) {
                ctx.fillStyle = "#000000";
                ctx.font="italic 20px Arial";
                ctx.fillText(message,
                             x * -1 + player.objects[0].xxx + window.innerWidth/2 - 12,//characters.width,
                             y * -1 + player.objects[0].yyy + window.innerHeight/2 + 4);
	
}

function Walls(){
	this.render = function(ctx){
		if(player.xxx >= 6600 - window.innerWidth/2) {
		ctx.fillStyle="#000000"; 
		ctx.beginPath();
		ctx.rect((-6600 + window.innerWidth/2) + player.objects[0].xxx - 20, 0, 10, window.innerHeight);
		ctx.fill();
		}//left wall
		
		if(player.xxx <= window.innerWidth/2) {
		ctx.fillStyle="#000000"; 
		ctx.beginPath();
		ctx.rect((0 + window.innerWidth/2) + player.objects[0].xxx, 0, 10, window.innerHeight);
		ctx.fill();
		}//right wall
		
		if(player.yyy >= 4400 - window.innerHeight/2) {
		ctx.fillStyle="#000000"; 
		ctx.beginPath();
		ctx.rect(0, (-4400 + window.innerHeight/2) + player.objects[0].yyy - 20, window.innerWidth, 10);
		ctx.fill();
		}//top wall
		
		if(player.yyy <= window.innerHeight/2) {
		ctx.fillStyle="#000000"; 
		ctx.beginPath();
		ctx.rect(0, (0 + window.innerHeight/2) + player.objects[0].yyy, window.innerWidth, 10);//176 264 1:25
		ctx.fill();
		}//bottom wall
	};
}

function Brender(boti,ctx) {
	
        for(var bi = 0;bi <= boti.objects.length;bi+=1){
        var botobj = boti.objects[bi];
        if(botobj == undefined)continue;
        if((player.objects[0].xxx <= boti.xxx + window.innerWidth/2 || player.objects[0].xxx >= boti.xxx - window.innerWidth/2) && (player.objects[0].xxx <= boti.yyy + window.innerHeight/2 || player.objects[0].yyy >= boti.yyy - window.innerHeight/2)) {
		if(boti.health > 0) {

               ctx.fillStyle="#ff0000";
               if(boti.status == "onfire"){ctx.fillStyle="#FF4500"}
               
               ctx.beginPath();
                ctx.lineWidth=24;
		ctx.moveTo(botobj.xxx * -1 + window.innerWidth/2 + player.objects[0].xxx,botobj.yyy * -1 + window.innerHeight/2 + player.objects[0].yyy);
		ctx.lineTo(
			botobj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 42 * Math.cos(boti.angle),
			botobj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 42 * Math.sin(boti.angle)
			);
		ctx.stroke();

                ctx.strokeStyle="#ff0000";
		
                ctx.beginPath();
                ctx.lineWidth=20;
		ctx.moveTo(botobj.xxx * -1 + window.innerWidth/2 + player.objects[0].xxx,botobj.yyy * -1 + window.innerHeight/2 + player.objects[0].yyy);
		ctx.lineTo(
			botobj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2 + 40 * Math.cos(boti.angle),
			botobj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2 + 40 * Math.sin(boti.angle)
			);
		ctx.stroke();
                  ctx.lineWidth=1;
               
		ctx.beginPath();
		ctx.arc(botobj.xxx * -1 + player.objects[0].xxx + window.innerWidth/2,botobj.yyy * -1 + player.objects[0].yyy + window.innerHeight/2,boti.stats.size,0,6.28);
		ctx.fill();
                
                 ctx.lineWidth = 2;
                 ctx.strokeStyle = '#000000';
                 ctx.stroke();

                  
                ctx.fillStyle = "#000000";
                ctx.font="10px Georgia";
                ctx.fillText(boti.health,
                botobj.xxx * -1 + window.innerWidth/2 + player.objects[0].xxx - 5,
                botobj.yyy * -1 + window.innerHeight/2 + player.objects[0].yyy + 4);
           }
          }
         } 
}