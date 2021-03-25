// EXERCICE 3 : Tableaux, Objets, évènements...

// Créez un tableau avec trois valeurs à l'intérieur : 5124, true, et un objet qui contient une propriété.
let array1 = [
	5124,
	true,
	{
		dog: 'cocker spaniel'
	}
];

// Créez un objet avec trois propriétés
let objet2 = {
	prenom: 'jean-charles',
	nom   : 'bourseau',
	age   : 1000
};

// Dans l'HTML, il y a un texte, rentrez cet élément dans une constante,
// puis changez la couleur de son fond au clic en violet(purple/violet);
const titre1 = document.querySelector( 'h1' );

titre1.addEventListener( 'click', function () {
							 titre1.style.backgroundColor = 'purple';
							 titre1.style.color = 'white';
						 }
);
