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
	});

	$("#monBouton").click(function(){
	});
});