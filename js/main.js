(() => {

console.log("JavaScript is linked up");

	var button = document.getElementById("rylee");
	button.addEventListener('click', function() {
	  if (button.getAttribute("data-text-swap") == button.innerHTML) {
	    button.innerHTML = button.getAttribute("data-text-original");
	  } else {
	    button.setAttribute("data-text-original", button.innerHTML);
	    button.innerHTML = button.getAttribute("data-text-swap");
	  }
	}, false);

})();