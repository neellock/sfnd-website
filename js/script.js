
/* Header */

const header = document.querySelector('.header');
Motion.scroll(
	Motion.animate(
		header,
		{
			backgroundColor: ['transparent', '#ffffff'],
			color: '#111111',
		}
	),
	{
		offset: ["100vh", "110vh"]
	}
)

MicroModal.init( {
	disableScroll: true,
} );
