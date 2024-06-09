<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html lang="PT-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Espaço Real - Sobre nós</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/stylepage.css">
    </head>
    <body>
        <header class="container-fluid">
          <div class="row">
            <nav class="navbar navbar-dark bg-dark fixed-top">
              <div class="container-fluid">
                <a class="navbar-brand" href="index.html"><h1 id="nome">Espaço Real - Sobre nós</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" id="navbarToggleBtn">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li class="nav-item">
                        <a class="nav-link sobre" href="cardapio.php">Cardápio</a>
                      </li>
                      <hr>
                      <li class="nav-item">
                        <a class="nav-link sobre" href="https://maps.app.goo.gl/P4Z8dn6bdNqt4k659" target="blank">Avalie-nos</a>
                      </li> 
                    </ul>  
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main class="container-fluid">
          <div class="content"></div>

          <div class="row justify-content-center">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
              <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="imgs/rest1.jpeg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="imgs/rest2.jpeg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="imgs/rest3.jpeg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="imgs/rest4.jpeg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="imgs/rest5.jpeg" class="d-block w-100" alt="...">
                  </div>
                  <div class="carousel-item">
                    <img src="imgs/rest6.jpeg" class="d-block w-100" alt="...">
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div class="col-lg-3"></div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
              <section class="section" style="margin-top: 30px;">
                <h4>Sobre nós</h4>
                <p class="descrição">
                  Localizado em uma esquina tranquila no povoado de Mato Seco, 
                  o "Espaço Real" é o lugar ideal para uma refeição em família. 
                  Durante o dia, oferecemos um ambiente acolhedor para almoços, 
                  com pratos caseiros e ingredientes frescos que lembram a tradicional cozinha goiana.
                </p>
                <p class="descrição">
                  Nos finais de semana, à noite, transformamo-nos em uma autêntica pizzaria. 
                  Com sua atmosfera descontraída e familiar, o "Espaço Real" é o lugar ideal 
                  para saborear boa comida e criar memórias especiais com aqueles que você ama.
                </p>
              </section>
            </div>

            <div class="col-lg-3"></div>
          </div>

          <div class="content"></div>

          <div class="row justify-content-center">
            <div class="col-lg-3"></div>

            <div class="col-lg-6">
              <section class="section">
                <h2>Horários</h2>
                <hr>
                <h6>Pizzaria</h6>
                <ul id="listap" class="listas listasobre">
                  <li>Sexta-feira: 18:30 às 23:00</li>
                  <li>Sábado: 18:30 às 23:00</li>
                  <li>Domingo: 18:30 às 23:00</li>
                </ul>
                <p id="timeP">Fechado!</p>
                <hr>
                <h6>Restaurante</h6>
                <ul id="listar" class="listas listasobre">
                  <li>Segunda-Feira: 11:00 às 14:00</li>
                  <li>Terça-Feira: 11:00 às 14:00</li>
                  <li>Quarta-Feira: 11:00 às 14:00</li>
                  <li>Quinta-Feira: 11:00 às 14:00</li>
                  <li>Sexta-Feira: 11:00 às 14:00</li>
                  <li>Sábado: 11:00 às 14:00</li>
                </ul>
                <p id="timeR">Fechado!</p>
              </section>
            </div>

            <div class="col-lg-3"></div>
          </div>
        </main>

        <div class="content"></div>

        <footer class="container-fluid">
          <div class="row rowfooter">
            <a id="link" href="https://www.instagram.com/espacoreal_restaurantepizzaria/" target="blank">
                <h6  class="subli"><img src="imgs/instagramlogo.png" alt="instagram" style="width: 20px;"> Espaço Real - Restaurante e Pizzaria</h6>
            </a>
            <a id="link" href="https://maps.app.goo.gl/P4Z8dn6bdNqt4k659" target="_blank">
              <h6><img src="imgs/maps.png" alt="" width="15px"> Nos Avalie pelo Google Maps Clicando aqui!</h6>
            </a>
            <h6><a id="linkport" href="https://portfolioandreycavalcante.netlify.app/" target="blank">Andrey Lopes Cavalcante Mendes</a></h6>
          </div>
        </footer>
        
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/scriptsobre.js"></script>
    </body>
</html>
