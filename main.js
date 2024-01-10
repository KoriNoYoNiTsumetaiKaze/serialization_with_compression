const serUnit = require("./serUnit");
const min = 1;
const max = 300;
var NumArr = [];
let txt = '';
for (let i=0; i<1000; i++) {
    NumArr.push(Math.floor(Math.random() * (max - min)) + min);
    txt +=(NumArr[i]+' ');
}
console.log(txt);
result = serUnit.serial(NumArr);
console.log(result);
console.log('Исходный размер: '+txt.length);
console.log('Итоговый размер: '+result.length);
console.log('Сжатие: '+((txt.length-result.length)/txt.length)*100);
txt = '';
NumArr = serUnit.deserial(result);
for (let val of NumArr)
  txt +=(val+' ');
console.log(txt);
