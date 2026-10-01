const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

navigator.geolocation.getCurrentPosition(
    function (posicao) {

        const latitude = posicao.coords.latitude;
        const longitude = posicao.coords.longitude;
        const precisao = posicao.coords.accuracy;

        document.querySelector("#latitude").textContent =
            latitude.toFixed(6);

        document.querySelector("#longitude").textContent =
            longitude.toFixed(6);

        document.querySelector("#precisao").textContent =
            `${precisao.toFixed(2)} metros`;

    },

    function (erro) {

        document.querySelector("#latitude").textContent = "Indisponível";
        document.querySelector("#longitude").textContent = "Indisponível";
        document.querySelector("#precisao").textContent = "Indisponível";

        console.log(
            "Não foi possível obter a localização.",
            erro
        );
    }
);


navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(function(stream) {

    const status = document.querySelector("#camera-status");

    video.srcObject = stream;

    status.textContent = "Câmera ativada";

})
.catch(function(erro) {

    const status = document.querySelector("#camera-status");

    status.textContent = "Não foi possível acessar a câmera.";

    console.log("Erro ao acessar a câmera:", erro);
});

botao.addEventListener("click", function() {

    canvas.width = video.clientWidth
    canvas.height = video.clientHeight

    const contexto = canvas.getContext("2d");

    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    foto.src = canvas.toDataURL("image/png");
});