/*função para login */

function logar() {
    usuario=document.forms['form'].elements[0].value;
    senha=document.forms['form'].elements[1].value;
    radios=document.getElementsByName('tipo');
    var tipo;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            tipo = radios[i].value;
        }
    }
    if(tipo == null || tipo == undefined) {
        var resposta = buscarDados(usuario, senha);
        if(resposta == 0) { 
            sessionStorage.setItem('chave', 0);
            window.location.href= "area-adm.html";
        }
        if(resposta == 3) {
            alert('Usuário não encontrado');
        }
    }
    else if(tipo == "recepcao") {
        var resposta = buscarDados(usuario, senha);
        if(resposta == 0) { 
            sessionStorage.setItem('chave', 2);
            window.location.href= "recepcao.html";
        }
        if(resposta == 3) {
            alert('Usuário não encontrado');
        }
    }
    else if(tipo == "medico") {
        var resposta = buscarDados(usuario, senha);
        if(resposta == 0) { 
            sessionStorage.setItem('chave', 1);
            sessionStorage.setItem('medico', usuario);
            window.location.href= "area-medica.html";
        }
        if(resposta == 3) {
            alert('Usuário não encontrado');
        }
    }
}/*fim da função */

/*função cadastro*/

var pacientes = [];
pacientes[0] = {nome: 'Fulano de Tal' ,endereco: 'Rua Tal' ,tel: '(xx)xxxx-xxxx',rg: '0000000' ,cpf: '000.000.000-00'};
pacientes[0] = {nome: 'Beltrano' ,endereco: 'Rua Tal' ,tel: '(xx)xxxx-xxxx',rg: '0000000' ,cpf: '000.000.000-00'};
pacientes[0] = {nome: 'Ciclano' ,endereco: 'Rua Tal' ,tel: '(xx)xxxx-xxxx',rg: '0000000' ,cpf: '000.000.000-00'};

function setPacientes(setPacientes){
    pacientes[pacientes.length] = setPacientes;
}
function getPacientes(){
    return pacientes;
}

var cadastro = '';
var nome = '';
var endereco = '';
var tel = '';
var rg = '';
var cpf = '';
var especialidade = '';
var login = '';
var pass = '';
var funcao = '';
function cadastrar() {
    var select = document.getElementById('select');
    if (!select){  
        cadastro = 'paciente';
        nome = document.getElementById('nome').value;
        endereco = document.getElementById('endereco').value;
        tel = parseInt(document.getElementById('tel').value);
        rg = parseInt(document.getElementById('rg').value);
        cpf = parseInt(document.getElementById('cpf').value);
        cadastrarPaciente(nome, endereco, tel, rg, cpf);
    }

    else if(select.value == 'paciente'){
        alert("Função bloqueada.");
    
        cadastro = 'paciente';
        nome = document.getElementById('nome').value;
        endereco = document.getElementById('endereco').value;
        tel = parseInt(document.getElementById('tel').value);
        rg = parseInt(document.getElementById('rg').value);
        cpf = parseInt(document.getElementById('cpf').value);
    }
    else if(select.value == 'medico'){
        alert("Função bloqueada.");
  
        cadastro = 'medico';
        nome = document.getElementById('nome').value;
        tel = parseInt(document.getElementById('tel').value);
        especialidade = document.getElementById('especialidade').value;
    }
    else if(select.value == 'ADM'){
        alert("Função bloqueada.");
   
        cadastro = 'adm';
        nome = document.getElementById('nome').value;
        login = document.getElementById('login').value;
        pass = document.getElementById('pass').value;
        radio = document.getElementsByName('radio');
    
        for (var i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
                funcao = i;
            }
        }

    }
}

function cadastrarPaciente(nome, endereco, tel, rg, cpf, pacientes){
    var resposta;
    resposta = addClientes(nome, endereco, tel, rg, cpf, pacientes);
    if(resposta == 1) { 
        alert("Dados Salvos"); //adicionar meio de recarregar pagina
        document.location.reload(true);
    }
    else if(resposta == 0) {
        alert("Dados não foram salvos porque já existe um registro");
    }
}

function mostrarCalendario() {
    var calendar = document.getElementById('calendar');
    if(calendar.style.visibility == 'hidden'){
        calendar.style.visibility = 'visible';
    }
    else {
        calendar.style.visibility = 'hidden';
    }
}

function consultar() {
    mostrarCalendario(todos); //criar função para mostrar todos os agendamentos.
}