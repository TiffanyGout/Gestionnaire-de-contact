/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

var nom =["Lévisse", "Nelsonne"];
var prenom =["Carole", "Mélodie"];

console.log("Bienvenue dans le gestionnaire de contact");
console.log("1.Listez les contacts ");
console.log("2.Ajoutez un contact");
console.log("0.Quitter");

function pingouin () {
var reponse = prompt("Bienvenue dans le gestionnaire de contact");

if(reponse == 1) {
    console.log("Nom : " + nom[nom.length] + "\nPrenom : " + prenom[prenom.length]);
    
    pingouin ();
}

else if(reponse == 2) {
    var ajouter = prompt("Ajoutez nom ");
    nom.push(ajouter);
    var ajouter2 = prompt("Ajoutez prenom");
    prenom.push(ajouter2);
    console.log('contact ajouté');
    pingouin();

}


else if (reponse == 0){
    return;
}
};
pingouin ();