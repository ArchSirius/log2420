$(document).ready(function(){
	// Ecrivez ici tout le code qui doit s'éxecuter lorsque
	// la page est complètement chargée
	
	// $ est un raccourci pour jQuery
	// A l'aide de $, vous pouvez chercher n'importe quel
	// element de la page. Si celui-ci contient un identifiant
	// unique #identifiant vous permet de le retrouver d'un 
	// seul coup
	
	// La methode .click attache une fonction de rappel à tous 
	// les objets selectionnés avec $("#monBouton"), donc dans 
	// ce cas, le seul bouton sur la page, mais notez que vous
	// pouvez appliquer une fonction de rappel sur plusieurs 
	// éléments en même temps.
	$("#btnEn").click(function(){
		$("#fr").hide();
		$("#en").show();
	});

	$("#btnFr").click(function(){
		$("#en").hide();
		$("#fr").show();
	});

	$("#btnRecherche").click(function(){
		dropPin();
	});

	$("#monBouton").click(function(){
	});


				
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(46.8167, -71.2167)
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
					mapOptions);
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
					'&signed_in=true&callback=initialize';
	document.body.appendChild(script);
				
	function dropPin() {
  		var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  		var mapOptions = {
   	 		zoom: 6,
   	 		center: myLatlng
  		}
 		map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  		var marker = new google.maps.Marker({
  			position: myLatlng,
    	  	map: map,
     	 	title: 'Hello World!'
  	});
}

	//google.maps.event.addDomListener(window, 'load', initialize);
	window.onload = loadScript;



			
});