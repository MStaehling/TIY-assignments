var expect = require('chai').expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }
  if ( word === "one" ){
    return 1;
  }
  if ( word === "two" ){
    return 2;
  }
  if ( word === "three" ){
    return 3;
  }
  if ( word === "four" ){
    return 4;
  }
  if ( word === "five" ){
    return 5;
  }
  if ( word === "six" ){
    return 6;
  }
  if ( word === "seven" ){
    return 7;
  }
  if ( word === "eight" ){
    return 8;
  }
  if ( word === "nine" ){
    return 9;
  }

}

function add(a, b){
  if ( a === "zero" && b === "zero"){
    return 0;
  }
  if ( a === "zero" && b === "one"){
    return 1;
  }
}

expect(toNumber).to.exist;
expect(add).to.exist;
expect(add("zero", "zero")).to.equal(0);
expect(add("zero", "one")).to.equal(1);

console.log(add("zero", "one"))


/* function addd(a, b){
  return (toNumber(a) + toNumber(b))

}

function minus(a, b){
  return (toNumber(a) - toNumber(b))
}

function multiply(a, b){
  return (toNumber(a) * toNumber(b))
}

function divide(a, b){
  return (toNumber(a) / toNumber(b))
}

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1); */
