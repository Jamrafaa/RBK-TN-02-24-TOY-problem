/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */
const firstNonRepeatedCharacter = function (string) {
  var letters = string.split('')
  for (var i = 0; i < string.length; i++) {
    var one = letters[i]
    if (one !== string[i]) {
      return one
    }
  }
  return null
}
///////////////////////////////////////CORRIGER !!!!!!!
//nekhedh il length ... bad loop w hsart kol caracter ... bch nkaren ... ican nkaren b another loop or with indexOf or /// il faut 2 loops !!!! for
// we gonna use indexoF and LastIndexOF(c'est deja fihom loop)...... last indexod tekef fil 0 .... w indexOf tekef fel lekhreniya WAHDA TALAA W WAHDA HABTAA
// fi nafs il loop mtei
//sinon felekhr return null .

const firstNonRepeatedCharacter = function (string) {
for(var i=0 ; i<string.length ; i++){
  if(string.indexOf(string[i])=== string.lastIndexOf(string[i])){
return string[i]
  }
}
return null

}


