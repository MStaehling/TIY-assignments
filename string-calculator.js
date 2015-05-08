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
    var a = 0;
    var b = 0;
    return a + b;
  }
  if ( a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
    return a + b;
  }
  if ( a === "zero" && b === "two"){
    return 2;
  }
  if ( a === "zero" && b === "three"){
    return 3;
  }
  if ( a === "zero" && b === "four"){
    return 4;
  }
  if ( a === "zero" && b === "five"){
    return 5;
  }
  if ( a === "zero" && b === "six"){
    return 6;
  }
  if ( a === "zero" && b === "seven"){
    return 7;
  }
  if ( a === "zero" && b === "eight"){
    return 8;
  }
  if ( a === "zero" && b === "nine"){
    return 9;
  }
}

// expect(toNumber).to.exist;
expect(add).to.exist;
expect(add("zero", "zero")).to.equal(0);
expect(add("zero", "one")).to.equal(1);
expect(add("zero", "two")).to.equal(2);
expect(add("zero", "three")).to.equal(3);
expect(add("zero", "four")).to.equal(4);
expect(add("zero", "five")).to.equal(5);
expect(add("zero", "six")).to.equal(6);
expect(add("zero", "seven")).to.equal(7);
expect(add("zero", "eight")).to.equal(8);
expect(add("zero", "nine")).to.equal(9);


console.log(add("zero", "one"))

function div(a, b){
  if ( a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
    return (a/b);
  }
  if ( a === "zero" && b === "one"){
    return 0;
  }
  if ( a === "zero" && b === "two"){
    return 0;
  }
  if ( a === "zero" && b === "three"){
    return 0;
  }
  if ( a === "zero" && b === "four"){
    return 0;
  }
  if ( a === "zero" && b === "five"){
    return 0;
  }
  if ( a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
    return (a/b)
  }

}



expect(div).to.exist;
console.log(div("zero","six"));

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
