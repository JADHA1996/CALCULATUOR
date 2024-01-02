let resultat = "";

function clavier(chiffre) {
  resultat += chiffre;
  document.getElementById("resultat").innerHTML = resultat;
}

function calculer() {
  // Exécution de l'opération
  const operation = document.getElementById("resultat").innerHTML;
  const resultatCalcule = eval(operation);

  // Mise à jour de l'interface
  document.getElementById("resultat").innerHTML = resultatCalcule;
}

function effacer() {
  resultat = "";
  document.getElementById("resultat").innerHTML = "";
}

