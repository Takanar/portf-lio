/*testando indentação com 2 espaços*/

var data = new Date().toISOString();
var agendamentos = [];
agendamentos[0] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-01-23 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[1] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-02-30 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[2] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-03-02 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[3] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-04-23 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[4] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-05-30 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[5] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-06-02 00:00:00", dataConsulta: "2020-02-04 13:00:00"};

document.addEventListener('DOMContentLoaded', function() {
var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  defaultDate: data,
  navLinks: true, // can click day/week names to navigate views
  selectable: true,
  selectMirror: true,
  select: function(arg) {
    var title = document.getElementById("valorPopup").value;
    var medico = sessionStorage.getItem('medico');
    var descricao = document.getElementById('descricao').value;
    if (title) {
      $.ajax({
        url: "dados/crud.php",
        type: "POST",
        data: "acao=salvar&title="+title+"&doutor="+medico+"&descricao="+descricao+"&dataAgendamento="+arg.start.toISOString()+"&dataConsulta="+data,
        dataType: "html"
        
      }).done(function(resposta) {
          alert("Cadastro efetuado com sucesso")
      
      }).fail(function(jqXHR, textStatus ) {
          alert("Request failed: " + textStatus);
      
      }).always(function() {
          console.log("completou");
      });
      calendar.addEvent({
        title: title,
        start: arg.start,
        end: arg.end,
        allDay: arg.allDay
      })
      calendar.unselect()
    
    }
    
  },
  editable: true,
  eventLimit: true, // allow "more" link when too many events
});
const dados = [];
var dadosJSON = [];
$.ajax({
url: "dados/crud.php",
async: "false",
type: "POST",
data: "acao=carregarMedico&doutor="+sessionStorage.getItem('medico'),
dataType: "html"
}).done( function(resposta) {

    dadosJSON = JSON.parse(resposta);

    for(var i = 0; i < dadosJSON.length; i++){
        //resposta incorreta:Undefined index: title
        dados.push({title:dadosJSON[i][1], start:dadosJSON[i][3]});
    }
    
    for(var i = 0; i < dados.length; i++){
      calendar.addEvent({
        title: dados[i]['title'],
        start: dados[i]['start']
      })
    }
}).fail(function(jqXHR, textStatus ) {
    console.log("Request failed: " + textStatus);

}).always(function() {
    console.log("completou");
});

calendar.setOption('locale', 'pt-br');

calendar.render();
});
