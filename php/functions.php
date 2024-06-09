<?php

    header('Content-Type: application/json');

    $host = "localhost";
    $user = "root";
    $senha = "";
    $banco = "espaço_real";

    $conecta = new mysqli($host, $user, $senha, $banco);
    
    $form = $_POST['form'];
    
    
    switch ($form){
        case 'form1':
            cadastrarProd($conecta);
            break;
        case 'form2':
            atualizarProd($conecta);
            break;
        case 'form3':
            delProd($conecta);
            break;
        case 'form4':
            cadastrarGeren($conecta);
            break;
        case 'form5':
            atualizarGeren($conecta);
            break;
        case 'form6':
            delGeren($conecta);
            break;
        case 'form7':
            pesqProd($conecta);
            break;
        case 'form8':
            pesqGeren($conecta);
            break;
        case 'form9':
            pesqCar($conecta, $_POST['pesq']);
            break;
        case 'form10':
            registrarVendas($conecta);
            break;
        case 'form11':
            pesqCategoria($conecta);
            break;
        case 'form12':
            pesqVendas($conecta);
            break;
        case 'form13':
            pesquisarItensVendidos($conecta);
            break;
        case 'form14':
            pesqDataVenda($conecta);
            break;
        case 'form15':
            pesqVendasMes($conecta);
            break;
        case 'form16':
            pesqAnos($conecta);
            break;
        case 'selectAnos':
            selectAnos($conecta);
            break;
        case 'selectAnosMes':
            selectAnosMes($conecta);
            break;
        default:
            break;
    }
    
    function cadastrarProd($conecta) {
        $nome = $_POST['nome'];
        $valor = $_POST['preco'];
        $tamanho = $_POST['tamanho'];
        $ingre = $_POST['ingre'];
        $cate = $_POST['cate'];

        $preco = str_replace(",", ".", $valor);

        if (!empty($_FILES['imagem']['tmp_name']) && is_uploaded_file($_FILES['imagem']['tmp_name'])) {
            $imagem_nome = $_FILES['imagem']['name'];
            $imagem_temp = $_FILES['imagem']['tmp_name'];

            $imagem_binario = file_get_contents($imagem_temp);
            $imagem_binario_escaped = mysqli_real_escape_string($conecta, $imagem_binario);
            $nome_imagem = ", nome_imagem, imagem";
            $valores_imagem = ", '$imagem_nome', '$imagem_binario_escaped'";
        } else {
            $nome_imagem = "";
            $valores_imagem = "";
        }

        $sql = "INSERT INTO produtos (nome_produto, preco, tamanho, ingredientes, categoria $nome_imagem) 
                VALUES ('$nome', $preco, '$tamanho', '$ingre', '$cate' $valores_imagem)";

        if ($conecta->query($sql) === TRUE) {
            echo json_encode('Produto Registrado com sucesso!');
        } else {
            echo json_encode('Falha ao registrar produto!');
        }
    }

    
    function atualizarProd($conecta){
        
        $id = $_POST['idatualizacao'];
        $nome = $_POST['nomeProd'];
        $valor = $_POST['preco'];
        $tamanho = $_POST['tamanho'];
        $ingre = $_POST['ingredientes'];
        $cate = $_POST['categoria'];
        
        $sql = "UPDATE produtos SET ";
        if (!empty($nome)){
            $sql .= "nome_produto = '$nome', ";
        }
        if (!empty($valor)){
            $preco = str_replace(",", ".", $valor);
            $sql .= "preco = $preco, ";
        }
        if (!empty($tamanho)){
            $sql .= "tamanho = '$tamanho', ";
        }
        if (!empty($ingre)){
            $sql .= "ingredientes = '$ingre', ";
        }
        if (!empty($cate)){
            $sql .= "categoria = '$cate', ";
        }
        if (!empty($_FILES['imagem']['name'])) {
            $imagem_nome = $_FILES['imagem']['name'];
            $sql .= "nome_imagem = '$imagem_nome', ";

            $imagem_temp = $_FILES['imagem']['tmp_name'];
            $imagem_binario = addslashes(file_get_contents($imagem_temp));
            $sql .= "imagem = '$imagem_binario', ";
        }
        
        $sql = rtrim($sql, ', ');
        
        $sql .= " WHERE id_produtos = $id;";
        
        if ($conecta->query($sql) === TRUE){
            echo json_encode('Produto Atualizado com sucesso!');
        }else{
            echo json_encode('Falha ao atualizar produto!');
        }
        
    }
    
    function delProd($conecta){
        
        $id = $_POST['id'];
        
        $sql = "DELETE FROM produtos WHERE id_produtos = $id";
        
        if($conecta->query($sql) === TRUE){
            echo json_encode('Produto excluido com sucesso!');
        }else{
            echo json_encode('Erro ao tentar excluir o produto');
        }
    }
    
    function cadastrarGeren($conecta){
        
        $nome = $_POST['nome'];
        $sobrenome = $_POST['sobrenome'];
        $cpf = $_POST['cpf'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        
        $sql = "INSERT INTO gerenciador (cpf, nome, sobrenome, email, senha) 
                VALUES ('$cpf', '$nome', '$sobrenome', '$email', '$senha')";
        
        if($conecta->query($sql) === TRUE){
            echo json_encode('Gerenciador cadastrado com sucesso!');
        }else{
            echo json_encode('Erro ao tentar cadastrar um gerenciador!');
        }
    }
    
    function atualizarGeren($conecta){
        
        $idgeren = $_POST['idgeren'];
        $nome = $_POST['nomegeren'];
        $sobrenome = $_POST['sobrenome'];
        $cpf = $_POST['cpf'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        
        $sql = "UPDATE gerenciador SET ";
        
        if(!empty($nome)){
            $sql .= "nome = '$nome', ";
        }
        if(!empty($sobrenome)){
            $sql .= "sobrenome = '$sobrenome', ";
        }
        if(!empty($cpf)){
            $sql .= "cpf = '$cpf', ";
        }
        if(!empty($email)){
            $sql .= "email = '$email', ";
        }
        if(!empty($senha)){
            $sql .= "senha = '$senha', ";
        }
        
        $sql = rtrim($sql, ', ');
        
        $sql .= "WHERE id_gerente = $idgeren";
        
        if ($conecta->query($sql) === TRUE){
            echo json_encode('Gerenciador atualizado com sucesso!');
        }else{
            echo json_encode('Erro ao atualizar o gerenciador!');
        }
    }
    
    function delGeren($conecta){
        
        $id = $_POST['id'];
        
        $sql = "DELETE FROM gerenciador WHERE id_gerente = $id";
        
        if($conecta->query($sql) === TRUE){
            echo json_encode('Gerenciador excluído com sucesso!');
        }else{
            echo json_encode('Erro ao tentar excluir gerenciador!');
        }
    }
    
    function pesqProd($conecta) {
        $pesq = isset($_POST['pesq']) ? $_POST['pesq'] : '';
        
       if (!empty($pesq)) { 
            $sql = "SELECT id_produtos, nome_produto, preco, tamanho, ingredientes, categoria, nome_imagem, imagem FROM produtos WHERE nome_produto LIKE '%$pesq%'";
        } else {
            $sql = "SELECT id_produtos, nome_produto, preco, tamanho, ingredientes, categoria, nome_imagem, imagem FROM produtos"; 
        }

        $result = $conecta->query($sql);

        if ($result) {
            $produtos = array();

            while ($row = $result->fetch_assoc()) {
                
                $row['imagem_base64'] = base64_encode($row['imagem']);
                
                unset($row['imagem']);
                
                $produtos[] = $row;
            }

            if (!empty($produtos)) {
                echo json_encode($produtos);
            } else {
                echo json_encode(array('message' => 'Nenhum produto encontrado com esse nome'));
            }
        } else {
            echo json_encode(array('error' => 'Erro ao executar a consulta SQL'));
        }
    }
    
    function pesqGeren($conecta){
        
        $pesq = $_POST['pesq'];
        
        $sql = "SELECT * FROM gerenciador WHERE nome LIKE '%$pesq%'";
        
        $result = $conecta->query($sql);
        
        if ($result->num_rows > 0){
            $gerenciadores = array();
            
            while($row = $result->fetch_assoc()){
                $gerenciadores[] = $row;
            }
            
            echo json_encode($gerenciadores);
        }else{
            echo json_encode(array('error' => 'Nenhum gerenciador encontrado com esse nome'));
        }
    }
    
    function pesqCar($conecta, $nome){
        
        $sql = "SELECT nome_produto, preco FROM produtos WHERE id_produtos='$nome'";
         
        $result = $conecta->query($sql);
        
        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                echo json_encode($row);
            }
        }else{
            echo json_encode(array('error' => 'Ocorreu um error inesperado!'));
        }
    }
    
    function registrarVendas($conecta){
        
        $produtos = $_POST['produto'];
        $quantidade = $_POST['quantidade'];
        $preco = $_POST['preco'];
        $gerente = $_POST['gerente'];
        $data = $_POST['data'];
        $gastos = $_POST['gastos'];
        
        $data_formatada = date('Y-m-d', strtotime($data));
        
        $produtos_ids = array();
        
        foreach ($produtos as $produto_nome) {
                $sql_produto = "SELECT id_produtos FROM produtos WHERE nome_produto='$produto_nome'";
                $resultado = $conecta->query($sql_produto);
                if ($resultado->num_rows > 0) {
                    $row = $resultado->fetch_assoc();
                    $produtos_ids[] = $row['id_produtos'];
                } else {
                    echo json_encode("Produto '$produto_nome' não encontrado.");
                    return;
                }
         }
        
        $sql = "INSERT INTO vendas (data_venda, gasto, id_gerente) VALUES ('$data_formatada', $gastos, $gerente) ";
        
        if ($conecta->query($sql) === true){
            
            $ultimo_id = $conecta->insert_id;
            
            for ($i = 0; $i < count($produtos); $i++){
                  $id_produto = $produtos_ids[$i];
                  $quantidade_produto = $quantidade[$i];
                  $preco_produto = $preco[$i];
                  $sql_itens = "INSERT INTO itens_vendidos (id_produtos, id_vendas, quantidade, valor) VALUES ($id_produto, $ultimo_id, $quantidade_produto, $preco_produto)";
            
                if ($conecta->query($sql_itens) !== true) {
                    echo json_encode("Erro ao inserir item vendido: " . $conecta->error);
                 }
           }
           
           echo json_encode('Venda registrada com sucesso!');
        } else {
           echo json_encode("Erro ao inserir venda: " . $conecta->error);
        }
            
    }

    function pesqCategoria($conecta) {
        $pesq = isset($_POST['info']) ? $_POST['info'] : '';
        $cate = $_POST['categoriaPesq'];
        
        if($cate == "todas"){
            $sql = "SELECT nome_produto, id_produtos, preco, categoria, ingredientes, tamanho FROM produtos WHERE nome_produto LIKE '%$pesq%'";
        }else{
             $sql = "SELECT nome_produto, id_produtos, preco, categoria, ingredientes, tamanho FROM produtos WHERE nome_produto LIKE '%$pesq%' AND categoria LIKE '%$cate%'";
        }    
        
        $result = $conecta->query($sql);
        
        if ($result->num_rows > 0){
            $produtos = array();
            
            while($row = $result->fetch_assoc()){
                $produtos[] = $row;
            }
            
            if (!empty($produtos)) {
                echo json_encode($produtos);
            }
                
        } else {
            echo json_encode(array('message' => 'Nenhum produto encontrado com esse nome!'));
        }
    }
    
    function pesqVendas($conecta) {
        $sql = "SELECT v.id_vendas, v.data_venda, g.nome
                FROM vendas v
                INNER JOIN gerenciador g on v.id_gerente = g.id_gerente";
        $result = $conecta->query($sql);

        if ($result->num_rows > 0) {
            $vendas = array();
            while($row = $result->fetch_assoc()) {
                $vendas[] = $row;
            }
            echo json_encode(array('vendas' => $vendas));
        } else {
            echo json_encode(array('error' => 'Erro ao encontrar vendas!'));
        }
    }
    
    function pesquisarItensVendidos($conecta){
        $id = $_POST['id'];
        
        $sql = "SELECT v.id_vendas, v.data_venda, v.gasto, v.id_gerente, i.id_item, i.quantidade,i.valor, p.nome_produto, g.nome
                    FROM vendas v
                    INNER JOIN itens_vendidos i ON v.id_vendas = i.id_vendas
                    INNER JOIN gerenciador g ON v.id_gerente = g.id_gerente
                    INNER JOIN produtos p ON i.id_produtos = p.id_produtos
                    WHERE v.id_vendas = $id";
        
        $result = $conecta->query($sql);
        
        if ($result->num_rows > 0) {

            $venda = array();

            while ($row = $result->fetch_assoc()) {

                if (empty($venda)) {
                    $venda["id_vendas"] = $row["id_vendas"];
                    $venda["data_venda"] = $row["data_venda"];
                    $venda["gasto"] = $row["gasto"];
                    $venda["id_gerente"] = $row["id_gerente"];
                    $venda["nome"] = $row["nome"];
                    $venda["itens"] = array();
                }

                $id_item = $row["id_item"];
                $quantidade = $row["quantidade"];
                $nome_produto = $row["nome_produto"];
                $valor = $row['valor'];

                $venda["itens"][] = array(
                    "id_item" => $id_item,
                    "quantidade" => $quantidade,
                    "nome_produto" => $nome_produto,
                    "valor" => $valor
                );
            }

            echo json_encode($venda);
        }else{
            echo json_encode(array('erro' => 'Erro ao recuperar informações da venda'));
        }
        
    }
    
    function pesqDataVenda($conecta){
        $data = $_POST['dataVenda'];
                
        $sql = "SELECT v.id_vendas, v.data_venda, v.gasto, v.id_gerente, i.id_item, i.quantidade,i.valor, p.nome_produto, g.nome
                FROM vendas v
                INNER JOIN itens_vendidos i ON v.id_vendas = i.id_vendas
                INNER JOIN gerenciador g ON v.id_gerente = g.id_gerente
                INNER JOIN produtos p ON i.id_produtos = p.id_produtos
                WHERE v.data_venda = '$data'";
        
        $result = $conecta->query($sql);
        
        if ($result->num_rows > 0) {

            $vendas = array();

            while ($row = $result->fetch_assoc()) {

                $id_venda = $row["id_vendas"];

                if (!isset($vendas[$id_venda])) {
                    $vendas[$id_venda] = array(
                        "id_vendas" => $row["id_vendas"],
                        "data_venda" => $row["data_venda"],
                        "gasto" => $row["gasto"],
                        "id_gerente" => $row["id_gerente"],
                        "nome" => $row["nome"],
                        "itens" => array()
                    );
                }

                $vendas[$id_venda]["itens"][] = array(
                    "id_item" => $row["id_item"],
                    "quantidade" => $row["quantidade"],
                    "nome_produto" => $row["nome_produto"],
                    "valor" => $row["valor"]
                );
            }

            
            echo json_encode(array_values($vendas));
        }else{
            echo json_encode(array('erro' => 'Erro ao recuperar informações da venda'));
        }
    }

    function pesqVendasMes($conecta){

        $mes = $_POST['mes'];
        $ano = $_POST['ano'];

        $sql = "SELECT p.nome_produto, SUM(i.quantidade) AS quantidade, SUM(i.quantidade * i.valor) AS valor,
                (SELECT SUM(vendas.gasto) 
                FROM vendas 
                WHERE YEAR(vendas.data_venda) = $ano AND MONTH(vendas.data_venda) = $mes) AS total_gastos
                FROM vendas v
                INNER JOIN itens_vendidos i ON v.id_vendas = i.id_vendas
                INNER JOIN produtos p ON i.id_produtos = p.id_produtos
                INNER JOIN gerenciador g ON v.id_gerente = g.id_gerente
                WHERE YEAR(data_venda) = $ano AND MONTH(data_venda) = $mes
                GROUP BY 
                p.nome_produto;";

        $result = $conecta->query($sql);

        if($result->num_rows > 0){
            $dados = array();

            while($row = $result->fetch_assoc()){
                $dados[] = $row;
            }

            echo json_encode($dados);
        }else{
            echo json_encode(array('error' => 'Nenhum dado encontrado!'));
        }
    }

    function selectAnos($conecta){

        $sql = "SELECT YEAR(data_venda) as ano FROM vendas ORDER BY YEAR(data_venda) ASC";

        $result = $conecta->query($sql);

        if($result->num_rows > 0){
            $anos = array();

            while($row = $result->fetch_assoc()){
                $anos[] = $row;
            }

            echo json_encode($anos);
        }else{
            echo json_encode(array('error' => 'Nenhum ano encontrado!'));
        }
    }

    function selectAnosMes($conecta){

        $sql = "SELECT YEAR(data_venda) as ano, MONTH(data_venda) as mes 
                FROM vendas 
                ORDER BY YEAR(data_venda) ASC, MONTH(data_venda) ASC";

        $result = $conecta->query($sql);

        if($result->num_rows > 0){
            $anos = array();

                while($row = $result->fetch_assoc()){
                    $anos[] = $row;
                }
            
            echo json_encode($anos);
        }else{
            echo json_encode(array('error' => 'Nenhuma data encontrada!'));
        }
    }


    function pesqAnos($conecta) {
        $ano = $_POST['ano'];

        $sql = "SELECT DISTINCT MONTH(data_venda) AS mes
                FROM vendas
                WHERE YEAR(data_venda) = $ano
                ORDER BY mes";

        $result_meses = $conecta->query($sql);

        $dados = array();

        if ($result_meses->num_rows > 0) {
            while ($row_mes = $result_meses->fetch_assoc()) {
                $mes = $row_mes['mes'];

                $sql_fatu = "SELECT SUM(IV.quantidade * IV.valor) AS total_faturado
                            FROM vendas V
                            JOIN itens_vendidos IV ON V.id_vendas = IV.id_vendas
                            WHERE YEAR(data_venda) = $ano AND MONTH(data_venda) = $mes";

                $result_fatu = $conecta->query($sql_fatu);
                $faturamento = $result_fatu->fetch_assoc()['total_faturado'];

                $sql_gasto = "SELECT SUM(gasto) AS gasto
                            FROM vendas
                            WHERE YEAR(data_venda) = $ano AND MONTH(data_venda) = $mes";

                $result_gastos = $conecta->query($sql_gasto);
                $gastos = $result_gastos->fetch_assoc()['gasto'];

                $dados[] = array(
                    'mes' => $mes,
                    'faturamento' => $faturamento,
                    'gasto' => $gastos
                );
            }

            echo json_encode($dados);
        } else {
            echo json_encode(array('error' => 'Nenhuma venda encontrada nesse ano!'));
        }
    }


$conecta->close();