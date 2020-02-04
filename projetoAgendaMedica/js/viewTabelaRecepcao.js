document.getElementById('carregarTabelaRecepcao').addEventListener('click', function (){
    setTimeout( function (){
        let deletar = document.querySelectorAll('#deletar');
        var contar = deletar.length;
        for (i = 0; i < deletar.length; i++){
            deletar[i].onclick = function(i){
                alert('função bloqueada');
            }.bind(this, i);
        }
    }, 200);
    document.getElementById('form-popup2').style.display = 'block';
    document.getElementById('tbody').innerHTML = '';   
    document.getElementById('tbody2').style.display = 'none';
    document.getElementById('tbody').style.display = 'block'; 
    var dadosJSON = [];
    var table = document.getElementById('tbody');

    table.innerHTML="<th>Id</th><th>Paciente</th><th>Descrição</th><th>Data Agendada</th><th>Data da consulta</th>";

    dadosJSON = getAgendamentos();
    console.log(dadosJSON);
    for(var i = 0; i < dadosJSON.length; i++){
        table.innerHTML += "<tr id="+i+"><td>"+i+"</td><td>"+dadosJSON[i]['paciente']+"</td><td>"+dadosJSON[i]['descricao']+"</td><td id='lblDataLimite"+i+"'>"+dadosJSON[i]['dataAgendamento']+"</td><td id='dataConsulta"+i+"'>"+dadosJSON[i]['dataConsulta']+"</td><td><button id='deletar' class='"+i+"' value='"+dadosJSON[i]['paciente']+"'>deletar</button></td></tr>";
    }
});

document.getElementById('fechar').addEventListener('click', function(){
    document.getElementById('form-popup2').style.display = 'none';
});
