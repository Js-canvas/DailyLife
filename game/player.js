var addPlayerBtn = document.getElementsByClassName("addPlayerBtn")[0];
var creatPlayer = document.getElementsByClassName("creatPlayer")[0];
var playerNameInp = document.getElementsByClassName("playerNameInp")[0];
var submitBtn = document.getElementsByClassName("submitBtn")[0];
var cancleBtn = document.getElementsByClassName("cancleBtn")[0];
var mask = document.getElementsByClassName("mask")[0];
var playerData = window.localStorage.getItem("playerList")?JSON.parse(window.localStorage.getItem("playerList")):[];

function Player(name){
	this.name = name;
	this.playerPosition = 0;
	this.number = window.localStorage.getItem("playerList")?JSON.parse(window.localStorage.getItem("playerList")).length:0;
	this.message = {
		"homeList":[],
		"money":10000		
	}
}

addPlayerBtn.onclick = function(){
	creatPlayer.classList.add("show");
	mask.classList.add("show");
}

submitBtn.addEventListener("click",function(){
	var str = playerNameInp.value;
	if(/^[a-zA-Z0-9_\s]*$/.test(str)){
		var num = window.localStorage.getItem("playerList")?JSON.parse(window.localStorage.getItem("playerList")).length:0;
		if(num>=3){
			alert("游戏玩家已满")
		}else{
			var player = new Player(str);
			playerData.push(player);
			alert("添加成功");
			creatPlayer.classList.remove("show");
			mask.classList.remove("show");
			playerNameInp.value=""
			window.localStorage.setItem("playerList",JSON.stringify(playerData));
			window.location.reload();
		}				
	}else{
		alert("格式不符")
	}
})

cancleBtn.addEventListener("click",function(){
	playerNameInp.value=""
	creatPlayer.classList.remove("show");
	mask.classList.remove("show");
})

