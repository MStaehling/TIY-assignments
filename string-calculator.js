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

/*
Nightmare Mode

function add(a, b){
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
}*/

expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);

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
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  if ( a === "four" && b === "zero"){
    var a = 4;
    var b = 0;
  }
  if ( a === "four" && b === "one"){
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
    var b = 5;
  }
  if ( a === "seven" && b === "six"){
    var a = 7;
    var b = 6;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
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

expect(add("three", "zero")).to.equal(3);
expect(add("three", "one")).to.equal(4);
expect(add("three", "two")).to.equal(5);
expect(add("three", "three")).to.equal(6);
expect(add("three", "four")).to.equal(7);
expect(add("three", "five")).to.equal(8);
expect(add("three", "six")).to.equal(9);
expect(add("three", "seven")).to.equal(10);
expect(add("three", "eight")).to.equal(11);
expect(add("three", "nine")).to.equal(12);

expect(add("four", "zero")).to.equal(4);
expect(add("four", "one")).to.equal(5);
expect(add("four", "two")).to.equal(6);
expect(add("four", "three")).to.equal(7);
expect(add("four", "four")).to.equal(8);
expect(add("four", "five")).to.equal(9);
expect(add("four", "six")).to.equal(10);
expect(add("four", "seven")).to.equal(11);
expect(add("four", "eight")).to.equal(12);
expect(add("four", "nine")).to.equal(13);

expect(add("five", "zero")).to.equal(5);
expect(add("five", "one")).to.equal(6);
expect(add("five", "two")).to.equal(7);
expect(add("five", "three")).to.equal(8);
expect(add("five", "four")).to.equal(9);
expect(add("five", "five")).to.equal(10);
expect(add("five", "six")).to.equal(11);
expect(add("five", "seven")).to.equal(12);
expect(add("five", "eight")).to.equal(13);
expect(add("five", "nine")).to.equal(14);

expect(add("six", "zero")).to.equal(6);
expect(add("six", "one")).to.equal(7);
expect(add("six", "two")).to.equal(8);
expect(add("six", "three")).to.equal(9);
expect(add("six", "four")).to.equal(10);
expect(add("six", "five")).to.equal(11);
expect(add("six", "six")).to.equal(12);
expect(add("six", "seven")).to.equal(13);
expect(add("six", "eight")).to.equal(14);
expect(add("six", "nine")).to.equal(15);

expect(add("seven", "zero")).to.equal(7);
expect(add("seven", "one")).to.equal(8);
expect(add("seven", "two")).to.equal(9);
expect(add("seven", "three")).to.equal(10);
expect(add("seven", "four")).to.equal(11);
expect(add("seven", "five")).to.equal(12);
expect(add("seven", "six")).to.equal(13);
expect(add("seven", "seven")).to.equal(14);
expect(add("seven", "eight")).to.equal(15);
expect(add("seven", "nine")).to.equal(16);

expect(add("eight", "zero")).to.equal(8);
expect(add("eight", "one")).to.equal(9);
expect(add("eight", "two")).to.equal(10);
expect(add("eight", "three")).to.equal(11);
expect(add("eight", "four")).to.equal(12);
expect(add("eight", "five")).to.equal(13);
expect(add("eight", "six")).to.equal(14);
expect(add("eight", "seven")).to.equal(15);
expect(add("eight", "eight")).to.equal(16);
expect(add("eight", "nine")).to.equal(17);

expect(add("nine", "zero")).to.equal(9);
expect(add("nine", "one")).to.equal(10);
expect(add("nine", "two")).to.equal(11);
expect(add("nine", "three")).to.equal(12);
expect(add("nine", "four")).to.equal(13);
expect(add("nine", "five")).to.equal(14);
expect(add("nine", "six")).to.equal(15);
expect(add("nine", "seven")).to.equal(16);
expect(add("nine", "eight")).to.equal(17);
expect(add("nine", "nine")).to.equal(18);

console.log(add("zero", "one"))

function sub(a, b){
  if (a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
  }
  if (a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
  }
  if (a === "zero" && b === "two"){
    var a = 0;
    var b = 2;
  }
  if (a === "zero" && b === "three"){
    var a = 0;
    var b = 3;
  }
  if (a === "zero" && b === "four"){
    var a = 0;
    var b = 4;
  }
  if (a === "zero" && b === "five"){
    var a = 0;
    var b = 5;
  }
  if (a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
  }
  if (a === "zero" && b === "seven"){
    var a = 0;
    var b = 7;
  }
  if (a === "zero" && b === "eight"){
    var a = 0;
    var b = 8;
  }
  if (a === "zero" && b === "nine"){
    var a = 0;
    var b = 9;
  }
  if (a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
  }
  if (a === "one" && b === "one"){
    var a = 1;
    var b = 1;
  }
  if (a === "one" && b === "two"){
    var a = 1;
    var b = 2;
  }
  if (a === "one" && b === "three"){
    var a = 1;
    var b = 3;
  }
  if (a === "one" && b === "four"){
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
  if (a === "one" && b === "eight"){
    var a = 1;
    var b = 8;
  }
  if (a === "one" && b === "nine"){
    var a = 1;
    var b = 9;
  }
  if (a === "two" && b === "zero"){
    var a = 2;
    var b = 0;
  }
  if (a === "two" && b === "one"){
    var a = 2;
    var b = 1;
  }
  if (a === "two" && b === "two"){
    var a = 2;
    var b = 2;
  }
  if (a === "two" && b === "three"){
    var a = 2;
    var b = 3;
  }
  if (a === "two" && b === "four"){
    var a = 2;
    var b = 4;
  }
  if (a === "two" && b === "five"){
    var a = 2;
    var b = 5;
  }
  if (a === "two" && b === "six"){
    var a = 2;
    var b = 6;
  }
  if (a === "two" && b === "seven"){
    var a = 2;
    var b = 7;
  }
  if (a === "two" && b === "eight"){
    var a = 2;
    var b = 8;
  }
  if (a === "two" && b === "nine"){
    var a = 2;
    var b = 9;
  }
  if ( a === "three" && b === "zero"){
    var a = 3;
    var b = 0;
  }
  if (a === "three" && b === "one"){
    var a = 3;
    var b = 1;
  }
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if (a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if (a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if (a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if (a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if (a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if (a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  if ( a === "four" && b === "zero"){
    var a = 4;
    var b = 0;
  }
  if ( a === "four" && b === "one"){
    var a = 4;
    var b = 1;
  }
  if ( a === "four" && b === "two"){
    var a = 4;
    var b = 2;
  }
  if (a === "four" && b === "three"){
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
  if ( a === "four" && b === "six"){
    var a = 4;
    var b = 6;
  }
  if ( a === "four" && b === "seven"){
    var a = 4;
    var b = 7;
  }
  if ( a === "four" && b === "eight"){
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
  if (a === "six" && b === "one"){
    var a = 6;
    var b = 1;
  }
  if (a === "six" && b === "two"){
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
  if (a === "six" && b === "six"){
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
  if (a === "six" && b === "nine"){
    var a = 6;
    var b = 9;
  }
  if (a === "seven" && b === "zero"){
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
    var b = 5;
  }
  if ( a === "seven" && b === "six"){
    var a = 7;
    var b = 6;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
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
  if (a === "eight" && b === "two"){
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
  if (a === "nine" && b === "zero"){
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
  return a - b;
}

expect(sub).to.exist;
expect(sub("zero", "zero")).to.equal(0);
expect(sub("zero", "one")).to.equal(-1);
expect(sub("zero", "two")).to.equal(-2);
expect(sub("zero", "three")).to.equal(-3);
expect(sub("zero", "four")).to.equal(-4);
expect(sub("zero", "five")).to.equal(-5);
expect(sub("zero", "six")).to.equal(-6);
expect(sub("zero", "seven")).to.equal(-7);
expect(sub("zero", "eight")).to.equal(-8);
expect(sub("zero", "nine")).to.equal(-9);

expect(sub("one", "zero")).to.equal(1);
expect(sub("one", "one")).to.equal(0);
expect(sub("one", "two")).to.equal(-1);
expect(sub("one", "three")).to.equal(-2);
expect(sub("one", "four")).to.equal(-3);
expect(sub("one", "five")).to.equal(-4);
expect(sub("one", "six")).to.equal(-5);
expect(sub("one", "seven")).to.equal(-6);
expect(sub("one", "eight")).to.equal(-7);
expect(sub("one", "nine")).to.equal(-8);

expect(sub("two", "zero")).to.equal(2);
expect(sub("two", "one")).to.equal(1);
expect(sub("two", "two")).to.equal(0);
expect(sub("two", "three")).to.equal(-1);
expect(sub("two", "four")).to.equal(-2);
expect(sub("two", "five")).to.equal(-3);
expect(sub("two", "six")).to.equal(-4);
expect(sub("two", "seven")).to.equal(-5);
expect(sub("two", "eight")).to.equal(-6);
expect(sub("two", "nine")).to.equal(-7);

expect(sub("three", "zero")).to.equal(3);
expect(sub("three", "one")).to.equal(2);
expect(sub("three", "two")).to.equal(1);
expect(sub("three", "three")).to.equal(0);
expect(sub("three", "four")).to.equal(-1);
expect(sub("three", "five")).to.equal(-2);
expect(sub("three", "six")).to.equal(-3);
expect(sub("three", "seven")).to.equal(-4);
expect(sub("three", "eight")).to.equal(-5);
expect(sub("three", "nine")).to.equal(-6);

expect(sub("four", "zero")).to.equal(4);
expect(sub("four", "one")).to.equal(3);
expect(sub("four", "two")).to.equal(2);
expect(sub("four", "three")).to.equal(1);
expect(sub("four", "four")).to.equal(0);
expect(sub("four", "five")).to.equal(-1);
expect(sub("four", "six")).to.equal(-2);
expect(sub("four", "seven")).to.equal(-3);
expect(sub("four", "eight")).to.equal(-4);
expect(sub("four", "nine")).to.equal(-5);

expect(sub("five", "zero")).to.equal(5);
expect(sub("five", "one")).to.equal(4);
expect(sub("five", "two")).to.equal(3);
expect(sub("five", "three")).to.equal(2);
expect(sub("five", "four")).to.equal(1);
expect(sub("five", "five")).to.equal(0);
expect(sub("five", "six")).to.equal(-1);
expect(sub("five", "seven")).to.equal(-2);
expect(sub("five", "eight")).to.equal(-3);
expect(sub("five", "nine")).to.equal(-4);

expect(sub("six", "zero")).to.equal(6);
expect(sub("six", "one")).to.equal(5);
expect(sub("six", "two")).to.equal(4);
expect(sub("six", "three")).to.equal(3);
expect(sub("six", "four")).to.equal(2);
expect(sub("six", "five")).to.equal(1);
expect(sub("six", "six")).to.equal(0);
expect(sub("six", "seven")).to.equal(-1);
expect(sub("six", "eight")).to.equal(-2);
expect(sub("six", "nine")).to.equal(-3);

expect(sub("seven", "zero")).to.equal(7);
expect(sub("seven", "one")).to.equal(6);
expect(sub("seven", "two")).to.equal(5);
expect(sub("seven", "three")).to.equal(4);
expect(sub("seven", "four")).to.equal(3);
expect(sub("seven", "five")).to.equal(2);
expect(sub("seven", "six")).to.equal(1);
expect(sub("seven", "seven")).to.equal(0);
expect(sub("seven", "eight")).to.equal(-1);
expect(sub("seven", "nine")).to.equal(-2);

expect(sub("eight", "zero")).to.equal(8);
expect(sub("eight", "one")).to.equal(7);
expect(sub("eight", "two")).to.equal(6);
expect(sub("eight", "three")).to.equal(5);
expect(sub("eight", "four")).to.equal(4);
expect(sub("eight", "five")).to.equal(3);
expect(sub("eight", "six")).to.equal(2);
expect(sub("eight", "seven")).to.equal(1);
expect(sub("eight", "eight")).to.equal(0);
expect(sub("eight", "nine")).to.equal(-1);

expect(sub("nine", "zero")).to.equal(9);
expect(sub("nine", "one")).to.equal(8);
expect(sub("nine", "two")).to.equal(7);
expect(sub("nine", "three")).to.equal(6);
expect(sub("nine", "four")).to.equal(5);
expect(sub("nine", "five")).to.equal(4);
expect(sub("nine", "six")).to.equal(3);
expect(sub("nine", "seven")).to.equal(2);
expect(sub("nine", "eight")).to.equal(1);
expect(sub("nine", "nine")).to.equal(0);

function multiply(a, b){
  if ( a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
  }
  if ( a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
  }
  if ( a === "zero" && b === "two"){
    var a = 0;
    var b = 2;
  }
  if ( a === "zero" && b === "three"){
    var a = 0;
    var b = 3;
  }
  if ( a === "zero" && b === "four"){
    var a = 0;
    var b = 4;
  }
  if ( a === "zero" && b === "five"){
    var a = 0;
    var b = 5;
  }
  if ( a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
  }
  if ( a === "zero" && b === "seven"){
    var a = 0;
    var b = 7;
  }
  if ( a === "zero" && b === "eight"){
    var a = 0;
    var b = 8;
  }
  if ( a === "zero" && b === "nine"){
    var a = 0;
    var b = 9;
  }
  if ( a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
  }
  if ( a === "one" && b === "one"){
    var a = 1;
    var b = 1;
  }
  if ( a === "one" && b === "two"){
    var a = 1;
    var b = 2;
  }
  if ( a === "one" && b === "three"){
    var a = 1;
    var b = 3;
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
  if ( a === "one" & b === "seven"){
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
  if (a === "two" && b === "three"){
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
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  if ( a === "four" && b === "zero"){
    var a = 4;
    var b = 0;
  }
  if ( a === "four" && b === "one"){
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
  if ( a === "four" && b === "six"){
    var a = 4;
    var b = 6;
  }
  if ( a === "four" && b === "seven"){
    var a = 4;
    var b = 7;
  }
  if ( a === "four" && b === "eight"){
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
    var b = 5;
  }
  if ( a === "seven" && b === "six"){
    var a = 7;
    var b = 6;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
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
  return a * b
}

expect(multiply).to.exist;
expect(multiply("zero", "zero")).to.equal(0);
expect(multiply("zero", "one")).to.equal(0);
expect(multiply("zero", "two")).to.equal(0);
expect(multiply("zero", "three")).to.equal(0);
expect(multiply("zero", "four")).to.equal(0);
expect(multiply("zero", "five")).to.equal(0);
expect(multiply("zero", "six")).to.equal(0);
expect(multiply("zero", "seven")).to.equal(0);
expect(multiply("zero", "eight")).to.equal(0);
expect(multiply("zero", "nine")).to.equal(0);

expect(multiply("one", "zero")).to.equal(0);
expect(multiply("one", "one")).to.equal(1);
expect(multiply("one", "two")).to.equal(2);
expect(multiply("one", "three")).to.equal(3);
expect(multiply("one", "four")).to.equal(4);
expect(multiply("one", "five")).to.equal(5);
expect(multiply("one", "six")).to.equal(6);
expect(multiply("one", "seven")).to.equal(7);
expect(multiply("one", "eight")).to.equal(8);
expect(multiply("one", "nine")).to.equal(9);

expect(multiply("two", "zero")).to.equal(0);
expect(multiply("two", "one")).to.equal(2);
expect(multiply("two", "two")).to.equal(4);
expect(multiply("two", "three")).to.equal(6);
expect(multiply("two", "four")).to.equal(8);
expect(multiply("two", "five")).to.equal(10);
expect(multiply("two", "six")).to.equal(12);
expect(multiply("two", "seven")).to.equal(14);
expect(multiply("two", "eight")).to.equal(16);
expect(multiply("two", "nine")).to.equal(18);

expect(multiply("three", "zero")).to.equal(0);
expect(multiply("three", "one")).to.equal(3);
expect(multiply("three", "two")).to.equal(6);
expect(multiply("three", "three")).to.equal(9);
expect(multiply("three", "four")).to.equal(12);
expect(multiply("three", "five")).to.equal(15);
expect(multiply("three", "six")).to.equal(18);
expect(multiply("three", "seven")).to.equal(21);
expect(multiply("three", "eight")).to.equal(24);
expect(multiply("three", "nine")).to.equal(27);

expect(multiply("four", "zero")).to.equal(0);
expect(multiply("four", "one")).to.equal(4);
expect(multiply("four", "two")).to.equal(8);
expect(multiply("four", "three")).to.equal(12);
expect(multiply("four", "four")).to.equal(16);
expect(multiply("four", "five")).to.equal(20);
expect(multiply("four", "six")).to.equal(24);
expect(multiply("four", "seven")).to.equal(28);
expect(multiply("four", "eight")).to.equal(32);
expect(multiply("four", "nine")).to.equal(36);

expect(multiply("five", "zero")).to.equal(0);
expect(multiply("five", "one")).to.equal(5);
expect(multiply("five", "two")).to.equal(10);
expect(multiply("five", "three")).to.equal(15);
expect(multiply("five", "four")).to.equal(20);
expect(multiply("five", "five")).to.equal(25);
expect(multiply("five", "six")).to.equal(30);
expect(multiply("five", "seven")).to.equal(35);
expect(multiply("five", "eight")).to.equal(40);
expect(multiply("five", "nine")).to.equal(45);

expect(multiply("six", "zero")).to.equal(0);
expect(multiply("six", "one")).to.equal(6);
expect(multiply("six", "two")).to.equal(12);
expect(multiply("six", "three")).to.equal(18);
expect(multiply("six", "four")).to.equal(24);
expect(multiply("six", "five")).to.equal(30);
expect(multiply("six", "six")).to.equal(36);
expect(multiply("six", "seven")).to.equal(42);
expect(multiply("six", "eight")).to.equal(48);
expect(multiply("six", "nine")).to.equal(54);

expect(multiply("seven", "zero")).to.equal(0);
expect(multiply("seven", "one")).to.equal(7);
expect(multiply("seven", "two")).to.equal(14);
expect(multiply("seven", "three")).to.equal(21);
expect(multiply("seven", "four")).to.equal(28);
expect(multiply("seven", "five")).to.equal(35);
expect(multiply("seven", "six")).to.equal(42);
expect(multiply("seven", "seven")).to.equal(49);
expect(multiply("seven", "eight")).to.equal(56);
expect(multiply("seven", "nine")).to.equal(63);

expect(multiply("eight", "zero")).to.equal(0);
expect(multiply("eight", "one")).to.equal(8);
expect(multiply("eight", "two")).to.equal(16);
expect(multiply("eight", "three")).to.equal(24);
expect(multiply("eight", "four")).to.equal(32);
expect(multiply("eight", "five")).to.equal(40);
expect(multiply("eight", "six")).to.equal(48);
expect(multiply("eight", "seven")).to.equal(56);
expect(multiply("eight", "eight")).to.equal(64);
expect(multiply("eight", "nine")).to.equal(72);

expect(multiply("nine", "zero")).to.equal(0);
expect(multiply("nine", "one")).to.equal(9);
expect(multiply("nine", "two")).to.equal(18);
expect(multiply("nine", "three")).to.equal(27);
expect(multiply("nine", "four")).to.equal(36);
expect(multiply("nine", "five")).to.equal(45);
expect(multiply("nine", "six")).to.equal(54);
expect(multiply("nine", "seven")).to.equal(63);
expect(multiply("nine", "eight")).to.equal(72);
expect(multiply("nine", "nine")).to.equal(81);

function div(a, b){
  if ( a === "zero" && b === "zero"){
    var a = 0;
    var b = 0;
  }
  if ( a === "zero" && b === "one"){
    var a = 0;
    var b = 1;
  }
  if ( a === "zero" && b === "two"){
    var a = 0;
    var b = 2;
  }
  if ( a === "zero" && b === "three"){
    var a = 0;
    var b = 3;
  }
  if ( a === "zero" && b === "four"){
    var a = 0;
    var b = 4;
  }
  if ( a === "zero" && b === "five"){
    var a = 0;
    var b = 5;
  }
  if ( a === "zero" && b === "six"){
    var a = 0;
    var b = 6;
  }
  if ( a === "zero" && b === "seven"){
    var a = 0;
    var b = 7;
  }
  if ( a === "zero" && b === "eight"){
    var a = 0;
    var b = 8;
  }
  if ( a === "zero" && b === "nine"){
    var a = 0;
    var b = 9;
  }
  if ( a === "one" && b === "zero"){
    var a = 1;
    var b = 0;
  }
  if ( a === "one" && b === "one"){
    var a = 1;
    var b = 1;
  }
  if ( a === "one" && b === "two"){
    var a = 1;
    var b = 2;
  }
  if ( a === "one" && b === "three"){
    var a = 1;
    var b = 3;
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
  if ( a === "three" && b === "two"){
    var a = 3;
    var b = 2;
  }
  if ( a === "three" && b === "three"){
    var a = 3;
    var b = 3;
  }
  if ( a === "three" && b === "four"){
    var a = 3;
    var b = 4;
  }
  if ( a === "three" && b === "five"){
    var a = 3;
    var b = 5;
  }
  if ( a === "three" && b === "six"){
    var a = 3;
    var b = 6;
  }
  if ( a === "three" && b === "seven"){
    var a = 3;
    var b = 7;
  }
  if ( a === "three" && b === "eight"){
    var a = 3;
    var b = 8;
  }
  if ( a === "three" && b === "nine"){
    var a = 3;
    var b = 9;
  }
  if ( a === "four" && b === "zero"){
    var a = 4;
    var b = 0;
  }
  if ( a === "four" && b === "one"){
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
  if ( a === "four" && b === "six"){
    var a = 4;
    var b = 6;
  }
  if ( a === "four" && b === "seven"){
    var a = 4;
    var b = 7;
  }
  if ( a === "four" && b === "eight"){
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
    var b = 5;
  }
  if ( a === "seven" && b === "six"){
    var a = 7;
    var b = 6;
  }
  if ( a === "seven" && b === "seven"){
    var a = 7;
    var b = 7;
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
  return a/b
}



function div(a, b){
    return toNumber(a)/toNumber(b);
}

expect(div).to.exist;
expect(div("zero", "three")).to.equal(0);
expect(div("three", "zero")).to.equal(Infinity);
expect(div("three", "five")).to.equal(.6);
expect(div("six", "two")).to.equal(3);
//expect(div("zero", "zero")).to.equal(NaN);

console.log(div("zero","six"));
console.log(div("zero", "zero"));
console.log(div("four", "seven"));
console.log(div("two", "zero"));
