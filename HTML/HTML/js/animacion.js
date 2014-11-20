window.addEvent('load',function(){	

var ancho =window.getSize().x;
var alto =window.getSize().y;
slogan();
function slogan(){
				$('slogan').set('morph', {
					duration : 2000,
					transition: 'linear'	
				});
				$('slogan').morph({
				'opacity':1
				});	
				intro.delay(4000);
}
function intro(){
				$('slogan').set('morph', {
					duration : 2000,
					transition: 'linear'	
				});
				$('slogan').morph({
				'opacity':0
				});	
				contenedor.delay(3000);
}
function contenedor(){
	$('slogan').setStyles({
			'display' :'none'
	});
	$('contenedor').setStyles({
			'display' :'block'
	});
}
});
	

		
