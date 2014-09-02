var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$submit = $('#submit'),
	$list = $('#contenido'),
	$post = $('.item').first();


function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost() {
	return false;
}

// EVENTOS

$button.click(mostrarFormulario);
$form.submit('submit', agregarPost );

