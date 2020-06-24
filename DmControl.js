//map editor is to create a map by layer with function (will do it later)
//---
//character editor is to create a character and store in cookie, cookie will stick to DM path
//
function CharaEncode(){
//everything will encode as string and decode will decide later
//old code
	//var name=String(document.getElementById("ch_name").value);
	//var clas=String(document.getElementById("ch_clas").value);
	//var level=String(document.getElementById("ch_level").value);
	//var race=String(document.getElementById("ch_race").value);
	//var alignment=String(document.getElementById("ch_ali").value);
	//var hpmax=String(document.getElementById("hpmax").value);
	//var hp=String(document.getElementById("hp").value);
	//------
	//var name="ali";
	//var clas="1";
	//var level="1";
	//var race="ass";
	//var alignment="serious";
	//var hpmax="12";
	//var hp="7";
	//compile character info
	//var chara =[name,clas,level,race,alignment,hpmax,hp];
	//var display="";
	//var i;
	//for (i=0;i<chara.length;i++){
	//	display= display+chara[i]+"<br>";
	//}
	var attributes=document.getElementsByClassName("char");
	//alert(attributes);
	var display="";
	var charaData="";
	for (var i=0;i<attributes.length;i++){
		display+=attributes[i].placeholder+attributes[i].value+"<br>";
		//store a parsed character data;
		charaData+=attributes[i].value+"|";
	}
	//display created character
	document.getElementById("ch_preview").innerHTML=display;
	//alert(charaData);
	if(attributes[0].value==""){
		alert("please enter character ID to save");
		return;
	}
	document.cookie=attributes[0].value+"="+charaData+";";
	alert("Character Created");

	
}
//map generator function creates a cookie that is arranged like this
//Line1=1111231;line2=....
var data="";
function CreateMap(){
	//inital data is a 10 letter string;data is from the input
	//data="12";
	//test,create 20x20map;
	//for(var i=0;i<400;i++){
	//	data+=0;
		
	//}
	//then data is split,getting an array of letters
	var dataSplit=data.split("");
	//some debug, display each letter by comma
	var debug1="";
	for (var i=0;i<dataSplit.length;i++){
		debug1+=dataSplit[i]+","
	}
	//debug1=debug.substr(debug.length-1,debug.length);
	//alert(debug1);
	//add content to maps
	var map=document.getElementById("map");
	map.innerHTML="";
	for (var i=0;i<dataSplit.length;i++){
		var newDiv=document.createElement("div");
		newDiv.innerHTML=dataSplit[i];
		map.appendChild(newDiv);
		if(dataSplit[i]==0){
			newDiv.style.backgroundColor="grey";
		}
		if(dataSplit[i]==1){
			newDiv.style.backgroundColor="brown";
		}
		if(dataSplit[i]==2){
			newDiv.style.backgroundColor="green";
		}
		if(dataSplit[i]==3){
			newDiv.style.backgroundColor="yellow";
		}
	}
}
//change data by line;
function Submit(){
	var lineNumber=document.getElementById("linenumber").value;
	var lineContent=document.getElementById("linecontent").value;
	alert(lineNumber+"="+lineContent);
	//if line number =1, replace 1-20,or 0-19 in the array;
	//first split the data
	var dataSplit=data.split("");
	var contentSplit=lineContent.split("");
	var lineIndex=(parseInt(lineNumber)-1)*20;
	alert(lineIndex);
	//change the right numbers
	for (var i=0;i<contentSplit.length;i++){
		//the number changed is the lineIndex+i
		dataSplit[lineIndex+i]=contentSplit[i];
	}
	//remake the data
	data="";
	for (var i=0;i<dataSplit.length;i++){
		data+=dataSplit[i];
	}
	CreateMap();
}
//new map creates 20x20map;
function NewMap(){
	data="";
	for(var i=0;i<400;i++){
		data+="0";
	}
	CreateMap();
}
//copydata means copy the whole data into... clipboard and then alert
function CopyData(){
	navigator.clipboard.writeText(data);
	alert("your map data is copied to clipboard:"+data);
}
function ImportData(){
	data=document.getElementById("import").value;
	if(data.length==400){
		CreateMap();
	}
	else{
		alert("please import a 20x20 map");
	}
	
}
function SaveData(){
	document.cookie="Map="+data+";";
	alert("map saved");
}
function GetData(){
	//standard cookie extraction
	var name="Map=";
	data=document.cookie;
	//break cookie into pieces
	var dataSplit=data.split(";")
	for (var i=0;i<dataSplit.length;i++){
		//see if the cookie contains the name
		var n=dataSplit[i].includes(name);
		if (n==true){
			//if the cookie name is found,new var replace the name= to ""
			data=dataSplit[i].replace(name,"");
			//alert(data);
		}
	}
	alert("successful");
	CreateMap();
	
}