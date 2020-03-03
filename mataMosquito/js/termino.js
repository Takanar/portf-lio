var pontos = window.location.search
pontos = pontos.replace('?', '')

document.getElementById('pontos').innerHTML = "você conseguiu " + pontos + " pontos";