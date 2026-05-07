<?php
/**
 * Page d'administration - liste des messages reçus
 * Note : cette page n'est pas protégée par un mot de passe (simplification pédagogique)
 */
require_once 'php/db.php';

$pdo = getConnection();

// Récupérer tous les messages, du plus récent au plus ancien
$stmt = $pdo->query('SELECT * FROM messages ORDER BY sent_at DESC');
$messages = $stmt->fetchAll(); // tableau de tous les enregistrements
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Admin - Messages reçus</title>
	<link rel="stylesheet" href="css/style.css">
	<style>
		.admin-table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
		.admin-table th, .admin-table td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e0e0e0; }
		.admin-table th { background: #1565C0; color: white; }
		.admin-table tr:hover { background: #f5f8ff; }
		.admin-wrap { max-width: 1200px; margin: 0 auto; padding: 2rem; }
	</style>
</head>
<body>
<div class="admin-wrap">
	<h1>Messages reçus <span style="font-size:1rem;color:#5A6A7A">(<?= count($messages) ?> message(s))</span></h1>

	<?php if (empty($messages)): ?>
		<p>Aucun message reçu pour l'instant.</p>
	<?php else: ?>
		<table class="admin-table">
			<thead>
				<tr>
					<th>#</th>
					<th>Nom</th>
					<th>Email</th>
					<th>Sujet</th>
					<th>Message</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				<?php foreach ($messages as $msg): ?>
				<tr>
					<td><?= $msg['id'] ?></td>
					<td><?= htmlspecialchars($msg['name']) ?></td>
					<td><a href="mailto:<?= htmlspecialchars($msg['email']) ?>"><?= htmlspecialchars($msg['email']) ?></a></td>
					<td><?= htmlspecialchars($msg['subject'] ?: '-') ?></td>
					<td><?= nl2br(htmlspecialchars($msg['message'])) ?></td>
					<td><?= date('d/m/Y H:i', strtotime($msg['sent_at'])) ?></td>
				</tr>
				<?php endforeach; ?>
			</tbody>
		</table>
	<?php endif; ?>
</div>
</body>
</html>