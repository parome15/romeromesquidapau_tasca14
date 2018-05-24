   
   


alert("DETALLS DEL CURS\n"+"Nom del curs: "+$("#nomCurs").val()+"\n"+
"Tipus de curs: "+$("#tipusCurso").val()+"\n"+
"Nom del professor: "+$("#nomProfessor").val()+"\n"+
"Data d'inici: "+dataIniciMostrar+"\n"+ 
"Duració del curs en díes: "+dies+"\n"+
"Hores: "+$("#hores").val());







 // Aqui incluim el comportament de la pagina al ejecutar el boto del formulari
$(document).ready(function() {
    $("#formulari").submit(function(evento){
        //Hem de fer una transformació dels valors del input de dates ja que sino no funcionara ens donara error les dades.
        var dataInici = new Date($('#dataInici').val());
        var dataFinal = new Date($('#dataFinal').val());
        var dataIniciMostrar = dataInici.getDate() +'/'+(dataInici.getMonth()+1)+'/'+dataInici.getFullYear();
        //Aquesta funcio el que fa es donar-nos es dias de diferencia entre les dues fetches.
        function difFechas(dataInici, dataFinal) {
            return Math.round((dataFinal-dataInici)/(1000*60*60*24));
        }

        var dies = difDates(dataInici,dataFinal);
        //Si el valor incial de la data inici es menor a la data final es mostrara la informació del curs,
        // en cas contrari donara error. I sortira un missatge per mostrar la equivocacio de dades.
        if (dataInici < dataFinal){    
            alert("DETALLS DEL CURS\n"+"Nom del curs: "+$("#nomCurs").val()+"\n"+
            "Tipus de curs: "+$("#tipusCurso").val()+"\n"+
            "Nom del professor: "+$("#nomProfessor").val()+"\n"+
            "Data d'inici: "+dataIniciMostrar+"\n"+ 
            "Duració del curs en díes: "+dies+"\n"+
            "Hores: "+$("#hores").val());
            //Incluimos un reset para vaciar los campos del formulario 
            $("#formulari")[0].reset();
        }else{
            alert ("Dates no válidas, introdueix una dada d'inici anterior a la data final.")
            return false;    
        }
    })
});