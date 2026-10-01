navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("latitude:", posicao.coords.latitude);
        console.log("longitude:", posicao.coords.longitude);
        console.log("precisão:", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("Nao foi possível obter a localização.", erro);
    }
);