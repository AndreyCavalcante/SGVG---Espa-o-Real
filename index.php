<!DOCTYPE html>
<html>
    <head lang="PT-br">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/style.css">

        <title>Espaço Real - LOGIN</title>
        
        
    </head>
    <body class="container-fluid">
        <div class="row">
            <div class="col-lg-3"></div>

            <div class="col-lg-6" id="login">
                <section class="seclogin" id="seclogin">
                    <h1>Espaço Real</h1><br>
                    <p id="msg">Entrar como:</p>
                    <a class="bnt-link" href="cardapio.php"><input type="button" class="botao" value="Cliente" id="cliente"></a><br>
                    <a class="bnt-link" href="#"><input type="button" class="botao" value="Gerenciador" onclick="carregar()" id="geren"></a>
                </section>
            </div>

            <div class="col-lg-3"></div>
        </div>


        
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/scriptindex.js"></script>
    </body>
</html>
