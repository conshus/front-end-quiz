function englishMath(equation){
  let equationSplit= equation.split(' plus ');
  return numberify(equationSplit[0]) + numberify(equationSplit[1]);
}
console.log(englishMath('one hundred plus one hundred'));
