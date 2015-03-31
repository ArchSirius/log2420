$(document).ready(function(){
	// Bouton English
	$("#btnEn").click(function(){
		document.getElementById("city").value = document.getElementById("ville").value
		$("#fr").hide();
		$("#en").show();
	});

	// Bouton Francais
	$("#btnFr").click(function(){
		document.getElementById("ville").value = document.getElementById("city").value
		$("#en").hide();
		$("#fr").show();
	});

	// Boutton Recherche
	$("#btnRecherche").click(function(){

		doSearch("ville");
	});

	// Boutton Search
	$("#btnSearch").click(function(){
		doSearch("city");
	});

	// Recherche d'une ville dans la liste
	function doSearch(lang) {
		var ville = document.getElementById(lang).value;
		dropPin(coords[ville].lat, coords[ville].lon);
	};

	// Listes des villes (String et Object)
	var villes = [];
	var coords;

	// Lecture du fichier .json et autocomplete
	$.getJSON( "villes.json", function( data ) {
		coords = data;
		$.each( data, function( key, val ) {
			villes.push( key );
			coords.push(data);
		});

		$('#ville').autocomplete({
			source: villes
		});
	});

	// Options par défaut de la carte
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(46.8167, -71.2167)
	};

	// Carte
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' + '&signed_in=true&callback=initialize';
	document.body.appendChild(script);


	// Affichage d'un marqueur sur la carte
	function dropPin(lat, lon) {
		var myLatlng = new google.maps.LatLng(lat, lon);
		var mapOptions = {
			zoom: 6,
			center: myLatlng
		};
		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'MARKER'
		});
	}

	//google.maps.event.addDomListener(window, 'load', initialize);

	window.onload = loadScript;

});
