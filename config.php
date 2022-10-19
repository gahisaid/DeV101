<?php

$con = new mysqli("localhost", "root", "", "commerce");

/* Vérification de la connexion */
if (mysqli_connect_errno()) {
    printf("Echec de la connexion: %s\n", mysqli_connect_error());
    exit();
}



?>