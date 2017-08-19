$(document).ready(function(){

  function actualizar_hora(){
    
    var f=new Date();  //instancia de la fecha con los siguientes parametros
    var hor=f.getHours();
    var ampm,min=f.getMinutes();
    var seg=f.getSeconds();
    var diasemana=f.getDay();
    var dia=f.getDate(); 
    var mes=f.getMonth();
    var year=f.getFullYear();
    
    var p_hor=document.getElementById("horas");
    var p_min=document.getElementById("minutos");
    var p_seg=document.getElementById("segundos");  //se le asigna en los parrafos los ids
    
    var p_diasemana=document.getElementById("diasemana");
    var p_dia=document.getElementById("dia");
    var p_mes=document.getElementById("mes");
    var p_year=document.getElementById("year");
    
    var semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado'];  
     
    p_diasemana.textContent=semana[diasemana];   //al arreglo semana se le asigna la variable diasemana
    
    p_dia.textContent=dia;    //al parrafo p_dia se le asigna el dia
    
    var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    p_mes.textContent=meses[mes]; //al arreglo meses se le asigna la variable p_mes el mes
       
    p_year.textContent=year;   //acá asignamos el año
    
    if(hor>=12){
    
      hor=hor+0,5;
      ampm="PM";
    
    }else{
      ampm="AM";
    }
     if(hor==12){
        hor=12;
     }
     
     p_hor.textContent=hor;   //al id horas le asignamos la hora 
     p_ampm.textContent=ampm;  // al id ampm le asignamos el "am" o "pm"
     
     if(min<10){
                                  //si es menor al minuto 10 entonces le agregamos un 0 ;
        min="0"+min;
        
     }
     
     if(seg<10){
        seg="0"+seg; // si los segundos son menores a 10 entonces le asignamos un 0;
     }
     
     
     p_min.textContent=min;  //asignamos los minutos al parrafo p
     p_seg.textContent=seg;  //asignamos los segundos al parrafo p
    
  }

   actualizar_hora();
   
   var intervalos=setInterval(actualizar_hora(),1000); 


});
