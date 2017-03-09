


function compare(event) {
	event.preventDefault();
	var input = document.getElementById('textTwo').value,
	inputTwo = document.getElementById('textOne').value,
	superArray=[],
	superArrayTwo=[];


	inputTwo = inputTwo.replace(/\n/g, " ");
	inputTwo = inputTwo.replace("[", "").replace("]", "");
	var newarray = inputTwo.split(' ');

	for (var i = newarray.length - 1; i >= 0; i--) {
			superArray.push(newarray[i]);
	};

/*

	for (var i = newarray.length - 1; i >= 0; i--) {
		item.innerHTML = "<li>" + newarray[i] + "</li>";
	}
	*/


	input = input.replace(/\n/g, " ");
	input = input.replace("[", "").replace("]", "");
	var n = input.split(' ');

	for (var i = n.length - 1; i >= 0; i--) {
			superArrayTwo.push(n[i]);
	}

var results = getMatch();
	


	function getMatch() {
	    var matches = [];
	    for ( var i = 0; i < superArray.length; i++ ) {
	        for ( var e = 0; e < superArrayTwo.length; e++ ) {
	            if ( superArray[i] === superArrayTwo[e] ) matches.push( superArrayTwo[e] );
	        }
	    }
	    return matches;
	}
	$(document).ready(function() {
	for (var x = results.length - 1; x >= 0; x--) {
		$('#res').append('<li>' + results[x] + '</li>');
		console.log(results.length);
	}

});
}







function clearContents(a,b,c) {
      document.getElementById(a).value = "";
      document.getElementById(b).value = "";
      document.getElementById(c).innerHTML = "";
}

