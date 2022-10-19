<?php



//connexion à la base de données
require_once("config.php");

// requete pour lister l'ensemble des matches

$req=$con->query("select * from produit");

// tableau associative à remplir à partir de $req
$tab=[];


//parcourir le résultat de curseur
while($ligne=mysqli_fetch_assoc($req))
{
$tab[]=$ligne; // ajouter la ligne dans le tableau sous forme clé valeur

}

//retourne le résultat en format json
echo json_encode($tab);

?>