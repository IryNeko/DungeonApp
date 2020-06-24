//ok here is the plan, first, get the canvas

var data="";
//this function saves the current map to cookie so don't have to import every time
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
	//alert("successful");
	CreateMap();
	
}
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
function ImportData(){
	data=document.getElementById("import").value;
	if(data.length==400){
		CreateMap();
	}
	else{
		alert("please import a 20x20 map");
	}
	
}

	