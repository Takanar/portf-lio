/*
Na página area-adm-html, ao selecionar opção no select, carrega form de cadastro de usuários dinamicamente.
*/


var select = document.getElementById('select');
var form = document.getElementById('logar');
var button = document.getElementById('carregar');

function carregarSelect() {
    if(select.selectedIndex == 1){
        form.innerHTML = "";
        form.innerHTML+= '<label id="lbl" style="background-color:red">';
        form.innerHTML+= '<input id="nome" type="text" placeholder="nome" maxlength="50" autocomplete="off" required>';
        form.innerHTML+= '<input id="endereco" type="text" placeholder="endereço" maxlength="100" autocomplete="off" required>';
        form.innerHTML+= '<input id="tel" type="number" placeholder="telefone" maxlength="11" autocomplete="off" required>';
        form.innerHTML+= '<input id="rg" type="number" placeholder="RG" maxlength="15" autocomplete="off" required>';
        form.innerHTML+= '<input id="cpf" type="number" placeholder="CPF" maxlength="11" autocomplete="off" required>';
        form.innerHTML+= '<input id="cadastrar" type="submit" value="cadastrar"></input>';
        var paciente = $("#nome"); 
        var url = 'verificaPacientes.php';
        verificarExiste(paciente, url);
    }
    else if(select.selectedIndex == 2){
        form.innerHTML = "";
        form.innerHTML+= '<label id="lbl" style="background-color:red">';
        form.innerHTML+= '<input id="nome" type="text" placeholder="nome" maxlength="50" autocomplete="off" required>';
        form.innerHTML+= '<input id="tel" type="number" placeholder="telefone" maxlength="11" autocomplete="off" required>';
        form.innerHTML+= '<input id="especialidade" type="text" placeholder="especialidade" maxlength="20" autocomplete="off" required>';
        form.innerHTML+= '<input id="cadastrar" type="submit" value="cadastrar"></input>';
        var paciente = $("#nome"); 
        var url = 'verificaMedico.php';
        verificarExiste(paciente, url);
    }
    else if(select.selectedIndex == 3){
        form.innerHTML = "";
        form.innerHTML+= '<input id="nome" type="text" placeholder="nome" maxlength="50" autocomplete="off" required>';
        form.innerHTML+= '<label id="lbl" style="background-color:red">';
        form.innerHTML+= '<input id="login" type="text" placeholder="login" maxlength="20" autocomplete="off" required>';
        form.innerHTML+= '<input id="pass" type="password" placeholder="senha" maxlength="20" autocomplete="off" required>';
        form.innerHTML+= '<div style="display: flex; "><input id="radio" type="radio" name="radio" value="adm">ADM<input id="radio" type="radio" name="radio" value="medico">Médico<input id="radio" type="radio" name="radio" value="recepcao">Recepção</div>';
        form.innerHTML+= '<input id="cadastrar" type="submit" value="cadastrar"></input>';
        var paciente = $("#login"); 
        var url = 'verificaUsuario.php';
        verificarExiste(paciente, url);
    }
}

select.addEventListener('change', carregarSelect);

function verificarExiste(paciente, url){
    paciente.blur(function() { 
        $.ajax({ 
            url: url, 
            type: 'POST', 
            data:{'paciente': paciente.val()}, 
            success: function(data) { 
            data = $.parseJSON(data); 
            if(data.nome == '1'){
                $("#lbl").text('*Usuário existe');
            }
        } 
    }); 
    }); 
}