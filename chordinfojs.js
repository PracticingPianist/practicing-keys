function toggleOption(event) {
  event.target.classList.toggle("selected");
  options = [];
  selectedOptions = document.querySelectorAll(".option.selected");
  for (var i = 0; i < selectedOptions.length; i++) {
    options.push(selectedOptions[i].innerHTML);
	
  }
  
  document.getElementById("options").value = JSON.stringify(options);

}


function displayText() {
  var options = JSON.parse(document.getElementById("options").value);
  if (options.length === 0) {
	window.alert("Try clicking on some scales!");
    return;
  }
  
  if (typeof randomIndex === 'number') {
	  oldIndex = randomIndex;
	  randomIndex = Math.floor(Math.random() * options.length);
	  while (oldIndex === randomIndex) {
		  randomIndex = Math.floor(Math.random() * options.length);
	  }
	  selectedOption = options[randomIndex];
	  
  } else {
	  randomIndex = Math.floor(Math.random() * options.length);
	  oldIndex = randomIndex;
	  selectedOption = options[randomIndex];
  }
  
  document.getElementById("text").innerHTML = selectedOption;

  information = document.getElementById("information-" + selectedOption.replace(/ /g, "-"));
  if (information) {
    information.style.display = "block";
  }
  
  var informationElements = document.querySelectorAll(".information:not(#information-" + selectedOption.replace(/ /g, "-") + ")");
  for (var i = 0; i < informationElements.length; i++) {
    informationElements[i].style.display = "none";
  }
}

