var a,b,c,d;

var color=["#101010","#964B00","#CC0000","#FF7F00","#FDEE00","#138808","#0047AB","#702963","#808080","#FFFFFF","#D4AF37","#C0C0C0"];

function calculateValue(){
	
	var out=document.getElementById("outDiv");

	switch(c){
		case(-2): out.innerHTML="0."+a.toString()+b.toString(); break;
		case(-1): out.innerHTML=a.toString()+"."+b.toString(); break;
		case(0): out.innerHTML=a.toString()+b.toString(); break;
		case(1): out.innerHTML=a.toString()+b.toString()+"0"; break;
		case(2): out.innerHTML=a.toString()+"."+b.toString()+"k"; break;
		case(3): out.innerHTML=a.toString()+b.toString()+"k"; break;
		case(4): out.innerHTML=a.toString()+b.toString()+"0k"; break;
		case(5): out.innerHTML=a.toString()+"."+b.toString()+"M"; break;
		case(6): out.innerHTML=a.toString()+b.toString()+"M"; break;
		case(7): out.innerHTML=a.toString()+b.toString()+"0M"; break;
		case(8): out.innerHTML=a.toString()+"."+b.toString()+"G"; break;
		case(9): out.innerHTML=a.toString()+b.toString()+"G"; break;
		}

	out.innerHTML+="Ω ±"+d+"%";
	}

function setFirstNumber(val){
	a=val;
	calculateValue();}

function setSecondNumber(val){
	b=val;
	calculateValue();}

function setMultiplier(val){
	c=val;
	calculateValue();}

function setTolerance(val){
	d=val;
	calculateValue();}

function animateBand(bandno, clrno){

    var blurredBand = document.getElementById("band"+bandno);
    var backgroundBand = document.getElementById("band"+(bandno+4));

	blurredBand.style.transition = "background 0.5s ease-out 0s";
	backgroundBand.style.transition = "background 0.5s ease-out 0s";

	blurredBand.style.background = color[clrno];
	backgroundBand.style.background = color[clrno];
	}

setFirstNumber(1);
setSecondNumber(0);
setMultiplier(2);
setTolerance(5);
document.getElementById("band1").style.backgroundColor=color[1];
document.getElementById("band2").style.backgroundColor=color[0];
document.getElementById("band3").style.backgroundColor=color[2];
document.getElementById("band4").style.backgroundColor=color[10];
document.getElementById("band5").style.backgroundColor=color[1];
document.getElementById("band6").style.backgroundColor=color[0];
document.getElementById("band7").style.backgroundColor=color[2];
document.getElementById("band8").style.backgroundColor=color[10];