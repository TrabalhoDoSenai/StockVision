console.log("StockVision IA iniciado.");


// ================================
// HORÁRIO DE SINCRONIZAÇÃO
// ================================

function atualizarHorario() {
    const elemento = document.getElementById("syncTime");

    if (!elemento) return;

    const agora = new Date();

    const horas = String(agora.getHours()).padStart(2, "0");
    const minutos = String(agora.getMinutes()).padStart(2, "0");

    elemento.textContent = horas + ":" + minutos;
}

atualizarHorario();
setInterval(atualizarHorario, 30000);


// ================================
// MENU LATERAL
// ================================

const menuLinks = document.querySelectorAll(".sidebar nav a");

const cameraCard = document.querySelector(".camera-card");
const alertsCard = document.querySelector(".alerts-card");
const statsSection = document.querySelector(".stats");
const mainHeader = document.querySelector("header");

menuLinks.forEach(function(link, index) {

    link.addEventListener("click", function(event) {
        event.preventDefault();

        menuLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

        // Dashboard
        if (index === 0) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // Monitoramento
        if (index === 1 && cameraCard) {
            cameraCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        // Alertas
        if (index === 2 && alertsCard) {
            alertsCard.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }

        // Estoque
        if (index === 3 && statsSection) {
            statsSection.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });

});


// ================================
// BOTÃO LIMPAR ALERTAS
// ================================

const botaoLimpar = document.getElementById("clearAlerts");

if (botaoLimpar) {

    botaoLimpar.addEventListener("click", function() {

        const lista = document.getElementById("alertsList");
        const contador = document.getElementById("gapCount");
        const badge = document.querySelector(".nav-badge");

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

        if (badge) {
            badge.textContent = "0";
        }

        console.log("Todos os alertas foram limpos.");
    });

}


// ================================
// ALERTAS CLICÁVEIS
// ================================

function ativarAlertas() {

    const alertas = document.querySelectorAll(".alert-item");

    alertas.forEach(function(alerta) {

        alerta.addEventListener("click", function() {

            const titulo = alerta.querySelector("strong");
            const local = alerta.querySelector("span");

            if (titulo && local) {
                console.log(
                    "Alerta selecionado:",
                    titulo.textContent,
                    "-",
                    local.textContent
                );
            }

            if (cameraCard) {
                cameraCard.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }

        });

    });

}

ativarAlertas();


// ================================
// CÂMERA / MONITORAMENTO
// ================================

const cameraView = document.querySelector(".camera-view");

if (cameraView) {

    cameraView.addEventListener("click", function() {

        console.log("Câmera 01 selecionada.");

        cameraView.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

}


// ================================
// STATUS DO SISTEMA
// ================================

console.log("Câmeras conectadas: 04");
console.log("Monitoramento de lacunas: ativo");
console.log("Inteligência artificial: operacional");
console.log("Sistema StockVision: online");