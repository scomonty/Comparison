
var superArray=[];
var superArrayTwo=[];

function compare(event) {
	event.preventDefault();
	var input = document.getElementById('textTwo').value;
	var inputTwo = document.getElementById('textOne').value;


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

$(document).ready(function() {

for (var x = superArray.length - 1; x >= 0; x--) {
	$('#res').append('<li>' + superArray[x] + '</li>');
}
});



function getMatch(a, b) {
    var matches = [];
    for ( var i = 0; i < a.length; i++ ) {
        for ( var e = 0; e < b.length; e++ ) {
            if ( a[i] === b[e] ) matches.push( a[i] );
        }
    }
    return matches;
}
var results = getMatch(superArray, superArrayTwo);
}




$(document).ready(function() {
	for (var x = results.length - 1; x >= 0; x--) {
		$('#res').append('<li>' + results[x] + '</li>');
	}
});


function clearContents(a,b) {
      document.getElementById(a).value = "";
      document.getElementById(b).value = "";
}

