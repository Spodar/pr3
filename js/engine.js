$(document).ready(function() {

	width = $(window).width();
	if (width > 974) {_current = 4};
	if (width <= 974) {_current = 3};
	if (width <= 750) {_current = 2};
    if (width <= 400) {_current = 1};

	$('#slider1').bxSlider({
		maxSlides: 1,
		minSlides: 1,
	    moveSlides: 1,
	    auto: true,
	    pause: 3500,
	    slideMargin: 0,
	    responsive: true,

	});

	$('#slider2').bxSlider({
		maxSlides: _current,
		minSlides: _current,
	    moveSlides: 1,
	    auto: true,
	    pause: 3500,
	    slideMargin: 0,
	    slideWidth: 400,
	});

	$('#slider3').bxSlider({
		maxSlides: 2,
		minSlides: 2,
	    moveSlides: 1,
	    auto: true,
	    pause: 3500,
	    slideMargin: 30,   
	});
});

$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $(".content").position();
        if (scroll > topDist.top) {
            $('nav').css({"position":"fixed","top":"0"});
        } else {
            $('nav').css({"position":"static","top":"auto"});
        }
    });

$(document).ready(function(){
	$('.back-buttom').hide();
	$(window).scroll(function () {if ($(this).scrollTop() > 500) 
		{$('.back-buttom').fadeIn("slow");} else {$('.back-buttom').fadeOut("fast");}});
	$('.back-buttom').click(function () 
		{$('body,html').animate({scrollTop: 0}, 1500); return false;});
	}); 
});

$(document).ready(function () {
    var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        disabled: [3,4],
        activate: function(e, tab) {
            $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
        },
        activateState: function(e, state) {
            //console.log(state);
            $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
        }
    });

    $('#start-rotation').on('click', function() {
        $tabs.responsiveTabs('startRotation', 1000);
    });
    $('#stop-rotation').on('click', function() {
        $tabs.responsiveTabs('stopRotation');
    });
    $('#start-rotation').on('click', function() {
        $tabs.responsiveTabs('active');
    });
    $('#enable-tab').on('click', function() {
        $tabs.responsiveTabs('enable', 3);
    });
    $('#disable-tab').on('click', function() {
        $tabs.responsiveTabs('disable', 3);
    });
    $('.select-tab').on('click', function() {
        $tabs.responsiveTabs('activate', $(this).val());
    });

});
