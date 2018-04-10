window.onload = function(){
    var img = document.getElementsByClassName('img')[0];
    var cvs = document.getElementsByClassName('cvs')[0];
    var newCvs = document.getElementsByClassName('newCvs')[0];
    var ctx = cvs.getContext("2d");
	var newCtx = newCvs.getContext("2d");
	
	var pos = []
    ctx.drawImage(img,0,0,500,300);
//	ctx.font = 'bold 54px consolas';
//  ctx.strokeStyle = '#DF5326';
//  ctx.strokeText('Hello', 100, 100);
//  ctx.font = 'bold 54px arial';
//  ctx.fillStyle = 'red';
//  ctx.fillText('World', 100,200);
    var imgData = ctx.getImageData(0,0,500,300).data;
   	console.log(imgData)
    for(let i=0;i<imgData.length;i+=4){
    	var r = imgData[i];
    	var g = imgData[i+1];
    	var b = imgData[i+2];
    	var a = imgData[i+3];
		var x = (i/4)%500;
    	var y = Math.floor((i/4)/500);
    	pos.push([x,y])
    	newCtx.beginPath();
    	newCtx.fillStyle='rgba('+r+','+g+','+b+','+a+')';    	
    	newCtx.fillRect(x,y,1,1);
    	newCtx.stroke();    	
    }
    console.log(pos)

}
//0=>0
//500=>1
//100=>2