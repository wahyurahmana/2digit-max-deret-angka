let angka = 7469213;
let str = angka.toString();
let tempA = "";
let tempMax = null;
console.log(`Angka Yang Tersedia ialah : ${str}`)
for (let i = 0; i < str.length; i++) {
  for (let j = i+1; j > i; j--) {
    tempA = str[i]+str[j]
  }
  if (tempMax == null) {
    tempMax = tempA;
  }else{
    if (tempA >= tempMax) {
      tempMax = tempA
    }
  }
}
console.log(`Dua Digit Angka Terbesar nya adalah ${Number(tempMax)}`);
