$(function(){
	slogan();
	$('.arrastrar').draggable();
	$('#pantalon').droppable({
      drop: function(event, ui) {
        var origen = ui.draggable;
		$(this).css('background-image',$(origen).css('background-image'));
		$(origen).hide();
      }
    });
});
function slogan(){
	$('#slogan').fadeIn('slow').delay(4000).fadeOut('slow',contenedor);
}
function contenedor(){
	$('#contenedor').delay(3000).fadeIn('slow');
}
	

		
