var prenom = prompt("C'est quoi ton prenom: ");
var millieu = prompt("C'est quoi ton millieu nom: ");
var dernier = prompt("C'est quoi ton dernier nom: ");
 
var nomComplet = prenom.slice(0) + " " + millieu.slice(0) + " " + dernier.slice(0);
var initiales = prenom.slice(0, 1) + "." + millieu.slice(0, 1) + "." + dernier.slice(0, 1);
var nomUtilisateur = prenom.slice(0, 1) + millieu.slice(0, 1) + dernier.slice(0);
 
console.log("Votre nom complet est: " + nomComplet);
console.log("Vous initiales sont: " + initiales);
console.log("Votre nom d'utilisateur est: " + nomUtilisateur.toLowerCase())
