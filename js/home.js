// Motion One
const { animate, inView, scroll, timeline, stagger } = Motion;

/* Intro */

const introImg = document.querySelectorAll('.intro-img');
inView( introImg, ( { target } ) => {
	animate(
		target,
		{
			filter: [ 'brightness(0.7) blur(6px) grayscale(1)', 'brightness(0.7) blur(2px) grayscale(0)' ]
		},
		{
			duration: 5,
			delay: 0,
		}
	);
} );

const sequence = [
	[
		".intro-title span",
		{
			opacity: [0, 1],
		},
		{ duration: 0.3, delay: stagger(0.1) }
	]
]
timeline(sequence)

const description = document.querySelectorAll('.intro-description');
inView( description, ( { target } ) => {
	animate(
		target,
		{
			transform: ['translateY(100px)', 'translateY(0px)'],
			transform: ['scale(0.5)', 'scale(1)'],
			opacity: [0, 1],
		},
		{
			duration: 2,
			delay: 2,
		}
	);
} );

const pathLeft = document.querySelector('#path-left');
const pathRight = document.querySelector('#path-right');
const pathCenter = document.querySelector('#path-center');

inView( pathLeft, ( { target } ) => {
	animate(
		target,
		{ y: [500, 0] },
		{ duration: 3 }
	);  
} );
inView( pathRight, ( { target } ) => {
	animate(
		target,
		{ y: [-500, 0] },
		{ duration: 3 }
	);
} );
inView( pathCenter, ( { target } ) => {
	animate(
		target,
		{ opacity: [0, 1] },
		{ duration: 3 }
	);
} );

/* Inscription */

const buttonLeft = document.querySelector('#inscription-button-left');
const buttonRight = document.querySelector('#inscription-button-right');

inView( buttonLeft, ( { target } ) => {
	animate(
		target,
		{ x: [-100, 0] },
		{ duration: 3 }
	);
} );

inView( buttonRight, ( { target } ) => {
	animate(
		target,
		{ x: [100, 0] },
		{ duration: 3 }
	);
} );

/* Actualites */

const cardsRight = document.querySelectorAll('.card-right');
const cardsLeft = document.querySelectorAll('.card-left');




cardsRight.forEach( ( card, index ) => {

	const scrollOptions = {
		target: card,
		offset: ["start end", "center center"]
	}

	scroll(
		animate(
			card,
			{
				transform: ['translateX(300px)', 'translateX(0px)'],
				// opacity: [0, 1],
			}
		), 
		scrollOptions
	);
} );

cardsLeft.forEach( ( card, index ) => {

	const scrollOptions = {
		target: card,
		offset: ["start end", "center center"]
	}

	scroll(
		animate(
			card,
			{
				transform: ['translateX(-300px)', 'translateX(0px)'],
				opacity: [0, 1],
			}
		), 
		scrollOptions
	);
} );

