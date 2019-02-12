var showPanel = false;
var pCount = 0;
var rCount = 0;
var cCount = 0;
var lastClicked = 0;

function showInternship(iId) {
	// debugger;
	if (iId === "1"){
		//Currently hidden, want to show.
		if (lastClicked === 1 && pCount % 2 == 0){
			document.getElementById("panel").style.display = "none";
			
		} else{
			document.getElementById("panel").style.display = "block";
			document.getElementById("pwc").style.display = "block";
			document.getElementById("raytheon").style.display = "none";
			document.getElementById("cisac").style.display = "none";
		}
		lastClicked = 1;
		pCount++;
	}
	if (iId === "2"){
		if (lastClicked === 2 && rCount % 2 == 0){
			document.getElementById("panel").style.display = "none";
		} else{
			document.getElementById("panel").style.display = "block";
			document.getElementById("pwc").style.display = "none";
			document.getElementById("raytheon").style.display = "block";
			document.getElementById("cisac").style.display = "none";
		}
		lastClicked = 2;
		rCount++;
	}
	if (iId === "3"){
		if (lastClicked === 3 && cCount % 2 == 0){
			document.getElementById("panel").style.display = "none";
			
		} else{
			document.getElementById("panel").style.display = "block";
			document.getElementById("pwc").style.display = "none";
			document.getElementById("raytheon").style.display = "none";
			document.getElementById("cisac").style.display = "block";
		}
		lastClicked = 3;
		cCount++;
	}
}