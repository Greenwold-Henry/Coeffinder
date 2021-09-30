const prompt = require('prompt-sync')({ sigint: true });

let SequenceSum = 0;
let InputCo = [];
let InputSeq = [];
let DifferenceNumber = 0
let InputArray = [];
let DifferenceArr = [];
let numberSuffixesInWords = ['th', 'st', 'cnd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
let commonDifference = false
let RainDropDifference = [];


let ModeSwitcher = prompt('Type 1 for Coefficient Input. Type 2 for Sequence Input: ')



if (ModeSwitcher === '1') {


  let FunctionDegree = prompt('What is the degree of your function?: ')
  for (let i = 0; i <= FunctionDegree; i++) {

    let PartialCo = prompt('What is the x ^ ' + i + ' Coefficient: ', 0);
    InputCo.push(PartialCo);
  }

  while (InputCo[InputCo.length - 1] == 0) {

    InputCo.pop();
    FunctionDegree = FunctionDegree - 1
  }

  for (let z = 1; z < InputCo.length + 2; z++) {

    SequenceSum = 0
    for (let i = 0; i < InputCo.length; i++) {
      SequenceSum += (InputCo[i] * Math.pow(z, i));
    }
    console.log(SequenceSum)
  }

} else if (ModeSwitcher === '2') {

  let SequenceLength = prompt('How many terms does your sequence have?: ');

  function Factorial(i) {
    if (i === 0 || i === 1) {
      return 1;

    } else {
      return i * Factorial(i - 1);
    }
  }

  function Difference(arr) {
    for (let i = 0; i <= SequenceLength - 2 - DifferenceNumber; i++) {
      DifferenceArr.push(arr[i + 1] - arr[i])
    }
    DifferenceNumber += 1
  }

  for (let i = 1; i <= SequenceLength; i++) {

    let PartialSeq = prompt('What is the ' + i + numberSuffixesInWords[i % 10] + ' of your sequence? ');
    InputSeq.push(PartialSeq);


  }



  InputArray.push(...InputSeq);
  console.log('Input Array ' + InputArray)

  function doDifference(cumulArray) {

    Difference(cumulArray);
    console.log('Difference Array ' + DifferenceArr)


    if (DifferenceArr.every((val, ind, arr) => val === arr[0]) === false && DifferenceArr.length >= 2) {

      while (DifferenceArr.every((val, ind, arr) => val === arr[0]) === false) {

        cumulArray = [];
        cumulArray.push(...DifferenceArr);
        DifferenceArr = [];
        Difference(cumulArray);
        console.log(DifferenceArr)
        console.log(DifferenceNumber)
      }

    }
    if (DifferenceArr.every((val, ind, arr) => val === arr[0]) === true && InputSeq.length == SequenceLength) {

      if (DifferenceArr.length >= 2) {

        console.log('Done! :D')
        commonDifference = true

      } else if (DifferenceArr.length < 2) {

        console.log('There seems to be a problem. Either your sequence is not polynomial, or I need more terms.')

      }
      if (CommonDifference = true) {
        console.log('You have entered the hard part of the code')
        console.log((DifferenceArr[0] / Factorial(DifferenceNumber)) + ' x^' + DifferenceNumber)

        for (i = 0; i <= InputSeq.length - 1; i++) {
          RainDropDifference[i] = InputSeq[i] - ((DifferenceArr[0] / Factorial(DifferenceNumber) * Math.pow(i + 1, DifferenceNumber)))
        }

        console.log(RainDropDifference)
        RainDropDifference = [];
      }
    }
  }

  doDifference(InputArray);





/*      DifferenceArr.every(function(value, index, arr) {
         return index === 0  
         value === arr[index-1]
       });
   
       DifferenceArr.every((val, ind, arr) => val === arr[0]); */



} else {
  console.log("Sorry, I only have 2 features :/")
}


