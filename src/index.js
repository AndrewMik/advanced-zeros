module.exports = function getZerosCount(number, base) {
  // your implementation
  var primeBaseDeviders = [], powsOfPrimeBaseDeviders = [];

  var i = 2;

  while (i <= base) {
    if (base % i == 0) {
      base = base / i;
      primeBaseDeviders.push(i);
    } else {
      i++;
    }
  }


  var pow, numberClone;

  for (i = 0; i < primeBaseDeviders.length; i++) {
    pow = 0;
    numberClone = number;

    while (numberClone != 0) {
      numberClone = Math.floor(numberClone / primeBaseDeviders[i]);
      pow += numberClone;
    }
    powsOfPrimeBaseDeviders.push(pow);
  }


  var samePows = 1;

  if (powsOfPrimeBaseDeviders.length > 1) {

    for (i = 0; i < powsOfPrimeBaseDeviders.length - 1; i++) {
      if (powsOfPrimeBaseDeviders[i] == powsOfPrimeBaseDeviders[i+1]) {
        samePows++;
      } else if (samePows != 1) {
        powsOfPrimeBaseDeviders[i] = Math.floor(powsOfPrimeBaseDeviders[i] / samePows);
        samePows = 1;
      }
      if ( (i+1) == powsOfPrimeBaseDeviders.length - 1) {
        powsOfPrimeBaseDeviders[i] = Math.floor(powsOfPrimeBaseDeviders[i] / samePows);
      }
    }
  }


  var minPow = powsOfPrimeBaseDeviders[0];

  for (i = 1; i < powsOfPrimeBaseDeviders.length; i++) {
    if (minPow > powsOfPrimeBaseDeviders[i]) {
      minPow = powsOfPrimeBaseDeviders[i];
    }
  }

  return minPow;
}
