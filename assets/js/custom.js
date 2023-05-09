//Função EMERGÊNCIA

const btEmergencyStart = document.querySelector('#emergency-start');
const emergencyBreathing = document.querySelector('#emergencyBreathing');

timeLeft = 7;
function countdown() {
    timeLeft--;
    document.getElementById("seconds").innerHTML = String( timeLeft );
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }
};

setTimeout(countdown, 1000);

btEmergencyStart.addEventListener('click', () => {
    do {
        btEmergencyStart.classList.add("d-none");
        document.getElementById('emergencyText').innerHTML = "<div id='clock' class='text-center'>"  + "Prepare-se para respirar fundo em " +
        "<span id='seconds' class='bold'>"+ "7" + "</span>"  + " segundos" +
            "</div>";
        countdown();

        setTimeout(() => {
            document.getElementById('emergencyText').innerHTML = 'Respire junto com a imagem';
            emergencyBreathing.classList.remove("d-none");
        }, "6000");


    }while(false)
})