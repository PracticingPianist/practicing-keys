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

  var information = document.getElementById("information-" + selectedOption.replace(/ /g, "-"));
  if (information) {
    information.style.display = "block";
  }
  var informationElements = document.querySelectorAll(".information:not(#information-" + selectedOption.replace(/ /g, "-") + ")");
  for (var i = 0; i < informationElements.length; i++) {
    informationElements[i].style.display = "none";
  }
 

}