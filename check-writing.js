/**
* When you write a check, to validate the ammount,
* you have to write the English words for the amount
* on a separate line. For example, a check for $123.45
* has a line with:
*
*   ond hundred twenty three and 45/100s dollars
*
* Given a function 'toEnglish' that accepts a JavaScript
* 'Number' and returns a 'String' formatted for use on a
* check, as above.
*/
var expect = require('chai').expect;

function toEnglish(number){
  // ????
}

//Test casses here.....
expect(toEnglish).to.exist;
expect(toEnglish(1)).to.equal("one");
