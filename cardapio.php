<!DOCTYPE html>
<html lang="PT-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pizzaria Real - Cardápio</title>
        
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/stylepage.css">
    </head>
    <body id="topo">
      <header class="container-fluid">
        <nav class="navbar navbar-dark bg-dark fixed-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><h1 id="nome">Pizzaria Real - Cardápio</h1></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation" id="navbarToggleBtn">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Cardápio</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#topo">Pizzas Tradicionais</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#especiais">Pizzas Especiais</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#doces">Pizzas Doces</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#bebidas">Bebidas</a>
                  </li>
                  <hr>
                  <li class="nav-item">
                    <a class="nav-link sobre" href="sobre.php">Sobre nós</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link sobre" href="https://maps.app.goo.gl/P4Z8dn6bdNqt4k659" target="blank">Avalie-nos</a>
                  </li>   
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

        <main class="container-fluid">
          <div class="content"></div>

          <div class="row justify-content-center text-center">
            <div class="msg">
              <h1 id="msg">Olá, Bom dia!</h1>
            </div>
          </div>

          <div id="tradicionais" class="row justify-content-center text-center">
            

            <div class="col-lg-3"></div>

            <div class="col-lg-6 justify-content-center text-center" id="tradicionais">
              <h4 class="titulos">Pizzas Tradicionais</h4>
              <div id="divTradicionais">
              </div>  
            </div>

            <div class="col-lg-3"></div>
          </div>

          <div id="especiais" class="content"></div>

            <div class="row justify-content-center text-center">

                <div class="col-lg-3"></div>

                <div class="col-lg-6 justify-content-center text-center">
                  <h4 class="titulos">Pizzas Especiais</h4>
                  <div id="divEspeciais">
                        
                  </div>
                </div>

                <div class="col-lg-3"></div>
            </div>

            <div id="doces" class="content"></div>

            <div class="row justify-content-center text-center">
              <div class="col-lg-3"></div>

              <div class="col-lg-6 justify-content-center text-center">
                <h4 class="titulos">Pizzas Doces</h4>
                <div id="divDoces">
                       
                  </div>
              </div>

              <div class="col lg 3"></div>
            </div>

        <div id="bebidas" class="content"></div>

          <div class="row justify-content-center text-center">
              <div class="col-lg-3"></div>

              <div class="col-lg-6 justify-content-center text-center">
                <h4 class="titulos">Bebidas</h4>

                  <section id="sectionBebidas" class="section secbeb">
                      
                  </section>
              </div>

              <div class="col-lg-3"></div>
          </div>
        </main>
        <div class="content"></div>

        <footer class="container-fluid">
            <div class="row rowfooter">
              <a id="link" href="https://www.instagram.com/espacoreal_restaurantepizzaria/" target="blank">
                <h6 ><img src="imgs/instagramlogo.png" alt="instagram" style="width: 20px;"> Epaço Real - Restaurante e Pizzaria</h6>
              </a>
              <a id="link" href="https://maps.app.goo.gl/P4Z8dn6bdNqt4k659" target="blank">
                <h6 ><img src="imgs/maps.png" alt="" width="15px"> Nos Avalie pelo Google Maps Clicando aqui!</h6>
              </a>                
              <h6>As imagens utilizadas são meramente ilustrativas</h6>
              <h6><a id="linkport" href="https://portfolioandreycavalcante.netlify.app/" target="blank">Andrey Lopes Cavalcante Mendes</a></h6>
            </div>
        </footer>
        
        <script src="js/bootstrap.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/jquery-3.7.1.min.js"></script>
        <script src="js/scriptcard.js"></script>
    </body>
</html>
