/**

 *

 * Write a function `f(a, b)` which takes two strings as arguments and returns a

 * string containing the characters found in both strings (without duplication), in the

 * order that they appeared in `a`. Remember to skip spaces and characters you

 * have already encountered!

 *

 * Example: commonCharacters('acexivou', 'aegihobu')

 * Returns: 'aeiou'

 * Should return null or empty string of there is no commonCharacters

 */////

function commonCharacters(a, b) {
    var result = ''
    for (var i = 0; i < a.length; i++) {
        var char = a.charAt(i)
        // avec ca je vais prendre character in a  avec lindex i.. -1 bc if there isn't something in common it give -1 so it needs to be !== -1 so I only access the common character  
        if (b.indexOf(char) !== -1) {
            result = result + char
        }
    }
    if (result) {
        return result
    } else {
        return null
    }

}
///////////////////////////avec 2 loops

function commonCharacters(a, b) {
    var res = ''
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; i < b.length; j++) {
            if (a[i] === a[j] && !res.includes(a[i]) && a[i] !== ' ') {
                res = res + a[i]
            }
        }
    }

return res || null


}