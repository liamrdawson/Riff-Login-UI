addEventListener('click', (e)=> {
  if (e.target.tagName === 'BUTTON') {
    var button = document.querySelector('#button');
    button.style.transition = 'height 0.5s', 'width 0.5s 0.5s';
    button.style.height = '35px';
    button.style.width = '80%';
  }
});

$('body').on('click', '.btn', function(e){
	e.preventDefault();
	if ( $(this).hasClass('play') ) {
		$(this).removeClass('play');
		$(this).addClass('pause');
	} else {
		$(this).removeClass('pause');
		$(this).addClass('play');
	}
});

addEventListener('click', (e)=>{
    e.preventDefault();
    let button = document.querySelector('#button');
    if (button) {

    }
});