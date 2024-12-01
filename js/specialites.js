
/* Presentation */

const presentationImg = document.querySelector( '.presentation-img' );
const presentationTitle = document.querySelector( '.presentation-title' );

const speImg = document.querySelector('.presentation-img-wrap');
Motion.inView( speImg, ( { target } ) => {
	Motion.animate(
		target,
		{
			filter: ['blur(7px)', 'blur(1px)'],
			transform: ['translateX(150px) translateY(50px) rotate(3deg) scale(0.9)', 'translateX(0px) translateY(0px) rotate(-3deg) scale(1)'],
		},
		{
			duration: 2,
			delay: 0,
			easing: 'ease-out',
		}
	);
} );

/* Sliders */

const sliders = document.querySelectorAll( '.swiper' );

sliders.forEach( ( slider ) => {

	const pagination = slider.querySelector( '.swiper-pagination' );
	const prev = slider.querySelector( '.prev' );
	const next = slider.querySelector( '.next' );

	new Swiper( slider, {
		pagination: {
			el: pagination,
			clickable: true,
		},
		navigation: {
			nextEl: next,
			prevEl: prev,
		},
	} );
} );

// Animation des sections 
const sections_titles = document.querySelectorAll('.slider-section-title');

sections_titles.forEach((section_title, index) => {
	Motion.inView(section_title, ({ target }) => {
		Motion.animate(
			target,
			{
				transform: [`translateX(${index % 2 === 0 ? '100px' : '-100px'})`, 'translateX(0)'],
				opacity: [0, 1],
			},
			{
				duration: 1,
				easing: 'ease-out',
			}
		);
	});
});

// Animation des titres de contenu

const slide_content_title = document.querySelectorAll('.slide-content-title');
const slide_content_text = document.querySelectorAll('.slide-content-text');

slide_content_title.forEach((title, index) => {
	Motion.inView(title, ({ target }) => {
		Motion.animate(
			target,
			{
				transform: [`translateY(10px)`, 'translateY(0)',],
				opacity: [0, 1],
			},
			{
				duration: 1,
				easing: 'ease-out',
			}
		);
	});
});

slide_content_text.forEach((text, index) => {
	Motion.inView(text, ({ target }) => {
		Motion.animate(
			target,
			{
				opacity: [0, 1],
			},
			{
				duration: 1,
				easing: 'ease-out',
			}
		);
	});
});
