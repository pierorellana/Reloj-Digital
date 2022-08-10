const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let textFecha = `${diaSemana}, ${dia} ${mes}`;


    document.getElementById('fecha').innerHTML = textFecha;

    document.getElementById('caja').classList.toggle('animation');
}

const formatoHora = (hora) => {
    if (hora < 10)
        hora = "0" + hora;
    return hora;
}

setInterval(mostrarReloj, 1000)