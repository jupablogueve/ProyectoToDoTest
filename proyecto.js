$(document).ready(inicioEventos);

function inicioEventos() 
	{
		$('main>div>button').click(nombreLista);
		$('div>span>button').click(crearNuevoTab);
		$(document).on('click', 'a', activar);
		$('main>button').click(agregarTarea);
		$('main>input').focus(vaciarCasilla).blur(llenarCasilla);;
		$('div>span>input').focus(vaciarCasilla).blur(llenarCasilla);	
	}

var listaTabs = {};
var contador=0;	
var TabActivo='';
var Tab='';

function llenarCasilla()
	{
		if(!$('main>input').val())
			{
				$('main>input').val('Escribe tu nueva tarea');
			}
		else if(!$('div>span>input').val())
			{
				$('div>span>input').val('Escribe nombre de lista');
			}
	}

function vaciarCasilla() 
	{
		$(this).val('');
	}
	
function nombreLista()
	{
		$('div>span>input').toggle('slow');
		$('div>span>button').toggle('slow');
		if($('main>input').attr('class')=='visible')
			{
				$('main>input').toggle('slow');
				$('main>button').toggle('slow');
			}
		var signo=$('main>div>button').html();
		if(signo=='+')
			{
				$('main>div>button').html('-');
				signo='';
			}
		else if(signo=='-')
			{
				$('main>div>button').html('+');	
			}
		llenarCasilla();
		
	}
	
function crearNuevoTab()
	{
		Tab=$('div>span>input').val();
		listaTabs[Tab]=[];
		$('div > ul').html(dibujarTab());		
		$('a').trigger('click');
		cambioVisibilidad();
		$('main>input').attr('class','visible');
		$('main>button').attr('class','visible');
		$('main>div>button').html('+');
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

function cambioVisibilidad()
	{
		$('div>span>input').toggle('slow');
		$('div>span>button').toggle('slow');
		$('main>input').toggle('slow');
		$('main>button').toggle('slow');
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
		$('.checkeado').attr('checked',true);
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
