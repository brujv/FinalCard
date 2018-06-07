var numberCard;

do {
	numberCard = prompt('Digite o número do cartão:');
	if (numberCard.length === 0) {
		alert('Número Errado');
	}
} while (numberCard.length === 0);

function isValidCard(numberCard) {
	var sumPair = 0;
	var sumOdd = 0;
	var sum = 0;
	var form;
	var form2;
	var pairNumberCard = [];
	var oddNumbercard = [];
	var finalNumberCard = [];

	arrNumberCard = numberCard.split('');
	for (i = 0; i < arrNumberCard.length; i++) {
		arrNumberCard[i] = +parseInt(arrNumberCard[i]);
	}
	{
		var revNumberCard = arrNumberCard.reverse();
	}

	for (i = 0; i < revNumberCard.length; i++) {
		if (i % 2 !== 0) {
			form = revNumberCard[i] * 2;
      		if (form > 9) {
				form2 = form - 9;
				pairNumberCard.push(form2);
			} else {
				pairNumberCard.push(form);
			}
		} else {
			oddNumbercard.push(revNumberCard[i]);
		}
	}

	for (i = 0; i < pairNumberCard.length; i++) {
		sumPair += pairNumberCard[i];
	}
	for (i = 0; i < oddNumbercard.length; i++) {
		sumOdd += oddNumbercard[i];
	}

	sum = sumOdd + sumPair;
	if (sum % 10 === 0 && sum !==0) {
		alert('Cartão Válido');
		return true;
	} else {
		alert('Cartão Inválido');
	}
	return false;
}


isValidCard(numberCard);
