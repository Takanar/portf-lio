
function addClientes(nome, endereco, tel, rg, cpf, pacientes){
    var resultado;
    var retorno;
    resultado = verificaExiste(nome, pacientes);
    if(resultado == 0){
        retorno = 0;
    } else {
        pacientes[pacientes.length] = {nome: nome ,endereco: endereco ,tel: tel, rg: rg ,cpf: cpf};
        setPacientes(pacientes);
        retorno = 1;
    }
    return retorno;
}

function addAgendamento(paciente, descricao, dataAgendamento, dataConsulta, agendamentos){
    agendamentos[agendamentos.length] = {paciente: paciente, descricao: descricao, dataAgendamento: dataAgendamento, dataConsulta: dataConsulta};
    return 1;
}

function verificaExiste(busca, pacientes) {
    var retorno;
    for(var i = 0; i < pacientes.length; i++){
        if(busca == pacientes[i]['nome']){
            retorno = 0; 
        }
    }
    return retorno;
}
