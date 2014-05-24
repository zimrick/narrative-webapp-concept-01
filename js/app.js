// Narrative web app concept
// Richard Zimerman
// May 2014
// Note: unfinished code ahead!!!
// ====================================================
'use strict';
// ====================================================
$(document).ready(function() {

	var $frame = $('#frame'),
			$nav = $('#navigation');

	$frame.find('li').height($(window).height());
	$frame.find('li:first-child').css('opacity', 1);
	$nav.find('li:first-child').addClass('active');

	window.onresize = function() {
		$frame.find('li').height($(window).height());
		sly.reload();
	};

	var slyOptions = {
		horizontal: 0,
		itemNav:'basic',
		smart:1,
		scrollBy:0,
		mouseDragging: 0,
		speed:0,
		activateOn:'click'
	};

	var sly = new Sly($frame, slyOptions).init();
			sly.activate(0);

	// Chapter switching animation
	// ==============================
	var current = 0;
	var triggerSwitch = function(target) {
		var t = parseInt(target);
		$('.title').velocity({ bottom: ['-500px',0], opacity: [ 0, 1 ] }, 800, 'ease-out');
		$('#frame').find('li:nth-child(' + (current + 1) + ')')
			.velocity({
				opacity: [ 0, 1 ]
				// scale: [ 1, 1.1 ]
			}, 600, function() {
				sly.activate(t);
				$('#frame').find('li:nth-child(' + (t + 1) + ')')
					.velocity({
						opacity: [ 1, 0 ]
						// scale: [ 1.1, 1 ]
					}, 600, function() {
						$('.title').velocity({ bottom: [0,'-500px'], opacity: [ 1, 0 ] }, 800, 'ease-out');
						current = t;
					});
			});
	};

	var $subNav = $('#subNav');
	var lastOpenSlide = 0;
	var triggerSubNav = function(identifier) {
		if($subNav.hasClass('open')) {
			if(lastOpenSlide == identifier) {
				$subNav
					.velocity({
						translateX: [ 0, '-201px' ],
						opacity: [ 0, 1 ]
					}, 300, 'ease-out', function() {
						$subNav.removeClass('open');
						// lastOpenSlide = identifier;
					});
			}
			else {
				$subNav
					.velocity({
						translateX: [ 0, '-201px' ],
						opacity: [ 0, 1 ]
					}, 300, 'ease-out', function() {
						// Call different submenu
						$subNav.velocity('reverse');
						lastOpenSlide = identifier;
					});
			}
		}
		else {
			$subNav
				.velocity({
					translateX: [ '-201px', 0 ],
					opacity: [ 1, 0 ]
				}, 300, 'ease-out', function() {
					$subNav.addClass('open');
					lastOpenSlide = identifier;
				});
		}
	};

	// Click event to switch between chapters
	// ==============================
	var currentChapter = 0;
	$nav.find('a').on('click', function(e) {
		e.preventDefault();
		var self = $(this);
		$subNav.find('.subnav-selection').css('display', 'none');
		$subNav.find('.subnav-selection:nth-child(' + (parseInt(self.attr('data-aim')) + 1) + ')').css('display', 'block');
		triggerSubNav(self.attr('data-aim'));
	});

	var $subnavSelection = $('#subNav');
	$subnavSelection.find('a').on('click', function(e) {
		e.preventDefault();
		var self = $(this);
		if(self.attr('data-aim') != currentChapter) {
			var $navLi = $nav.find('li').find('a');
			$navLi.parent().removeClass('active');
			triggerSwitch(self.attr('data-aim'));
			$navLi.each(function() {
				if($(this).attr('data-aim') == self.attr('data-aim')) {
					$(this).parent().addClass('active');
				}
			});
			currentChapter = self.attr('data-aim');
		}
		triggerSubNav(self.attr('data-aim'));
	});

	// Subsliders for each chapter
	// ==============================
	var $subFrame0 = $('#subframe0'),
			$subFrame1 = $('#subframe1'),
			$subFrame2 = $('#subframe2'),
			$subFrame3 = $('#subframe3'),
			$subFrame4 = $('#subframe4'),
			$subFrame5 = $('#subframe5'),
			$subFrame6 = $('#subframe6'),
			$subFrame7 = $('#subframe7');

	var subSlyOptions = {
		horizontal: 0,
		itemNav:'basic',
		smart:1,
		scrollBy:1,
		mouseDragging: 1,
		speed:1000,
		activateOn:'click'
	};

	// Introduction
	var subSly0 = new Sly($subFrame0, subSlyOptions).init();
			subSly0.activate(0);

	$('#subframe0').find('.nextSlide').on('click', function() {
		subSly0.next();
	});

	// Chapter 1
	var subSly1 = new Sly($subFrame1, subSlyOptions).init();
			subSly1.activate(0);

	$('#subframe1').find('.nextSlide').on('click', function() {
		subSly1.next();
	});

	// Chapter 2
	var subSly2 = new Sly($subFrame2, subSlyOptions).init();
			subSly2.activate(0);

	$('#subframe2').find('.nextSlide').on('click', function() {
		subSly2.next();
	});

	// Chapter 3
	var subSly3 = new Sly($subFrame3, subSlyOptions).init();
			subSly3.activate(0);

	$('#subframe3').find('.nextSlide').on('click', function() {
		subSly3.next();
	});

	// Chapter 4
	var subSly4 = new Sly($subFrame4, subSlyOptions).init();
			subSly4.activate(0);

	$('#subframe4').find('.nextSlide').on('click', function() {
		subSly4.next();
	});

	// Chapter 5
	var subSly5 = new Sly($subFrame5, subSlyOptions).init();
			subSly5.activate(0);

	$('#subframe5').find('.nextSlide').on('click', function() {
		subSly5.next();
	});

	// Chapter 6
	var subSly6 = new Sly($subFrame6, subSlyOptions).init();
			subSly6.activate(0);

	$('#subframe6').find('.nextSlide').on('click', function() {
		subSly6.next();
	});

	// Conclusion
	var subSly7 = new Sly($subFrame7, subSlyOptions).init();
			subSly7.activate(0);

	$('#subframe7').find('.nextSlide').on('click', function() {
		subSly7.next();
	});

});