<?php
/**
 * Traitement du formulaire de contact
 * Séance 3 : validation + insertion en base de données
 */

require_once 'db.php'; // inclure la connexion PDO

// 1. Vérifier que la requête est POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	header('Location: ../contact.html');
	exit();
}

// 2. Récupérer et nettoyer les données
$name    = trim(htmlspecialchars($_POST['name']    ?? ''));
$email   = trim(htmlspecialchars($_POST['email']   ?? ''));
$subject = trim(htmlspecialchars($_POST['subject'] ?? ''));
$message = trim(htmlspecialchars($_POST['message'] ?? ''));

// 3. Validation
$errors = [];
if (empty($name))    $errors[] = 'Nom obligatoire';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
	$errors[] = 'Email invalide';
}
if (empty($message) || strlen($message) < 10) {
	$errors[] = 'Message trop court';
}

if (!empty($errors)) {
	header('Location: ../contact.html?status=error');
	exit();
}

// 4. Insertion en base de données via requête préparée
try {
	$pdo = getConnection();

	$sql = 'INSERT INTO messages (name, email, subject, message)
	        VALUES (:name, :email, :subject, :message)';

	$stmt = $pdo->prepare($sql); // préparer la requête

	$stmt->execute([ // lier les paramètres et exécuter
		':name'    => $name,
		':email'   => $email,
		':subject' => $subject,
		':message' => $message,
	]);

	header('Location: ../contact.html?status=success');
	exit();

} catch (PDOException $e) {
	error_log('Erreur insertion : ' . $e->getMessage());
	header('Location: ../contact.html?status=error');
	exit();
}
?>