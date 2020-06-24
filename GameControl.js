function DiceRoll(){
	var fin=0;
	var small=document.getElementById("value_1").value;
	var big=document.getElementById("value_100").value;
	var i;
	for (i=0;i<small;i++){
		var result=Math.floor(Math.random()*(big));
		var fin =result+fin+1;
	}
	document.getElementById("value_result").innerHTML=fin;
	if(small==1&&fin==20&&big==20){
		document.getElementById("value_result").innerHTML="20 GREAT SUCCESS";
	}
	if(small==1&&fin==1&&big==20){
		document.getElementById("value_result").innerHTML="1 GREAT FAILURE";
	}
	
	
}
function GetTime(){
	var today=new Date()
	var time="The current time is:"+today.getHours()+":"+today.getMinutes();
	document.getElementById("current_time").innerHTML=time;
	setInterval(GetTime,1*1000);
}