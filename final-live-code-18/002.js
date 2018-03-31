/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa virus yang
terdapat di dalam `str` berdasarkan `viruses` yang dicari.

Contoh 1:
input:
  str: 'qlD4MZax0raQqew'
  viruses: 'x|0|q' ==> berarti mencari x, 0 dan q

output: 4 viruses detected

Contoh 2:
input:
  str: 'HH0NBP1zRa'
  viruses: 'h|r' ==> berarti mencari h dan r

outuput: 3 viruses detected


RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

ALGORITMA
1.cari jenis virus
  ---->buat var jenisVirus dengann bentuk array
  ---->buat var store sebagai penampung
  --->lakukan for loop untuk i=0, i<viruses.length
      --->jika ketemu '|'maka push store ke jenisVirus
      --->selain itu store+=virus[i].toLowerCase
      
2.Cek ada berapa virus
  --->buat var tampung
  --->lakukan nested loop untuk membandingkan jenis virus dan str
  --->jika jenis virus==str maka tampung+=
  
  --->buat if diluar loop untuk memuat kondisi output (=1,>1,dst)
*/

function virusCheck (str, viruses) {
  // your code here
  //cari jenis virus
  if(viruses===undefined|| str===undefined || str.length===0 || viruses.length===0) {
    return 'No virus detected'
  }
  var store='';
  var jenisVirus=[];
  for(var i=0;i<viruses.length;i++) {
    if(viruses[i]==='|') {
      jenisVirus.push(store);
      store=''
    }else {
      store+=viruses[i].toLowerCase();
    }
  }
jenisVirus.push(store);

  //cek ada berap virus
  var tampung=0;
  for(var j=0;j<jenisVirus.length;j++) {
    for(var k=0;k<str.length;k++) {
      if(jenisVirus[j]===str[k].toLowerCase()){
        tampung+=1
      }
    }
  }
  
  if(tampung>1) {
    return tampung+' viruses detected'
  }else if(tampung===0){
    return 'No virus detected'
  
   }else {
    return tampung+' virus detected'
  }

}

console.log(virusCheck('qlD4MZax0raQqew', 'x|0|q')); // 5 viruses detected
console.log(virusCheck('HH0NBP1zRa', 'h|r')); // 3 viruses detected
console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy', '4|X|p')); // 6 viruses detected
console.log(virusCheck('mjBgPlzks', 'm')); // 1 virus detected
console.log(virusCheck('AIn4Ks05bBaa', 'x')); // No virus detected
console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
console.log(virusCheck('')); // No virus detected
