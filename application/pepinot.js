$(function() {
	//$("#intro").addClass("rojo");
	//$("#intro span").addClass("grande");
	//presentarTipo(nombreTipoPrincipal);
	//presentarTipo(nombreTipo2);
	
	var feli = crearTipo("Felipe");
	
	$("body").append(feli);
	
	$("body").click(function(){
		var p = pensar("Esto es buenisimo!!!!!!!");
		p.addClass('rojo');
		$("body").append(p);
		p.show();
		
		$(".tipo").toggle();
	});
	
	$("body").on("click",".tipo",function(e){
		e.stopPropagation();
		hablar("Me llamo "+ $(this).attr("id"));
		personajeSeleccionado = $(this).attr("id");
		
	});
	
	
	$("body").keydown(function(e){
		var per = $(".tipo#"+personajeSeleccionado);
		var offset = per.offset();
		if(e.which==39)
			per.offset({ top: offset.top, left: offset.left+5});
		else if(e.which == 37)
			per.offset({ top: offset.top, left: offset.left-5});
		else if(e.which == 38) {
			jump(per);
		}

		console.log(e.which);
	});
});

var nombreTipoPrincipal = "Pepinot";
var nombreTipo2 = "Tonipep";
var personajeSeleccionado = null;

function crearTipo(nombre) {
	var todoElTipo = $("<div class='tipo'/>");
	var cabeza = $("<div class='head' />");
	var cuerpo = $("<div class='body' />");
	var brazoIzq = $("<div class='arm left' />");
	var brazoDer = $("<div class='arm right' />");
	
	var piernaIzq = $("<div class='leg left' />");
	var piernaDer = $("<div class='leg right' />");
	
	todoElTipo.append(cabeza);
	todoElTipo.append(cuerpo);
	todoElTipo.append(brazoIzq);
	todoElTipo.append(brazoDer);
	todoElTipo.append(piernaIzq);
	todoElTipo.append(piernaDer);
	todoElTipo.attr('id',nombre);
	
	return todoElTipo;
}

//function presentarTipo(queTipo) {
//	var divTipo = $("<div class='tipo' />").append(queTipo);
//	divTipo.addClass("grande");
//	$("body").append(divTipo);
//	divTipo.show("slow");
//}

function hablar(palabras) {
	var pensamiento = pensar(palabras);
	$("body").append(pensamiento);
	pensamiento.show();
}

function pensar(palabras) {
	return $("<div class='globoTexto'>"+palabras+"</div>");
}

function jump(per) {
	var offset = per.offset();
	per.offset({ top: offset.top-10, left: offset.left});
	setTimeout(function(){
		per.offset({ top: offset.top, left: offset.left});	
	},500);	
	
}