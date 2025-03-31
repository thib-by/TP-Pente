    function quotientPente() {
    // Récupérer les valeurs des champs
    var denivele = parseFloat(document.getElementById('denivele').value);
    var distanceParcourue = parseFloat(document.getElementById('distanceParcourue').value);

    // Vérifier si les valeurs sont valides
    if (isNaN(denivele) || isNaN(distanceParcourue) || distanceParcourue === 0) {
        alert("Veuillez entrer des valeurs valides pour le dénivelé et la distance parcourue.");
        return;
    }
    // Calculer le quotient de la pente en pourcentage
    var pente = (denivele / distanceParcourue) * 100;

    // Afficher le résultat
    alert("Pente en pourcentage : " + pente.toFixed(1) + "%");
}
    function quotientVitesse() {
    // Récupérer les valeurs des champs
    var distanceKm = parseFloat(document.getElementById('distanceKm').value);
    var distanceM = parseFloat(document.getElementById('distanceM').value);
    var heures = parseInt(document.getElementById('heures').value) || 0;
    var minutes = parseInt(document.getElementById('minutes').value) || 0;
    var secondes = parseInt(document.getElementById('secondes').value) || 0;

    // Convertir la distance en kilomètres
    var distanceTotaleKm = distanceKm + distanceM / 1000;

    // Calculer la durée totale en heures
    var dureeTotaleHeures = heures + minutes / 60 + secondes / 3600;

    // Vérifier si les valeurs sont valides
    if (isNaN(distanceTotaleKm) || isNaN(dureeTotaleHeures) || dureeTotaleHeures === 0) {
        alert("Veuillez entrer des valeurs valides pour la distance et la durée parcourue.");
        return;
    }
    // Calculer le quotient de la vitesse en Km/h
    var vitesse = distanceTotaleKm / dureeTotaleHeures;

    // Afficher le résultat
    alert("Vitesse en Km/h : " + vitesse.toFixed(1) + " Km/h");
}

    function produitDenivele() {
    // Récupérer les valeurs des champs
    var Pente = parseFloat(document.getElementById('Pente').value);
    var distanceParcourue2 = parseFloat(document.getElementById('DistanceParcourue2').value);

    // Vérifier si les valeurs sont valides
    if (isNaN(Pente) || isNaN(distanceParcourue2) || distanceParcourue2 === 0) {
        alert("Veuillez entrer des valeurs valides pour la Pente et la distance parcourue.");
        return;
    }
    // Calculer le quotient de la pente en pourcentage
    var Denivele = (Pente/100  * distanceParcourue2) ;

    // Afficher le résultat
    alert("Dénivelé en m : " + Denivele.toFixed(2) + "m");
}


