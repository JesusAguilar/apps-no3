//JavaScript
	var audio;
$(document).ready(function(){	
"use strict";
	// asigna la altura de page y page tiene la funcion para calcular el alto
	document.addEventListener("deviceready",function(){
		audio= window.plugins.LowLatencyAudio; //construye la variable audio a un objeto
    	//audio.preloadFX('id', 'ubicacion', que se hace si carga Bien el sonido, que voy a hacer si carga mal el sonido);
		audio.preloadFX('DO','audio/DO.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('RE','audio/RE.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('MI','audio/MI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('FA','audio/FA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('SOL','audio/SOL.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('LA','audio/LA.mp3', function(){}, function(msg){alert('Error ' + msg);});
		audio.preloadFX('SI','audio/SI.mp3', function(){}, function(msg){alert('Error ' + msg);});
		$('.nota').bind('touchstart', function(){//bind escucha cualquier evento, 'touchstart'para donde den tap en la nota
			$(this).addClass('tocada');//funcionalidad css que agrega clase
			audio.play($(this).attr('id'));//play()reproducir la nota, $(this).attr('id') el atributo de quien lo invoco y lo reproduce	
			}).bind('touchend',function(){//cierra nota .bind
					$(this).removeClass('tocada');
				});//bind
		
	},false); //deviceready
});//ready