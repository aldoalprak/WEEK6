/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {
  // your code here
  
  //split sentence
  var arrKalimat=sentence.toLowerCase().split(' ');
  var arrReverse=[];
  for(var i=0;i<arrKalimat.length;i++) {
    var store='';
    for( var j=arrKalimat[i].length-1;j>=0;j--) {
      store+=arrKalimat[i][j];
    }
    arrReverse.push(store);
  }
  
  //bandingin arrKalimat dengan arrReverse
  var output=[];
  for(var k=0;k<arrKalimat.length;k++) {
    if(arrKalimat[k]!==arrReverse[k]) {
      output.push(arrKalimat[k]);
    }
  }
  return output;
}

console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']

console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']

console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
