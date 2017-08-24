function myMax(array) {
//prend une array et retourne le nombre maximum

	var max = array[0];
	for (var i = 1; i < array.length; i++) {
		while (max > array[i]) {
			return max;
		}
		max = array[i];
	}
	return max;
}

console.log(myMax([1, 5, 12, 3, 7, 0]));



function vowel_count() {
//prend un string et retourne le nombre de voyelles
}

function reverse() {
//prend un string et renvoie les caractères en position inverse
}

