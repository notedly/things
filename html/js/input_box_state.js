$(function(){

	var inputState = (function(){

		var ipTxt = $('.box_ip .ip_default') ;

		if( ipTxt.length < 1 ) return ;

		console.log( 'inputState start' ) ;

		ipTxt.on('focus', function(){

			let boxIp = $(this).closest('.box_ip') ;
			if( boxIp.hasClass( 'state_done' ) ) {
				boxIp.removeClass( 'state_done' )
			}
			boxIp.addClass( 'state_on' ) ;

		}).on('blur', function() {

			let boxIp = $(this).closest('.box_ip') ;
			if( $(this).val().length < 1 ) {
				boxIp.removeClass( 'state_done state_on' ) ;
			} else if ( $(this).val().length > 0 ){
				boxIp.removeClass( 'state_on' ) ;
				boxIp.addClass( 'state_done' ) ;
			}

		}) ;


	})() ;

}) ;