<?php

    $host = "localhost";
    $user = "root";
    $senha = "";
    $banco = "espaço_real";

    $conecta = new mysqli($host, $user, $senha, $banco);
    
    session_start();
    session_destroy();
    header('location: ../index.php');