$('.list-group-item').on('click', function(){
	var $this = $( this );
	toggleSeat( $this );
});

var toggleSeat = function( $this ){
	$this.toggleClass('active');
	$this.children('.label').toggleClass('label-default').toggleClass('label-success');
	$this.children('#js_hide').toggleClass('hide');
};

$('#js_datePicker').datepicker();