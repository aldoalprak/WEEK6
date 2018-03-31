/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )

//Algortima

1.Sorting
 -melakukan sorting untuk parameter numbers menggunakan nested for loops
    -->buat variable tampung
    --->for pertama iterasi i=0 ; i<numbers.length
    -- >for kedua iterasi j=i+1 ;j<numbers.length
        -->jika numbers[i]>numbers[j]
            -->tampung=numbers[j],numbers[j]=numbers[i],numbers[i]=tampung
            
2.Menentukan min dan max
  --> tentukan min dar numbers[0]
  --->tentukan max dari numbers[numbers.length-1]

3.Tentukan missing numbers
  -->buat var output dng bentuk data array
  -->lakukan for loop untuk i=min sampai i<max
     00>gunakan typeof jika =-1 push ke array output
*/

function missingNumbers (numbers) {
  // Code disini
  
  //sorting
  var tampung=0;
  for(var i=0;i<numbers.length;i++) {
    for(var j=i+1;j<numbers.length;j++) {
      if(numbers[i]>numbers[j]) {
        tampung=numbers[j];
        numbers[j]=numbers[i];
        numbers[i]=tampung;
      }
    }
  }
  
  //tentuin max dan min
  var min=numbers[0];
  var max=numbers[numbers.length-1];
  
  //tentuin missingNumbers
  var output=[];
  for(var k=min;k<max;k++) {
    if(numbers.indexOf(k)===-1){
      output.push(k);
    }
  }
  return output;
}

console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []
