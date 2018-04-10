window.onload = function(){
    var myCanvas = document.getElementsByClassName("wrap")[0];
    var playerCanvas = document.getElementsByClassName("playerWrap")[0];
    var randomMoveBtn = document.getElementsByClassName("randomMoveBtn")[0];
    var showMoveNum = document.getElementsByClassName("showMoveNum")[0];
	var addPlayerBtn = document.getElementsByClassName("addPlayerBtn")[0];
	var buyHome = document.getElementsByClassName("buyHome")[0];
	var homeMoney = document.getElementsByClassName("homeMoney")[0];
	var homePosition = document.getElementsByClassName("homePosition")[0];
	var buyBtn = document.getElementsByClassName("buyBtn")[0];
	var nobuyBtn = document.getElementsByClassName("nobuyBtn")[0];
	var playerName = document.getElementsByClassName("playerName")[0];
	var playerMoney = document.getElementsByClassName("playerMoney")[0];
	var payMoneyBox = document.getElementsByClassName("payMoneyBox")[0];
	var payPlayer = document.getElementsByClassName("payPlayer")[0];
	var payMoney = document.getElementsByClassName("payMoney")[0];
	var payBtn = document.getElementsByClassName("payBtn")[0];
	
    var ctx = myCanvas.getContext("2d");
    var playerCtx = playerCanvas.getContext("2d");
    var modelData = [];
	var playerList = [];
	var moveFlag = true;
	var nowPlayer ="";
	
    initialMap()
    
    function initialMap(){
    	myCanvas.width=document.body.offsetWidth;
    	myCanvas.height=document.body.offsetHeight;
    	playerCanvas.width=document.body.offsetWidth;
    	playerCanvas.height=document.body.offsetHeight;
    	getData();    	
    }    
    
    function getData(){
    	var xhr = new XMLHttpRequest(); 
		xhr.open('get','./data.json',true);
     	xhr.onreadystatechange= function() { 
           	if(xhr.readyState == 4) {  
           		if(xhr.status == 200){
           			modelData = JSON.parse(xhr.responseText).modelData;  
           			drawMap(modelData);
           			getPlayer();
           		}
           	}  
      	}  
      	xhr.send();
    }
	
	function getPlayer(){
		var player = window.localStorage.getItem("playerList");
		if(player){
			playerList = JSON.parse(player);
			drawPlayer(playerList)				
			nowPlayer = playerList[0];
			playerName.innerHTML=nowPlayer.name;
			playerMoney.innerHTML=nowPlayer.message.money;
		}else{
			alert("请创建角色")
		}
	}
	
	function drawMap(obj){
		ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
		ctx.strokeStyle ='#000';
		ctx.fillStyle = "#000";
		for(let i=0;i<obj.length||0;i++){
			switch(obj[i].modelType){
				case "topModel":
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1],50,50);
					ctx.rect(obj[i].modelPosition[0]+50,obj[i].modelPosition[1],50,50);
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1]+50,100,50);
					ctx.font="12px Verdana";
					ctx.fillText(obj[i].homeInfo.homeType,obj[i].modelPosition[0]+5,obj[i].modelPosition[1]+30,50);
					ctx.fillText(obj[i].homeInfo.homeRank,obj[i].modelPosition[0]+60,obj[i].modelPosition[1]+30,50);
					ctx.fillText(obj[i].codeNum,obj[i].modelPosition[0]+45,obj[i].modelPosition[1]+80,100);
				break;
				
				case "rightModel":
					ctx.rect(obj[i].modelPosition[0]+50,obj[i].modelPosition[1],50,50);
					ctx.rect(obj[i].modelPosition[0]+50,obj[i].modelPosition[1]+50,50,50);
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1],50,100);
					ctx.font="12px Verdana";
					ctx.fillText(obj[i].homeInfo.homeType,obj[i].modelPosition[0]+55,obj[i].modelPosition[1]+30,50);
					ctx.fillText(obj[i].homeInfo.homeRank,obj[i].modelPosition[0]+55,obj[i].modelPosition[1]+80,50);
					ctx.fillText(obj[i].codeNum,obj[i].modelPosition[0]+15,obj[i].modelPosition[1]+55,100);
				break;
				
				case "bottomModel":
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1]+50,50,50);
					ctx.rect(obj[i].modelPosition[0]+50,obj[i].modelPosition[1]+50,50,50);
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1],100,50);
					ctx.font="12px Verdana";
					ctx.fillStyle = "#000";
					ctx.fillText(obj[i].homeInfo.homeType,obj[i].modelPosition[0]+5,obj[i].modelPosition[1]+80,50);
					ctx.fillText(obj[i].homeInfo.homeRank,obj[i].modelPosition[0]+60,obj[i].modelPosition[1]+80,50);
					ctx.fillText(obj[i].codeNum,obj[i].modelPosition[0]+43,obj[i].modelPosition[1]+30,100);	
				break;
				
				case "leftModel":
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1],50,50);
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1]+50,50,50);
					ctx.rect(obj[i].modelPosition[0]+50,obj[i].modelPosition[1],50,100);
					ctx.font="12px Verdana";
					ctx.fillStyle = "#000";
					ctx.fillText(obj[i].homeInfo.homeType,obj[i].modelPosition[0]+5,obj[i].modelPosition[1]+30,50);
					ctx.fillText(obj[i].homeInfo.homeRank,obj[i].modelPosition[0]+5,obj[i].modelPosition[1]+80,50);
					ctx.fillText(obj[i].codeNum,obj[i].modelPosition[0]+65,obj[i].modelPosition[1]+55,100);	
				break;
				
				case "otherModel":
					ctx.rect(obj[i].modelPosition[0],obj[i].modelPosition[1],100,100);
					ctx.font="20px Verdana";
					ctx.fillStyle = "#000";
					if(obj[i].modelTxt.length==2){
						ctx.fillText(obj[i].modelTxt,obj[i].modelPosition[0]+30,obj[i].modelPosition[1]+60,100);
					}else{
						ctx.fillText(obj[i].modelTxt,obj[i].modelPosition[0]+10,obj[i].modelPosition[1]+60,100);
					}
					
				defalult :
				break;
			}
		}
		ctx.stroke()
	}
	
	function playerMove(player,count){
		var num = count;
		var timer = setInterval(function(){
			if(num==0){
				clearInterval(timer);
				moveFlag=!moveFlag;
				moveResult(nowPlayer)
				return false
			}
			player.playerPosition+=1;
			player.playerPosition=player.playerPosition%20;
			drawPlayer(playerList)
			num--;
		},1000)
	}	
	
	function drawPlayer(playerArr){
		playerCtx.clearRect(0,0,playerCanvas.width,playerCanvas.height)
		for(let i=0;i<playerArr.length;i++){
			playerCtx.beginPath()
			playerCtx.arc(modelData[playerArr[i].playerPosition].playerPosition[playerArr[i].number][0],modelData[playerArr[i].playerPosition].playerPosition[playerArr[i].number][1], 10, 0, Math.PI * 2); 
			playerCtx.closePath();
			playerCtx.fillStyle = modelData[playerArr[i].playerPosition].playerPosition[playerArr[i].number][2];
			playerCtx.fill();
			playerCtx.fillStyle = "#000";
			playerCtx.fillText(playerArr[i].number,modelData[playerArr[i].playerPosition].playerPosition[playerArr[i].number][0]-2,modelData[playerArr[i].playerPosition].playerPosition[playerArr[i].number][1]+5,50);	
		}
	}
	
	randomMoveBtn.addEventListener("click",function(){
		addPlayerBtn.setAttribute("disabled",true)
		if(moveFlag){
			moveFlag=!moveFlag;
			var randomNum = Math.round(Math.random()*5+1);
			playerMove(nowPlayer,randomNum);
			showMoveNum.innerHTML= randomNum;
			playerName.innerHTML=nowPlayer.name;
			playerMoney.innerHTML=nowPlayer.message.money;
		}
	})
	
	function moveResult(player){
		if(modelData[player.playerPosition].homeInfo.homeOwner==0){
			buyHome.classList.add("show");
			mask.classList.add("show");
			homePosition.innerHTML=player.playerPosition+1;
			homeMoney.innerHTML=modelData[player.playerPosition].homeInfo.homeMoney;
		}else{
			if(nowPlayer.message.money-modelData[nowPlayer.playerPosition].homeInfo.homeMoney*0.5<=0){
				alert("您破产了！！")
			}else{
				nowPlayer.message.money-=modelData[nowPlayer.playerPosition].homeInfo.homeMoney*0.5;
				playerList[modelData[nowPlayer.playerPosition].homeInfo.homeOwner].message.money+=modelData[nowPlayer.playerPosition].homeInfo.homeMoney*0.5
				payMoneyBox.classList.add("show");
				payPlayer.innerHTML=modelData[nowPlayer.playerPosition].homeInfo.homeOwner;
				payMoney.innerHTML=modelData[nowPlayer.playerPosition].homeInfo.homeMoney*0.5;
			}
		}
	}
	
	buyBtn.addEventListener("click",function(){
		buyHome.classList.remove("show");
		mask.classList.remove("show");
		if(nowPlayer.message.money-modelData[nowPlayer.playerPosition].homeInfo.homeMoney<=0){
			alert("金钱不足")
		}else{
			modelData[nowPlayer.playerPosition].homeInfo.homeOwner = nowPlayer.number;
			modelData[nowPlayer.playerPosition].homeInfo.homeType = nowPlayer.name;
			nowPlayer.message.money-=modelData[nowPlayer.playerPosition].homeInfo.homeMoney;
			drawMap(modelData);
		}
		nowPlayer = playerList[(nowPlayer.number+1)%playerList.length];
	});
	
	nobuyBtn.addEventListener("click",function(){
		buyHome.classList.remove("show");
		mask.classList.remove("show");
		nowPlayer = playerList[(nowPlayer.number+1)%playerList.length]
		
	})
	
	payBtn.addEventListener("click",function(){
		payMoneyBox.classList.remove("show")
	})
}	