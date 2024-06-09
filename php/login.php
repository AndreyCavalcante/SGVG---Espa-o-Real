<?php

session_start();

$host = "localhost";
$user = "root";
$senha_banco = "";
$banco = "espaço_real";

$conecta = new mysqli($host, $user, $senha_banco, $banco);

$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "SELECT email, senha FROM gerenciador WHERE email = '$email' AND senha = '$senha'";


$result = $conecta->query($sql);

if ($result && $result->num_rows > 0){
    $_SESSION['email'] = $email;
    $_SESSION['senha'] = $senha;
    header('Location: http://localhost/ProjetoIntegrado/gerenciamento.php');
}else{
    session_unset();
    session_destroy();
    echo "<script>
            alert('Login ou senha incorretos');
            window.location.href = 'http://localhost/ProjetoIntegrado/index.php';
          </script>";
    exit();
}

$conecta->close();
