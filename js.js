//Se incluye un comportamiento que se dispara al ejecutar la función de submit a través del boton del formulario
$(document).ready(function() {
    $("#formulario").submit(function(evento){
        //Transformación de los valores del input de fechas en objetos Date
        var fechaInicio = new Date($('#fechaInicio').val());
        var fechaFinal = new Date($('#fechaFinal').val());
        var fechaInicioMostrar = fechaInicio.getDate() +'/'+(fechaInicio.getMonth()+1)+'/'+fechaInicio.getFullYear();
        //Función que permite establecer los dias de diferencia entre dos fechas
        function difFechas(fechaInicial, fechaFinal) {
            return Math.round((fechaFinal-fechaInicial)/(1000*60*60*24));
        }
        var dias = difFechas(fechaInicio,fechaFinal);
        //Si se valida que el value de la fechaInicio es menor que la fechaFinal se mostrará la información del curso
        if (fechaInicio < fechaFinal){    
            alert("A continuación se mostrará la información del curso.");
            alert("DETALLES DEL CURSO\n"+"Nombre del curso: "+$("#nombreCurso").val()+"\n"+
            "Tipo de curso: "+$("#tipoCurso").val()+"\n"+
            "Nombre del profesor: "+$("#nombreProfesor").val()+"\n"+
            "Fecha de inicio: "+fechaInicioMostrar+"\n"+ 
            "Duración del curso en días: "+dias+"\n"+
            "Horas: "+$("#horas").val());
            //Incluimos un reset para vaciar los campos del formulario 
            $("#formulario")[0].reset();
        }else{
            alert ("Fechas no válidas.")
            return false;
            
            
            
        }
    })
});