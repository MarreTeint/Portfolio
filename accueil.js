//Image of skills
function skills(e){
	switch(e){
		case "all":
			
			const a = document.getElementsByClassName("software");
			for (const element of a) {
				  element.style.display = 'inline';
			}
			const b = document.getElementsByClassName("graphics");
			for (const element of b) {
				  element.style.display = 'inline';
			}
			const c = document.getElementsByClassName("web");
			for (const element of c) {
				  element.style.display = 'inline';
			}
			const d = document.getElementsByClassName("other");
			for (const element of d) {
				  element.style.display = 'inline';
			}
			document.getElementById("frontb").style.display = "none";
			document.getElementById("backb").style.display = "none";
		break;
		case "software":
			
			const f = document.getElementsByClassName("software");
			for (const element of f) {
				  element.style.display = 'inline';
			}
			const g = document.getElementsByClassName("graphics");
			for (const element of g) {
				  element.style.display = 'none';
			}
			const h = document.getElementsByClassName("web");
			for (const element of h) {
				  element.style.display = 'none';
			}
			const i = document.getElementsByClassName("other");
			for (const element of i) {
				  element.style.display = 'none';
			}
			document.getElementById("frontb").style.display = "none";
			document.getElementById("backb").style.display = "none";
			
		break;
		case "graphics":
			
			const j = document.getElementsByClassName("software");
			for (const element of j) {
				  element.style.display = 'none';
			}
			const k = document.getElementsByClassName("graphics");
			for (const element of k) {
				  element.style.display = 'inline';
			}
			const l = document.getElementsByClassName("web");
			for (const element of l) {
				  element.style.display = 'none';
			}
			const m = document.getElementsByClassName("other");
			for (const element of m) {
				  element.style.display = 'none';
			}
			document.getElementById("frontb").style.display = "none";
			document.getElementById("backb").style.display = "none";
			
		break;
		case "web":
			
			const n = document.getElementsByClassName("software");
			for (const element of n) {
				  element.style.display = 'none';
			}
			const o = document.getElementsByClassName("web");
			for (const element of o) {
				  element.style.display = 'inline';
			}
			const p = document.getElementsByClassName("graphics");
			for (const element of p) {
				  element.style.display = 'none';
			}
			const q = document.getElementsByClassName("other");
			for (const element of q) {
				  element.style.display = 'none';
			}
			document.getElementById("frontb").style.display = "inline-block";
			document.getElementById("backb").style.display = "inline-block";
			
		break;
		case "front":
			const r = document.getElementsByClassName("front");
			for (const element of r) {
				  element.style.display = 'inline';
			}
			const s = document.getElementsByClassName("back");
			for (const element of s) {
				  element.style.display = 'none';
			}
		break;
		case "back":
			const t = document.getElementsByClassName("front");
			for (const element of t) {
				  element.style.display = 'none';
			}
			const u = document.getElementsByClassName("back");
			for (const element of u) {
				  element.style.display = 'inline';
			}
		break;
		case "other":
			
			const v = document.getElementsByClassName("software");
			for (const element of v) {
				  element.style.display = 'none';
			}
			const w = document.getElementsByClassName("graphics");
			for (const element of w) {
				  element.style.display = 'none';
			}
			const x = document.getElementsByClassName("web");
			for (const element of x) {
				  element.style.display = 'none';
			}
			const y = document.getElementsByClassName("other");
			for (const element of y) {
				  element.style.display = 'inline';
			}
			document.getElementById("frontb").style.display = "none";
			document.getElementById("backb").style.display = "none";
		break;
	}

}

//Typing name
var inside = "";
var name = "Martin ZERBIB SEBIROT.<br>   I’m a Software Engineer."
var i = 0
window.onload = function (){
		window.setInterval(function(){
			if(i<name.length){
				inside = inside+name[i];
				if(inside=="Martin ZERBIB SEBIROT.<"){
					inside = inside+name[i+1];
					i++
				}

				document.getElementById("name").innerHTML=inside;
			}
			i++;
		}, 75);
		window.setInterval(function(){
			const z = document.getElementsByClassName("underscore");
			for (const e of z) {
				  if(e.style.visibility == "visible"){
				e.style.visibility = "hidden";
			}
			else{
				e.style.visibility = "visible"; 
			}
			}
			
		}, 300);
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}