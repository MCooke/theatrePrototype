$('.seat').on('click', function(){
	var $this = $( this );
	toggleSeat( $this );
});

var toggleSeat = function( $this ){
	$this.toggleClass('active');
	$this.children('.seat_name').toggleClass('label-default').toggleClass('label-success');
	$this.find('#js_hide').toggleClass('hide');
};

$('#js_datePicker').datepicker();

$('.gallery').slick({});