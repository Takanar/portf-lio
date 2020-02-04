document.getElementById('carregarPacientes').addEventListener('click', function (){
    setTimeout( function (){
        let deletar2 = document.querySelectorAll('#deletarPaciente');
        var contar = deletar2.length;
        for (i = 0; i < deletar2.length; i++){
            deletar2[i].onclick = function(i){
                alert("função bloqueada");
            }.bind(this, i);
        }
    }, 200);

    document.getElementById('form-popup2').style.display = 'block';
    document.getElementById('tbody2').style.display = 'block';
    document.getElementById('tbody').style.display = 'none';
    var dadosJSON = [];
    var table = document.getElementById('tbody2');

    table.innerHTML="<th>Id</th><th>Paciente</th><th>Rua</th><th>DDD </th><th>tel</th><th>rg</th><th>cpf</th>";

    dadosJSON = getPacientes();
    
    for(var i = 0; i < dadosJSON.length; i++){
        table.innerHTML += "<tr id="+i+"><td>"+i+"</td><td>"+dadosJSON[i]['nome']+"</td><td>"+dadosJSON[i]['endereco']+"</td><td id='lblDataLimite"+i+"'>"+dadosJSON[i]['tel']+"</td><td id='dataConsulta"+i+"'>"+dadosJSON[i]['rg']+"</td><td>"+dadosJSON[i]['cpf']+"</td><td><button id='deletarPaciente' class='"+i+"'value='"+dadosJSON[i][0]+"'>deletar</button></td></tr>";
    }

});

document.getElementById('fechar').addEventListener('click', function(){
    document.getElementById('form-popup2').style.display = 'none';
})