function showWelcomeMessage() {
    alert("Few things....\nBugs will require a refresh (F5) to reload webpage.\n\nMinor keys do not function properly due to apathy.\nSelecting only one key will break the page.\nSelecting no options (not recommended) will enable all keys, otherwise select two or more keys.\nBM/CbM, F#M/GbM, and C#M/DbM scale examples have the right idea...Sorta...");
  }

  function displayHidden(){
	
	var chords = ['1354','141','13452','2452','343251','15352','24341'];
	var randomChord = Math.floor(Math.random() * chords.length);
	var chordTest = document.createElement("p");
	
	//clear old gens
	chordTest.className='createdChords';
	const findCreatedChords = document.getElementsByClassName('createdChords');
	while (findCreatedChords.length >0){
		findCreatedChords[0].remove();
	}
	
	chordTest.innerText='nothing';
	chordTest.innerText='We are using a '+chords[randomChord]+' chord progression, which is as follows:\n';
	information.appendChild(chordTest);
	
	if (information.id==="information-C-Major"){
		var firstDegree = 'C-Major';
		var secondDegree = 'D-Minor';
		var thirdDegree = 'E-Minor';
		var fourthDegree = 'F-Major';
		var fifthDegree = 'G-Major';
	}
	else if (information.id==="information-G-Major"){
		var firstDegree = 'G-Major';
		var secondDegree = 'A-Minor';
		var thirdDegree = 'B-Minor';
		var fourthDegree = 'C-Major';
		var fifthDegree = 'D-Major';
	}
	else if (information.id==="information-D-Major"){
		var firstDegree = 'D-Major';
		var secondDegree = 'E-Minor';
		var thirdDegree = 'F-Sharp-Minor';
		var fourthDegree = 'G-Major';
		var fifthDegree = 'A-Major';
	}
	else if (information.id==="information-A-Major"){
		var firstDegree = 'A-Major';
		var secondDegree = 'B-Minor';
		var thirdDegree = 'C-Sharp-Minor';
		var fourthDegree = 'D-Major';
		var fifthDegree = 'E-Major';
	}
	else if (information.id==="information-E-Major"){
		var firstDegree = 'E-Major';
		var secondDegree = 'F-Sharp-Minor';
		var thirdDegree = 'G-Sharp-Minor';
		var fourthDegree = 'A-Major';
		var fifthDegree = 'B-Major';
	}
	else if (information.id==="information-B-Major"){
		var firstDegree = 'B-Major';
		var secondDegree = 'C-Sharp-Minor';
		var thirdDegree = 'D-Sharp-Minor';
		var fourthDegree = 'E-Major';
		var fifthDegree = 'F-Sharp-Major';
	}
	else if (information.id==="information-F-Sharp-Major"){
		var firstDegree = 'F-Sharp-Major';
		var secondDegree = 'G-Sharp-Minor';
		var thirdDegree = 'A-Sharp-Minor';
		var fourthDegree = 'B-Major';
		var fifthDegree = 'C-Sharp-Major';
	}
	else if (information.id==="information-C-Sharp-Major"){
		var firstDegree = 'C-Sharp-Major';
		var secondDegree = 'D-Sharp-Minor';
		var thirdDegree = 'E-Sharp-Minor';
		var fourthDegree = 'F-Sharp-Major';
		var fifthDegree = 'G-Sharp-Major';
	}
	else if (information.id==="information-F-Major"){
		var firstDegree = 'F-Major';
		var secondDegree = 'G-Minor';
		var thirdDegree = 'A-Minor';
		var fourthDegree = 'B-Flat-Major';
		var fifthDegree = 'C-Major';
	}
	else if (information.id==="information-B-Flat-Major"){
		var firstDegree = 'B-Flat-Major';
		var secondDegree = 'C-Minor';
		var thirdDegree = 'D-Minor';
		var fourthDegree = 'E-Flat-Major';
		var fifthDegree = 'F-Major';
	}
	else if (information.id==="information-E-Flat-Major"){
		var firstDegree = 'E-Flat-Major';
		var secondDegree = 'F-Minor';
		var thirdDegree = 'G-Minor';
		var fourthDegree = 'A-Flat-Major';
		var fifthDegree = 'B-Flat-Major';
	}
	else if (information.id==="information-A-Flat-Major"){
		var firstDegree = 'A-Flat-Major';
		var secondDegree = 'B-Flat-Minor';
		var thirdDegree = 'C-Minor';
		var fourthDegree = 'D-Flat-Major';
		var fifthDegree = 'E-Flat-Major';
	}
	else if (information.id==="information-D-Flat-Major"){
		var firstDegree = 'D-FlatMajor';
		var secondDegree = 'E-Flat-Minor';
		var thirdDegree = 'F-Minor';
		var fourthDegree = 'G-Flat-Major';
		var fifthDegree = 'A-Flat-Major';
	}
	else if (information.id==="information-G-Flat-Major"){
		var firstDegree = 'G-Flat-Major';
		var secondDegree = 'A-Flat-Minor';
		var thirdDegree = 'B-Flat-Minor';
		var fourthDegree = 'C-Flat-Major';
		var fifthDegree = 'D-Flat-Major';
	}
	else if (information.id==="information-C-Flat-Major"){
		var firstDegree = 'C-Flat-Major';
		var secondDegree = 'D-Flat-Minor';
		var thirdDegree = 'E-Flat-Minor';
		var fourthDegree = 'F-Flat-Major';
		var fifthDegree = 'G-Flat-Major';
	}
	
	
	
  for (var i=0; i < chords[randomChord].length; i++){
	console.log('Chord No. '+ (i+1) +' is: ');
	if (chords[randomChord][i]==='1'){
		chordTest.innerText=chordTest.innerText+ '\n Chord No. '+ (i+1) +' is: '+firstDegree +'\n';
		////chordTest.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		information.appendChild(chordTest);
	}
	else if (chords[randomChord][i]==='2'){
		chordTest.innerText=chordTest.innerText+ '\nChord No. '+ (i+1) +' is: '+secondDegree +'\n';
		
		////chordTest.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		information.appendChild(chordTest);
	}
	else if (chords[randomChord][i]==='3'){
		chordTest.innerText=chordTest.innerText+ '\nChord No. '+ (i+1) +' is: '+thirdDegree +'\n';
		
		////chordTest.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		information.appendChild(chordTest);
	}
	else if (chords[randomChord][i]==='4'){
		chordTest.innerText=chordTest.innerText+ '\nChord No. '+ (i+1) +' is: '+fourthDegree +'\n';
		
		////chordTest.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		information.appendChild(chordTest);
	}
	else if (chords[randomChord][i]==='5'){
		chordTest.innerText=chordTest.innerText+ '\nChord No. '+ (i+1) +' is: '+fifthDegree +'\n';
		
		////chordTest.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		information.appendChild(chordTest);
	}
  }
	
	//console.log("first scale degree: "+chords[randomChord][0]+", second scale degree: "+chords[randomChord][1]+", third scale degree: "+chords[randomChord][2])
	//console.log(chords[randomChord])
	      //var chordProgButton = document.getElementById('chordProgButton');
		  //chordProgText = document.createElement('p');
		  //chordProgText.innerHTML = "img src=\"./scales/cmajor.jpg\"";
		  //information.appendChild(chordProgText);
		  
		  //information.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
		  //information.appendChild(document.createElement('img')).src='./scales/cmajorchord.png';
  }
