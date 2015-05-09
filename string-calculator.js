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

/* function add(a, b){
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
    var a = 0;
    var b = 2;
    return a + b;
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
  if ( a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
    return a + b;
  }
  if ( a === "one" && b === "one"){
    var a = 1;
    var b = 1;
    return a + b;
  }
  if ( a === "one" && b === "two"){
    var a = 1;
    var b = 2;
    return a + b;
  }
  if ( a === "one" && b === "three"){
    var a = 1;
    var b = 3;
    return a + b;
  }
  if ( a === "one" && b === "four"){
    var a = 1;
    var b = 4;
  }
  if ( a === "one" && b === "five"){
    var a = 1;
    var b = 5;
  }
  if ( a === "one" && b === "six"){
    var a = 1;
    var b = 6;
  }
  if ( a === "one" && b === "seven"){
    var a = 1;
    var b = 7;
  }
  if ( a === "one" && b === "eight"){
    var a = 1;
    var b = 8;
  }
  if ( a === "one" && b === "nine"){
    var a = 1;
    var b = 9;
  }
  if ( a === "two" && b === "zero"){
    var a = 2;
    var b = 0;
  }
  if ( a === "two" && b === "one"){
    var a = 2;
    var b = 1;
  }
  if ( a === "two" && b === "two"){
    var a = 2;
    var b = 2;
  }
  if ( a === "two" && b === "three"){
    var a = 2;
    var b = 3;
  }
  if ( a === "two" && b === "four"){
    var a = 2;
    var b = 4;
  }
  if ( a === "two" && b === "five"){
    var a = 2;
    var b = 5;
  }
  if ( a === "two" && b === "six"){
    var a = 2;
    var b = 6;
  }
  if ( a === "two" && b === "seven"){
    var a = 2;
    var b = 7;
  }
  if ( a === "two" && b === "eight"){
    var a = 2;
    var b = 8;
  }
  if ( a === "two" && b === "nine"){
    var a = 2;
    var b = 9;
  }
  if ( a === "three" && b === "zero"){
    var a = 3;
    var b = 0;
  }
  if ( a === "three" && b === "one"){
    var a = 3;
    var b = 1;
  }
  if ( a === "three" && "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && "nine"){
    var a = 3;
    var b = 9;
  }
  if ( a === "four" && "zero"){
    var a = 4;
    var b = 0;
  }
  if ( a === "four" && "one"){
    var a = 4;
    var b = 1;
  }
  if ( a === "four" && b === "two"){
    var a = 4;
    var b = 2;
  }
  if ( a === "four" && b === "three"){
    var a = 4;
    var b = 3;
  }
  if ( a === "four" && b === "four"){
    var a = 4;
    var b = 4;
  }
  if ( a === "four" && b === "five"){
    var a = 4;
    var b = 5;
  }
  if (a === "four" && b === "six"){
    var a = 4;
    var b = 6;
  }
  if (a === "four" && b === "seven"){
    var a = 4;
    var b = 7;
  }
  if (a === "four" && b === "eight"){
    var a = 4;
    var b = 8;
  }
  if ( a === "four" && b === "nine"){
    var a = 4;
    var b = 9;
  }
  if ( a === "five" && b === "zero"){
    var a = 5;
    var b = 0;
  }
  if ( a === "five" && b === "one"){
    var a = 5;
    var b = 1;
  }
  if ( a === "five" && b === "two"){
    var a = 5;
    var b = 2;
  }
  if ( a === "five" && b === "three"){
    var a = 5;
    var b = 3;
  }
  if ( a === "five" && b === "four"){
    var a = 5;
    var b = 4;
  }
  if ( a === "five" && b === "five"){
    var a = 5;
    var b = 5;
  }
  if ( a === "five" && b === "six"){
    var a = 5;
    var b = 6;
  }
  if ( a === "five" && b === "seven"){
    var a = 5;
    var b = 7;
  }
  if ( a === "five" && b === "eight"){
    var a = 5;
    var b = 8;
  }
  if ( a === "five" && b === "nine"){
    var a = 5;
    var b = 9;
  }
  if ( a === "six" && b === "zero"){
    var a = 6;
    var b = 0;
  }
  if ( a === "six" && b === "one"){
    var a = 6;
    var b = 1;
  }
  if ( a === "six" && b === "two"){
    var a = 6;
    var b = 2;
  }
  if ( a === "six" && b === "three"){
    var a = 6;
    var b = 3;
  }
  if ( a === "six" && b === "four"){
    var a = 6;
    var b = 4;
  }
  if ( a === "six" && b === "five"){
    var a = 6;
    var b = 5;
  }
  if ( a === "six" && b === "six"){
    var a = 6;
    var b = 6;
  }
  if ( a === "six" && b === "seven"){
    var a = 6;
    var b = 7;
  }
  if ( a === "six" && b === "eight"){
    var a = 6;
    var b = 8;
  }
  if ( a === "six" && b === "nine"){
    var a = 6;
    var b = 9;
  }
  if ( a === "seven" && b === "zero"){
    var a = 7;
    var b = 0;
  }
  if ( a === "seven" && b === "one"){
    var a = 7;
    var b = 1;
  }
  if ( a === "seven" && b === "two"){
    var a = 7;
    var b = 2;
  }
  if ( a === "seven" && b === "three"){
    var a = 7;
    var b = 3;
  }
  if ( a === "seven" && b === "four"){
    var a = 7;
    var b = 4;
  }
  if ( a === "seven" && b === "five"){
    var a = 7;
    var b = 4;
  }
  if ( a === "seven" && b === "six"){
    var a = 7;
    var b = 5;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 8;
  }
  if ( a === "seven" && b === "eight"){
    var a = 7;
    var b = 8;
  }
  if ( a === "seven" && b === "nine"){
    var a = 7;
    var b = 9;
  }
  if ( a === "eight" && b === "zero"){
    var a = 8;
    var b = 0;
  }
  if ( a === "eight" && b === "one"){
    var a = 8;
    var b = 1;
  }
  if ( a === "eight" && b === "two"){
    var a = 8;
    var b = 2;
  }
  if ( a === "eight" && b === "three"){
    var a = 8;
    var b = 3;
  }
  if ( a === "eight" && b === "four"){
    var a = 8;
    var b = 4;
  }
  if ( a === "eight" && b === "five"){
    var a = 8;
    var b = 5;
  }
  if ( a === "eight" && b === "six"){
    var a = 8;
    var b = 6;
  }
  if ( a === "eight" && b === "seven"){
    var a = 8;
    var b = 7;
  }
  if ( a === "eight" && b === "eight"){
    var a = 8;
    var b = 8;
  }
  if ( a === "eight" && b === "nine"){
    var a = 8;
    var b = 9;
  }
  if ( a === "nine" && b === "zero"){
    var a = 9;
    var b = 0;
  }
  if ( a === "nine" && b === "one"){
    var a = 9;
    var b = 1;
  }
  if ( a === "nine" && b === "two"){
    var a = 9;
    var b = 2;
  }
  if ( a === "nine" && b === "three"){
    var a = 9;
    var b = 3;
  }
  if ( a === "nine" && b === "four"){
    var a = 9;
    var b = 4;
  }
  if ( a === "nine" && b === "five"){
    var a = 9;
    var b = 5;
  }
  if ( a === "nine" && b === "six"){
    var a = 9;
    var b = 6;
  }
  if ( a === "nine" && b === "seven"){
    var a = 9;
    var b = 7;
  }
  if ( a === "nine" && b === "eight"){
    var a = 9;
    var b = 8;
  }
  if ( a === "nine" && b === "nine"){
    var a = 9;
    var b = 9;
  }
  return a + b
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

expect(add("one", "zero")).to.equal(1);
expect(add("one", "one")).to.equal(2);
expect(add("one", "two")).to.equal(3);
expect(add("one", "three")).to.equal(4);
expect(add("one", "four")).to.equal(5);
expect(add("one", "five")).to.equal(6);
expect(add("one", "six")).to.equal(7);
expect(add("one", "seven")).to.equal(8);
expect(add("one", "eight")).to.equal(9);
expect(add("one", "nine")).to.equal(10);

expect(add("two", "zero")).to.equal(2);
expect(add("two", "one")).to.equal(3);
expect(add("two", "two")).to.equal(4);
expect(add("two", "three")).to.equal(5);
expect(add("two", "four")).to.equal(6);
expect(add("two", "five")).to.equal(7);
expect(add("two", "six")).to.equal(8);
expect(add("two", "seven")).to.equal(9);
expect(add("two", "eight")).to.equal(10);
expect(add("two", "nine")).to.equal(11);



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
