 //affichage du score du l'utilisateur
function afficherResultat(score,nbMotsProposer) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposer)
}

//fonction du choix
function choisirPhraseOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
        // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
        while (choix !== "mots" && choix !== "phrases") {
            choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
        }
        return choix       
}
//fonction pour lancer la boucle du jeux
function lancerBoucleDeJeux(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            score++
        }
    }
    return score
}
//fonction pour lancer le jeux
function lancerJeu() {
    let choix =choisirPhraseOuMots()
    let score = 0
    let nbMotsProposer = 0

    if (choix === 'mots') {
        lancerBoucleDeJeux(listeMots)
        nbMotsProposer = listeMots.length
    } else {
        lancerBoucleDeJeux(listePhrases)
        nbMotsProposer = listePhrases.length
    }
    afficherResultat(score,nbMotsProposer)
}
 
