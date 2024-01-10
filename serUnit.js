const dicStr = '##########qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNMйцукенгшщзхъфывапролджэячсмитьбюЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ';

exports.serial = function(inData,err='') {
    if (!Array.isArray(inData)){
        err = 'incoming data is not an array';
        return '';
    }
    let sumItem;
    let sumArr = new Map();
    inData.forEach(function(item) {
        if (!Number.isInteger(item)){
            err = 'there is no number or integer in the array';
            return '';
        }
        if (item<100 && item>10) item = dicStr.charAt(item)
        else if (item>99) {
            item = item.toString();
            item = dicStr.charAt(Number(item.charAt(0)+item.charAt(1)))+item.charAt(2);
            }
        if (sumArr.has(item)){
            sumItem = sumArr.get(item);
            sumItem++;
        }
        else
            sumItem = 1;
        sumArr.set(item,sumItem);
    });
    let result = '';
    sumArr.forEach(function(value,key) {
        if (value>1) key = value.toString()+key;
        if (result.trim()=='')
          result = key
        else
          result += '!'+key;
    });    
    return result;
}

exports.deserial = function(inStr) {
    let inArr = inStr.toString().split('!');
    let result = [];
    inArr.forEach(function(item) {
        if (/^\d+$/.test(item)){
            result.push(Number(item));
        }
        else {
            let letter = item.search(/[a-zA-Zа-яА-Я]/);
            let quantity = item.substring(0,letter);
            quantity = Number(quantity);
            let num = item.substring(letter);
            letter = num.charAt(0);
            num = num.replace(letter, dicStr.indexOf(letter));
            if (quantity==0)
              result.push(Number(num))
            else
              for (let i=0;i<quantity;i++)
                result.push(Number(num));
        }
    });
    return result;
}
