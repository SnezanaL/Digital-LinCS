
function scroll_to_class(chosen_class) {
	var nav_height = $('nav').outerHeight();
	var scroll_to = $(chosen_class).offset().top - nav_height;

	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {

	/*
	    Fullscreen background
	*/
	// $.backstretch("assets/img/backgrounds/1.jpg");

	/*
	    Multi Step Form
	*/
	$('.msf-form form fieldset:first-child').fadeIn('slow');
	
	// next step
	$('.msf-form form .btn-next').on('click', function() {
		$(this).parents('fieldset').fadeOut(400, function() {
	    	$(this).next().fadeIn();
			scroll_to_class('.msf-form');
	    });
	});
	
	// previous step
	$('.msf-form form .btn-previous').on('click', function() {
		$(this).parents('fieldset').fadeOut(400, function() {
			$(this).prev().fadeIn();
			scroll_to_class('.msf-form');
		});
    });

    $('#birthday').bootstrapBirthday({
        dateFormat: 'littleEndian',
        widget: {
          wrapper: {
            tag: 'div',
            class: 'row'
          },
          wrapperDay: {
            use: true,
            tag: 'div',
            class: 'col-sm-4'
          },
          wrapperYear: {
            use: true,
            tag: 'div',
            class: 'col-sm-4'
          },
          wrapperMonth: {
            use: true,
            tag: 'div',
            class: 'col-sm-4'
          },
          selectYear: {
            name: 'birthday[year]',
            class: 'form-control'
          },
          selectMonth: {
            name: 'birthday[month]',
            class: 'form-control'
          },
          selectDay: {
            name: 'birthday[day]',
            class: 'form-control'
          }
        }
      });
      $('#message1').on('shown.bs.modal', function () {
        $('#myInput').focus()
      })
	
});
