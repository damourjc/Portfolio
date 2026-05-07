<?php
/**
 * Connexion à la base de données via PDO
 * Ce fichier sera inclus dans les scripts qui ont besoin de la BDD
 */

// Paramètres de connexion
define('DB_HOST', 'localhost');
define('DB_NAME', 'portfolio_db');
define('DB_USER', 'root');      // utilisateur par défaut de Laragon/XAMPP
define('DB_PASS', '');          // mot de passe vide par défaut
define('DB_CHARSET', 'utf8mb4');

/**
 * @return PDO Instance de connexion
 */
function getConnection(): PDO
{
	$dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;

	$options = [
		PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // exceptions en cas d'erreur
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // tableaux associatifs
		PDO::ATTR_EMULATE_PREPARES   => false,                   // vraies requêtes préparées
	];

	try {
		$pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
		return $pdo;
	} catch (PDOException $e) {
		// En production, ne jamais afficher le message d'erreur brut !
		error_log('Erreur BDD : ' . $e->getMessage());
		die('Connexion à la base de données impossible. Veuillez réessayer plus tard.');
	}
}
?>