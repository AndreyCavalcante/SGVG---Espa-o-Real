<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html lang="PT-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/stylepage.css">
        
        <title>ESPAÇO REAL - GERENCAMENTO</title>
        
        <?php
            session_start();
            
            if((!isset($_SESSION['email']) === TRUE) and (!isset($_SESSION['senha']) === TRUE)){
                session_unset();
                echo "
                        <script>
                            window.location.href = 'index.php';
                        </script>
                     ";
            }
            $logado = $_SESSION['email'];
        ?>
        
    </head>
    <body>
        <header class="container-fluid">
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#"><h1 id="nome">Pizzaria Real - Gerenciamento</h1></a>
                  <div class="d-flex align-items-center flex-grow-1 botoesnav"> 
                    <button class="navbar-toggler mr-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="navbarToggleVendas" onclick="pesqVendas()">
                        Vendas
                    </button>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" id="navbarToggleBtn">
                        <img src="imgs/carrinho.png" alt="Carrinho" width="50px">
                    </button>
                  </div>
                  <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Registro</h5>
                      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body" id="offcanvas-result">
                      
                    </div>
                    <div class="offcanvas-footer" id="offcanvas-footer">
                      <hr>
                      <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 text-center">
                        <li class="nav-item">
                          <a class="nav-link sobre" href="cardapio.php">Cardápio</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link sobre" href="sobre.php">Sobre nós</a>
                        </li> 
                        <li class="nav-item justify-content-center mx-auto">
                            <a class="nav-link sobre" href="php/logout.php">Sair</a>
                        </li>  
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Vendas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body" id="offcanvas-vendas">
                    
                  </div>
                </div>
            </nav>
            <div class="modal fade text-bg-dark" id="meuModal" tabindex="-1" role="dialog" aria-labelledby="meuModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content bg-dark">
                    <div class="modal-header">
                      <h5 class="modal-title" id="meuModalLabel">Mensagem</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p id="mensagemModal"></p>
                    </div>
                  </div>
                </div>
            </div>
        </header>
        <main>
            <div class="row" style="margin-top: 130px;">
                <div class="col-lg-4 justify-content-center text-center">
                    <input class="bnt_edit botao" type="button" value="Cadastrar Produtos" id="cadastro" onclick="cadastrarProd(1)"><br>
                    <input class="bnt_edit botao" type="button" value="Cadastrar Gerenciador" id="gerente" onclick="cadastrarGeren(1)">
                </div>
                <hr class="hr">
                <div class="col-lg-4 justify-content-center text-center">
                   <input class="bnt_edit botao" type="button" value="Atualizar Produto" id="atuprod" onclick="cadastrarProd(2)"><br>
                   <input class="bnt_edit botao" type="button" value="Atualizar Gerenciador" id="atugeren" onclick="cadastrarGeren(2)">
                </div>
                <hr class="hr">
                <div class="col-lg-4 justify-content-center text-center">
                    <input class="bnt_edit botao" type="button" value="Deletar Produto" id="delprod" onclick="deleteProd()"><br>
                    <input class="bnt_edit botao" type="button" value="Deletar Gerenciador" id="delgeren" onclick="deleteGeren()">
                </div>
                <hr class="hr">
                <hr class="rh">
            </div>
            

            <div class="row justify-content-center text-center">
              <div class="col-lg-4"></div>

              <div class="col-lg-4 justify-content-center text-center">
                  <input style="margin-bottom: 10px;" class="bnt_edit botao" type="button" value="Registrar vendas" id="registro" onclick="registro()"><br>
              </div>

              <div class="col-lg-4"></div>
              <hr>
            </div>

            <div class="row justify-content-center text-center">
              <div class="col-lg-4 justify-content-center text-center">
                <form id="form16">
                  <label for="pesquisar">Relatório Anual: </label><br>
                  <select class="selects" name="anos" id="anos"></select>
                  <input type="submit" class="botao submit" value="Pesquisar">
                </form>
              </div>
              <hr class="hr">
              <div class="col-lg-4 justify-content-center text-center">
                <div id="campoData">
                  <label for="">Pesquisar vendas:</label><br>
                  <input type="button" class="botao maior" value="Pesquisar por mês" onclick="pesqData(2)">
                  <input type="button" class="botao maior" value="Pesquisar por data" onclick="pesqData(1)">
                </div>
              </div>
              <hr class="hr"> 
              <div class="col-lg-4 justify-content-center text-center" id="campoPesq">
                  <input type="button" class="botao maior" value="Pesquisar por produtos" onclick="pesquisa(1)"><br>
                  <input type="button" class="botao maior" value="Pesquisar por gerenciador" onclick="pesquisa(2)">
              </div>
            </div>

            <div class="row space">
              <hr>
            </div>

            <div class="row">
              <div class="col-lg-1"></div>

              <div class="col-lg-10" style="background-color: #343a40;">
                <h2>Resultados</h2>
                <div class="resul">
                    <section class="section" id="resul" style=" margin: 10px;">
                             
                    </section>
                  
                </div>
              </div>

              <div class="col-lg-1"></div>

            </div>

            <div class="row" style="margin-top: 10px;">
              <div class="col-lg-5"></div>
              <div class="col-lg-5"></div>
              <din class="col-lg-2">
                <input type="button" class="botao submit" value="Limpar" onclick="apagar()">
                <!--<input type="button" value="alerta" onclick="alertaTemporario('Esse é o alerta', 5000)">-->
              </din>
            </div>
            
        </main>
        
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-3.7.1.min.js"></script>
        <script src="js/scriptgeren.js"></script>
        <script src="js/scriptajax.js"></script>
    </body>
</html>