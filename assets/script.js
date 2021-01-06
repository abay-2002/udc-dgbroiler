 // cara pertama

 /*
	var i = 0; 			// Start Point
	var images = [];	// Images Array
	var time = 3000;	// Time Between Switch
		 
	// Image List
	images[0] = "assets/img/chickenwelcome.jpg";
	images[1] = "assets/img/chickenwelcome2.jpg";
	images[2] = "assets/img/chicken.jpg";

	// Change Image
	function changeImg(){
		document.slide.src = images[i]/;

		// Check If Index Is Under Max
		if(i < images.length - 1){
		  // Add 1 to Index
		  i++; 
		} else { 
			// Reset Back To O
			i = 0;
		}

		// Run function every x seconds
		setTimeout("changeImg()", time);
	}

	// Run function when page loads
	window.onload=changeImg;
*/

//cara kedua
/*
	const check = document.getElementById('check');

check.addEventListener('change',()=>{
	document.body.classList.toggle('dark');
});
*?
*/
/*
var inputName = prompt("masukan nama:");
var inputLang = prompt("masukan bahasa:");
function greeting (name, language){
	if( language === "english"){
		return "good morning" + name;
	}
	else if
}
*/
var namee = prompt("masukan nama:")
var bahasaa = prompt("masukan bahasa:");

function iBahasa(){
    if(bahasaa === "english" || "English"){
        return "Good morning "+namee; 
    }
    if(bahasaa === "deutch" || "Deutch"){
        return "Guten morgen "+namee;
    }
}
var hasill = iBahasa();
alert(hasill);


















