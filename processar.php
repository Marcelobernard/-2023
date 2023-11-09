<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "siteula";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Erro na conexão com o banco de dados: " . $conn->connect_error);
    }

    $sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

    if ($conn->query($sql) === TRUE) {
        echo "Mensagem armazenada com sucesso!";
    } else {
        echo "Erro ao armazenar mensagem: " . $conn->error;
    }

    $conn->close();
}
?>