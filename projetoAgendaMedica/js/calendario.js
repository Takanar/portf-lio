var agendamentos = [];
agendamentos[0] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-01-23 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[1] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-02-30 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[2] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-03-02 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[3] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-04-23 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[4] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-05-30 00:00:00", dataConsulta: "2020-02-04 13:00:00"};
agendamentos[5] = {paciente: "fulano de tal", doutor: "Arquimedes", descricao: "Consulta", dataAgendamento: "2020-06-02 00:00:00", dataConsulta: "2020-02-04 13:00:00"};

function setAgendamentos(setAgendamentos){
    agendamentos[agendamentos.length] = setAgendamentos;
    console.log(agendamentos);
}

function getAgendamentos(){
    return agendamentos;
}

var data = new Date().toISOString();
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
  navLinks: true, 
  selectable: true,
  selectMirror: true,
  select: function(arg) {
    var paciente = document.getElementById("valorPopup").value;
    var descricao = document.getElementById('descricao').value;
    if (paciente) {
        var resposta;
        resposta = addAgendamento(paciente, descricao, arg.start.toISOString(), data, agendamentos);
        if (resposta == 1) {
            alert("Cadastro efetuado com sucesso");
        }
        calendar.addEvent({
            title: paciente,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
        })
    }
    calendar.unselect()
    },
    editable: true,
    eventLimit: true,
});

for(var i = 0; i < agendamentos.length; i++){
    calendar.addEvent({
        title: agendamentos[i]['paciente'],
        start: agendamentos[i]['dataAgendamento']
    })
}

calendar.setOption('locale', 'pt-br');

calendar.render();
});
