console.log("StockVision IA iniciado.");

function atualizarHorario() {
    const elemento = document.getElementById("syncTime");

    if (!elemento) {
        return;
    }

    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    elemento.textContent = horas + ":" + minutos;
}

atualizarHorario();

setInterval(atualizarHorario, 30000);


const botaoLimpar = document.getElementById("clearAlerts");

if (botaoLimpar) {
    botaoLimpar.addEventListener("click", function () {

        const lista = document.getElementById("alertsList");
        const contador = document.getElementById("gapCount");

        if (lista) {
            lista.innerHTML =
                '<div class="empty-alerts">' +
                '<p>Nenhum alerta pendente.</p>' +
                '<span>O sistema continuará monitorando as prateleiras.</span>' +
                '</div>';
        }

        if (contador) {
            contador.textContent = "00";
        }
    });
}


console.log("Câmeras conectadas: 04");
console.log("Monitoramento de lacunas: ativo");
console.log("Sistema operacional.");