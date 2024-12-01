// Motion One
const { animate, inView, scroll } = Motion;

/* Presentation */

const titlePath = document.querySelector('.presentation-title svg path');
inView( titlePath, ( { target } ) => {
	animate(
		target,
		{
			strokeDashoffset: 0,
			fill: "#ffffff",
		},
		{
			duration: 8,
			delay: 1,
		}
	);
} );

const presentationImg = document.querySelector('.presentation-img img');
inView( presentationImg, ( { target } ) => {
	animate(
		target,
		{
			filter: ['blur(2px)', 'blur(0px)'],
			transform: ['translateX(150px) translateY(50px) rotate(3deg) scale(0.6)', 'translateX(0px) translateY(0px) rotate(-3deg) scale(1.3)'],
		},
		{
			duration: 2,
			delay: 1,
		}
	);
} );

/* History */

const cards = document.querySelectorAll('.card');

cards.forEach( ( card, index ) => {

	const scrollOptions = {
		target: card,
		offset: ["start end", "center center"]
	}

	scroll(
		animate(
			card,
			{
				scale: [ 1, 0.8 ],
			}
		), 
		scrollOptions
	);
} );
