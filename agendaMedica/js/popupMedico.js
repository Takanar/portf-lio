
var paciente = $("#valorPopup"); 
var url = 'verificaPacientes.php';
paciente.blur(function() {
    $.ajax({ 
        url: url, 
        type: 'POST', 
        data:{'paciente': paciente.val()}, 
        success: function(data) { 
        data = $.parseJSON(data); 
        if(data.nome == '0'){
            var r = confirm("Cliente não cadastrado!\nClique em Ok para prosseguir com o cadastro\n ou cancel para tentar novamente");
            if (r == true) {
                var popup = document.getElementById('form-popup');
                popup.style.display = 'block';
            } else {
                window.location.href= "area-medica.html";
            }
            
        }

        if(data.nome == '1') {
            document.querySelector('#valorPopup').style.border = '4px solid greenyellow';
        }
    } 
    }); 
});


function openForm(){
    document.getElementById("popup").style.display="block";
}

function closeForm(){
    document.getElementById("popup").style.display="none";
}
