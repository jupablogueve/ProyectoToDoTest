$(document).ready(inicioEventos);

function inicioEventos() 
	{
		$('main>div>button').click(crearNuevoTab);
		$(document).on('click', 'a', activar);
		$('main>button').click(agregarTarea);
		$('main>input').focus(vaciarcasilla);
		$('main>input').blur(llenarcasilla);
	}

var listaTabs = {};
var contador=0;	
var TabActivo='';

function llenarcasilla()
	{
		if(!$('main>input').val())
			{
			$('main>input').val('Escribe tu nueva tarea');
			}
	}

function vaciarcasilla() 
	{
		$('main>input').val('');
	}
	
function escribirNombreTab()
	{
		
	}
	
function crearNuevoTab()
	{
		contador++;
		listaTabs['Tab'+contador]=[];
		$('div > ul').html(dibujarTab());		
		$('a').trigger('click');
	}

function dibujarTab()
	{
		var pasteTabs='';
		for (propiedad in listaTabs)
			{
				pasteTabs=pasteTabs+"<li>"+"<a href='"+"#"+propiedad+"'>"+propiedad+"</a>"+"</li>";
			}
		return pasteTabs;
	}

function activar()
	{	
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
		TabActivo=$('.tabs > li.active >a').attr('href');
		TabActivo=TabActivo.substring(1,TabActivo.length);
		pegarTarea();
	}	
//--------------------------------------------------------------------------------------------------------------------------------
function agregarTarea()
	{
		listaTabs[TabActivo].push($('main>input').val());
		pegarTarea();
	}

function pegarTarea()
	{
		$('main>ul').html('');
		for (var f=0; f<listaTabs[TabActivo].length; f++)
			{
				$('main>ul').append(traerTemplate(listaTabs[TabActivo][f]));
			}
	}		
	
function traerTemplate(tarea) 
	{
		return 	"<li>"+
					"<label>"+
						"<input type='checkbox'><span></span>"+
					"</label>"+
					"<span>"+tarea+"</span>"+
				"</li>";	
	}

//-------------------------------------------------------------------------------------------------------------------------------		
		
		//$('ul').data('tarea')	
		//var activado = $('.tabs > li.active');
		//$(this).parent().toggle();
		//data-tarea="tarea1"
		//$().data(nombre,valor)
		
		//activado.removeClass('active');
		/* $(TabActivo).removeClass('active');
		$(TabActivo).addClass('hide'); */ 
		
		
/* 		$(this).parents('li').addClass('active');
		hide displaying tab content
		$(selectorTabActivo).removeClass('active');
		$(selectorTabActivo).addClass('hide');
 
		show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');  */		
		//$(TabActivo).attr('class','listaTareas active');
		//$(TabActivo).siblings('ul').attr('class','listaTareas hide');
		//$('#botonTab').click(crearNuevoTab);