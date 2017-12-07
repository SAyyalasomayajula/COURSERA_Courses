$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

/*food allergy*//* Food Disease */
$(document).on('click', function(event) {
  if (!$(event.target).closest('.dropdown').length) {
   $('.option-list, .search-box').hide();
  }
});
$('.select, .select2').click(function(event) {
  //$('.option-list, .search-box').hide();
  $(this).closest('.dropdown').find('.option-list, .search-box').toggle(); 
  $('.option-list a').click(function(){
    var select = $(this).text();
    $(this).closest('.dropdown').children('.select, .select2').text(select);
    $('.option-list, .search-box').hide();
  });
});