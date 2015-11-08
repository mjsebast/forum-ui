angular.module('linguo').service('ForumService', [function(){
	this.language = 'en';
	this.threads = [
		{
			id: 1,
			title: {
				en: 'This is an awesome title',
				es: 'Este es un título increíble'
			},
			user: 'other_guy', 
			image: 'https://files.producthunt.com/cdc0c68a-1472-4f0a-b676-80f9406bc837',
			message: {
				en: 'Wow, I really can\'t believe how awesome this title is. Can you? This is really amazing to be honest with you. We\'re living the dream.',
				es: 'Realmente no puedo creer lo increíble este título es . ¿Puedes? Esto es realmente increíble para ser honesto con usted. Estamos viviendo el sueño.'
			},
			responses: [
				{
					comment:{
						en: 'Hello, how are you?',
						es: '¿Hola, cómo estás?'
					},
					responses: [
						{
							comment: {
								en: 'Hello Juan',
								es: 'Hola Juan'
							}
						},
						{
							comment: {
								en: 'I\'m currently trying to learn Ruby/Rails, so I don\'t' + 
								'think this is good for me (yet), but one possible suggestion: It might be helpful' +
								' to have difficulty levels associated with each cast? Just a thought. I have a similar' + 
								' complaint about Railscasts. Tons of videos, but I have no idea where to start as a beginner',
								
								es: 'Actualmente estoy tratando de aprender de Ruby / Rails, así que no creo que esto es bueno para mí' + 
								' ( aún) , pero una posible sugerencia: podría ser útil contar con niveles de dificultad' + 
								'asociados con cada reparto? Solo un pensamiento. Tengo una queja similar sobre Railscasts . ' +
								'Toneladas de vídeos, pero no tengo ni idea de por dónde empezar como un principiante'
							}
						}
					]
				},
				{
					comment:{
						en: 'I\'m fine',
						es: 'Estoy bien'
					}
				}
			]
		}, 
		{
			id: 2,
			user: 'this_guy',
			image: 'https://i.imgur.com/rFcH6gS.jpg',
			title: {
				en: 'More stuff',
				es: 'Más cosas'
			}
		}
	];
}]);