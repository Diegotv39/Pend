const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");
contexto.lineWidth = 8;
contexto.lineCap = "round";
contexto.lineJoin = "round";

contexto.beginPath();
contexto.moveTo(100, 100);
contexto.lineTo(100, 170);
contexto.stroke();

contexto.beginPath();
contexto.arc(100, 75, 25, 0, Math.PI * 2);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 100);
contexto.lineTo(60, 130);
contexto.lineTo(120, 150);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 170);
contexto.lineTo(60, 200);
contexto.lineTo(60, 250);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 100);
contexto.lineTo(140, 130);
contexto.lineTo(170, 90);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 170);
contexto.lineTo(140, 200);
contexto.lineTo(140, 250);
contexto.stroke();

