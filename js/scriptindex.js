function carregar(){
    var sec = document.getElementById("seclogin");

    var novo = `
        <h1>Espaço Real</h1><br>
        <p id="msg">Login</p>
        <form action="php/login.php" method="post">
            <div class="container-form">
                <input type="email" name="email" id="email" placeholder="Email: " required>
            </div>
            <div class="container-form">
                <input type="password" name="senha" id="senha" placeholder="Senha: " required>
            </div>
            <div class="container-form">
                <input type="submit" class="botaog" name="botao" id="botao" value="Entrar">
            </div>
        </form>
    `;

    sec.innerHTML = novo;
}