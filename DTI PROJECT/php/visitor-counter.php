<?php
// Start the session to keep track of whether the user has already visited
session_start();

// Database credentials
$host = 'localhost';
$dbname = 'careerawaranessuserinfo';
$username = 'root'; // Replace with your DB username
$password = ''; // Replace with your DB password

try {
    // Create a PDO instance for database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Check if the user has already visited this session
    if (!isset($_SESSION['visited'])) {
        // Mark the session as visited
        $_SESSION['visited'] = true;

        // Increment the visitor count in the database
        $stmt = $pdo->prepare("UPDATE visitor_count SET count = count + 1 WHERE id = 1");
        $stmt->execute();
    }

    // Fetch the current visitor count
    $stmt = $pdo->query("SELECT count FROM visitor_count WHERE id = 1");
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $visitorCount = $row ? $row['count'] : 0;

    // Output the current visitor count
    echo $visitorCount;

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
